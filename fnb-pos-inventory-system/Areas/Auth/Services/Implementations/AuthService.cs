using fnb_pos_inventory_system.Areas.Auth.DTOs;
using fnb_pos_inventory_system.Areas.Auth.Services.Interfaces;
using fnb_pos_inventory_system.Entities;
using fnb_pos_inventory_system.Exceptions;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace fnb_pos_inventory_system.Areas.Auth.Services.Implementations;

public class AuthService : IAuthService
{
    // Dependency Injection
    private readonly UserManager<Account> _userManager;
    private readonly IPhoneService _phoneService;
    private readonly ISmsService _smsService;

    // HashService vẫn cần cho Refresh Token
    private readonly IHashService _hashService;

    // OtpService chịu trách nhiệm toàn bộ logic OTP
    private readonly IOtpService _otpService;

    private readonly ApplicationDbContext _context;
    private readonly ITokenService _tokenService;
    private readonly IConfiguration _configuration;

    public AuthService(
        UserManager<Account> userManager,
        IPhoneService phoneService,
        ISmsService smsService,
        IHashService hashService,
        IOtpService otpService,
        ITokenService tokenService,
        ApplicationDbContext context,
        IConfiguration configuration)
    {
        _userManager = userManager;
        _phoneService = phoneService;
        _smsService = smsService;
        _hashService = hashService;
        _otpService = otpService;
        _tokenService = tokenService;
        _context = context;
        _configuration = configuration;
    }
    public async Task<RegisterResponse> RegisterAsync (RegisterRequest request)
    {
        // 1. Normalize phone number
        var phoneNumber =
            _phoneService.Normalize(request.PhoneNumber);

        // 2. Validate phone number
        if (!_phoneService.IsValid(phoneNumber))
        {
            throw new BusinessException("Số điện thoại không hợp lệ.");
        }

        // 3. Check if phone number already exists
        var existingUser = await _userManager.Users.FirstOrDefaultAsync(x => x.PhoneNumber == phoneNumber);

        if (existingUser != null)
        {
            throw new BusinessException("Số điện thoại đã được đăng ký.");
        }

        // 4. Create account
        var account = new Account
        {
            FullName = request.FullName,
            PhoneNumber = phoneNumber,
            UserName = phoneNumber,
            PhoneNumberConfirmed = false
        };

        // 5. Create account using ASP.NET Core Identity
        var result = await _userManager.CreateAsync( account, request.Password);

        // 6. Check account creation result
        if (!result.Succeeded)
        {
            var errors = string.Join(", ",result.Errors.Select(e => e.Description));

            throw new BusinessException(errors);
        }

        // 7. Assign default User role
        var roleResult =
            await _userManager.AddToRoleAsync(account, "User");

        if (!roleResult.Succeeded)
        {
            var errors = string.Join(", ", roleResult.Errors.Select( e => e.Description));

            throw new BusinessException(errors);
        }

        // 8. Generate and save Register OTP
        // OtpService tự xử lý:
        // - Random OTP
        // - Hash OTP
        // - ExpiresAt
        // - FailedAttempts
        // - Purpose
        // - Save database
        var otp = await _otpService.GenerateAndSaveOtpAsync(phoneNumber, "Register");

        // 9. Send OTP
        await _smsService.SendOtpAsync(phoneNumber, otp);

        // 10. Return response
        // Otp chỉ nên trả trong Development để test
        return new RegisterResponse
        {
            Message = $"Đăng ký thành công. Mã OTP là: {otp}",
            UserId = account.Id
        };
    }

    public async Task<VerifyRegisterOtpResponse> VerifyRegisterOtpAsync (VerifyRegisterOtpRequest request)
    {
        // 1. Normalize phone number
        var phoneNumber =_phoneService.Normalize(request.PhoneNumber);

        // 2. Validate phone number
        if (!_phoneService.IsValid(phoneNumber))
        {
            throw new BusinessException("Số điện thoại không hợp lệ.");
        }

        // 3. Validate Register OTP
        // OtpService tự xử lý:
        // - tìm OTP mới nhất
        // - IsUsed
        // - Purpose
        // - ExpiresAt
        // - FailedAttempts
        // - Hash verification
        // - đánh dấu IsUsed = true
        await _otpService.ValidateOtpAsync(phoneNumber, request.Otp, "Register");

        // 4. Find account
        var account = await _userManager.Users.FirstOrDefaultAsync(x => x.PhoneNumber == phoneNumber);

        if (account == null)
        {
            throw new BusinessException("Tài khoản không tồn tại.");
        }

        // 5. Confirm phone number
        account.PhoneNumberConfirmed = true;

        // 6. Save account changes
        await _context.SaveChangesAsync();

        // 7. Return response
        return new VerifyRegisterOtpResponse
        {
            Message = "Xác thực số điện thoại thành công.",
            UserId = account.Id
        };
    }

    public async Task<LoginResponse> LoginAsync(LoginRequest request)
    {
        // 1. Normalize phone number
        var phoneNumber = _phoneService.Normalize(request.PhoneNumber);

        // 2. Validate phone number
        if (!_phoneService.IsValid(phoneNumber))
        {
            throw new BusinessException("Số điện thoại không hợp lệ.");
        }

        // 3. Find account
        var account = await _userManager.Users.FirstOrDefaultAsync(x => x.PhoneNumber == phoneNumber);

        if (account == null)
        {
            throw new BusinessException("Số điện thoại hoặc mật khẩu không chính xác.");
        }

        // 4. Check phone verification
        if (!account.PhoneNumberConfirmed)
        {
            throw new BusinessException("Số điện thoại chưa được xác thực.");
        }

        // 5. Check password
        var isPasswordValid =
            await _userManager.CheckPasswordAsync(account, request.Password);

        if (!isPasswordValid)
        {
            throw new BusinessException("Số điện thoại hoặc mật khẩu không chính xác.");
        }

        // 6. Generate Access Token
        var accessToken = await _tokenService.GenerateAccessTokenAsync(account);

        // 7. Generate Refresh Token
        var refreshToken = _tokenService.GenerateRefreshToken();

        // 8. Get Refresh Token secret
        var refreshTokenSecret =
            _configuration["RefreshToken:Secret"] ?? throw new InvalidOperationException("Refresh Token Secret chưa được cấu hình.");

        // 9. Hash Refresh Token before storing
        var refreshTokenHash = _hashService.Hash(refreshToken, refreshTokenSecret);

        // 10. Get Refresh Token expiration
        var refreshTokenExpireDays = int.Parse(_configuration["RefreshToken:ExpireDays"] ?? "7");

        // 11. Create Refresh Token entity
        var refreshTokenEntity =
            new RefreshToken
            {
                AccountId = account.Id,
                TokenHash = refreshTokenHash,
                ExpiresAt = DateTime.UtcNow.AddDays(refreshTokenExpireDays),
                IsRevoked = false
            };

        // 12. Save Refresh Token
        _context.RefreshTokens.Add(refreshTokenEntity);

        await _context.SaveChangesAsync();

        // 13. Get Access Token expiration
        var accessTokenExpireMinutes =
            int.Parse(_configuration["Jwt:ExpireMinutes"] ?? "60");

        // 14. Return token pair
        return new LoginResponse
        {
            AccessToken = accessToken,
            RefreshToken = refreshToken,
            ExpiresAt = DateTime.UtcNow.AddMinutes(accessTokenExpireMinutes)
        };
    }

    public async Task<RefreshTokenResponse> RefreshTokenAsync (RefreshTokenRequest request)
    {
        // 1. Validate Refresh Token
        if (string.IsNullOrWhiteSpace(
            request.RefreshToken))
        {
            throw new BusinessException("Refresh Token không hợp lệ.");
        }

        // 2. Get Refresh Token secret
        var refreshTokenSecret = _configuration["RefreshToken:Secret"] ?? throw new InvalidOperationException("Refresh Token Secret chưa được cấu hình.");

        // 3. Hash provided Refresh Token
        var refreshTokenHash = _hashService.Hash(request.RefreshToken, refreshTokenSecret);

        // 4. Find Refresh Token in database
        var storedRefreshToken = await _context.RefreshTokens.FirstOrDefaultAsync(x => x.TokenHash == refreshTokenHash);

        if (storedRefreshToken == null)
        {
            throw new BusinessException("Refresh Token không hợp lệ.");
        }

        // 5. Check revoked
        if (storedRefreshToken.IsRevoked)
        {
            throw new BusinessException("Refresh Token đã bị thu hồi.");
        }

        // 6. Check expiration
        if (DateTime.UtcNow > storedRefreshToken.ExpiresAt)
        {
            throw new BusinessException("Refresh Token đã hết hạn.");
        }

        // 7. Find account
        var account = await _userManager.FindByIdAsync(storedRefreshToken.AccountId);

        if (account == null)
        {
            throw new BusinessException("Tài khoản không tồn tại.");
        }

        // 8. Revoke old Refresh Token
        storedRefreshToken.IsRevoked = true;
        storedRefreshToken.RevokedAt = DateTime.UtcNow;

        // 9. Generate new Access Token
        var newAccessToken = await _tokenService.GenerateAccessTokenAsync(account);

        // 10. Generate new Refresh Token
        var newRefreshToken = _tokenService.GenerateRefreshToken();

        // 11. Hash new Refresh Token
        var newRefreshTokenHash = _hashService.Hash(newRefreshToken,refreshTokenSecret);

        // 12. Get expiration
        var refreshTokenExpireDays = int.Parse(_configuration["RefreshToken:ExpireDays"] ?? "7");

        // 13. Create new Refresh Token record
        var newRefreshTokenEntity =
            new RefreshToken
            {
                AccountId = account.Id,
                TokenHash = newRefreshTokenHash,
                ExpiresAt = DateTime.UtcNow.AddDays(refreshTokenExpireDays),
                IsRevoked = false
            };

        // 14. Save old revoke state + new token
        _context.RefreshTokens.Add(newRefreshTokenEntity);

        await _context.SaveChangesAsync();

        // 15. Access Token expiration
        var accessTokenExpireMinutes = int.Parse(_configuration["Jwt:ExpireMinutes"]?? "60");

        // 16. Return rotated token pair
        return new RefreshTokenResponse
        {
            AccessToken =
                newAccessToken,
            RefreshToken =
                newRefreshToken,
            ExpiresAt =
                DateTime.UtcNow.AddMinutes(
                    accessTokenExpireMinutes)
        };
    }

    public async Task LogoutAsync(LogoutRequest request)
    {
        // 1. Validate Refresh Token
        if (string.IsNullOrWhiteSpace(
            request.RefreshToken))
        {
            throw new BusinessException("Refresh Token không hợp lệ.");
        }

        // 2. Get Refresh Token secret
        var refreshTokenSecret = _configuration["RefreshToken:Secret"] ?? throw new InvalidOperationException("Refresh Token Secret chưa được cấu hình.");

        // 3. Hash provided Refresh Token
        var refreshTokenHash = _hashService.Hash( request.RefreshToken, refreshTokenSecret);

        // 4. Find Refresh Token
        var storedRefreshToken = await _context.RefreshTokens.FirstOrDefaultAsync(x => x.TokenHash == refreshTokenHash);

        if (storedRefreshToken == null)
        {
            throw new BusinessException("Refresh Token không hợp lệ.");
        }

        // 5. Check already revoked
        if (storedRefreshToken.IsRevoked)
        {
            throw new BusinessException("Refresh Token đã bị thu hồi.");
        }

        // 6. Revoke token
        storedRefreshToken.IsRevoked = true;
        storedRefreshToken.RevokedAt = DateTime.UtcNow;

        // 7. Save
        await _context.SaveChangesAsync();
    }

    public async Task<ForgotPasswordResponse> ForgotPasswordAsync (ForgotPasswordRequest request)
    {
        // 1. Normalize phone number
        var phoneNumber =_phoneService.Normalize(request.PhoneNumber);

        // 2. Validate phone number
        if (!_phoneService.IsValid(phoneNumber))
        {
            throw new BusinessException("Số điện thoại không hợp lệ.");
        }

        // 3. Find account
        var account =await _userManager.Users.FirstOrDefaultAsync(x => x.PhoneNumber == phoneNumber);

        if (account == null)
        {
            throw new BusinessException("Nếu số điện thoại được đăng ký, mã xác thực sẽ được gửi.");
        }

        // 4. Generate and save Forgot Password OTP
        var otp = await _otpService.GenerateAndSaveOtpAsync(phoneNumber,"ForgotPassword");

        // 5. Send OTP
        await _smsService.SendOtpAsync(phoneNumber, otp);

        // 6. Return response
        // Otp chỉ dùng khi Development
        return new ForgotPasswordResponse
        {
            Message = "Nếu số điện thoại được đăng ký, mã xác thực sẽ được gửi.",
            Otp = otp
        };
    }

    public async Task<VerifyForgotPasswordOtpResponse> VerifyForgotPasswordOtpAsync (VerifyForgotPasswordOtpRequest request)
    {
        // 1. Normalize phone number
        var phoneNumber = _phoneService.Normalize(request.PhoneNumber);

        // 2. Validate phone number
        if (!_phoneService.IsValid(phoneNumber))
        {
            throw new BusinessException("Số điện thoại không hợp lệ.");
        }

        // 3. Find account
        var account = await _userManager.Users.FirstOrDefaultAsync(x =>x.PhoneNumber == phoneNumber);

        if (account == null)
        {
            throw new BusinessException("Tài khoản không tồn tại.");
        }

        // 4. Validate Forgot Password OTP
        await _otpService.ValidateOtpAsync(phoneNumber ,request.Otp, "ForgotPassword");

        // 5. Generate Identity Reset Token
        var resetToken = await _userManager.GeneratePasswordResetTokenAsync(account);

        // 6. Return Reset Token
        return new VerifyForgotPasswordOtpResponse
        {
            ResetToken = resetToken
        };
    }

    public async Task ResetPasswordAsync(
        ResetPasswordRequest request)
    {
        // 1. Normalize phone number
        var phoneNumber = _phoneService.Normalize(request.PhoneNumber);

        // 2. Validate phone number
        if (!_phoneService.IsValid(phoneNumber))
        {
            throw new BusinessException("Số điện thoại không hợp lệ.");
        }

        // 3. Validate Reset Token
        if (string.IsNullOrWhiteSpace(request.ResetToken))
        {
            throw new BusinessException("Reset Token không hợp lệ.");
        }

        // 4. Validate new password
        if (string.IsNullOrWhiteSpace(request.NewPassword))
        {
            throw new BusinessException("Mật khẩu mới không được để trống.");
        }

        // 5. Find account
        var account = await _userManager.Users.FirstOrDefaultAsync(x =>x.PhoneNumber == phoneNumber);

        if (account == null)
        {
            throw new BusinessException("Yêu cầu đặt lại mật khẩu không hợp lệ.");
        }

        // 6. Reset password using Identity
        var result =await _userManager.ResetPasswordAsync(account, request.ResetToken, request.NewPassword);

        // 7. Check result
        if (!result.Succeeded)
        {
            var errors =string.Join(", ", result.Errors.Select( e => e.Description));

            throw new BusinessException(errors);
        }
    }

    public async Task<ResendOtpResponse> ResendOtpAsync (ResendOtpRequest request)
    {
        // 1. Normalize phone number
        var phoneNumber = _phoneService.Normalize(request.PhoneNumber);

        // 2. Validate phone number
        if (!_phoneService.IsValid(phoneNumber))
        {
            throw new BusinessException("Số điện thoại không hợp lệ.");
        }

        // 3. Validate OTP purpose
        if (request.Purpose != "Register" && request.Purpose != "ForgotPassword")
        {
            throw new BusinessException("Mục đích OTP không hợp lệ.");
        }

        // 4. Find account
        var account = await _userManager.Users.FirstOrDefaultAsync(x =>x.PhoneNumber ==phoneNumber);

        // 5. Register resend validation
        if (request.Purpose == "Register")
        {
            if (account == null)
            {
                throw new BusinessException("Tài khoản không tồn tại.");
            }

            if (account.PhoneNumberConfirmed)
            {
                throw new BusinessException("Số điện thoại đã được xác thực.");
            }
        }

        // 6. Forgot Password resend validation
        if (request.Purpose ==
            "ForgotPassword")
        {
            if (account == null)
            {
                throw new BusinessException("Tài khoản không tồn tại.");
            }
        }

        // 7. Check 60-second cooldown
        await _otpService.CheckCooldownAsync(phoneNumber, request.Purpose, 60);

        // 8. Invalidate old active OTPs
        await _otpService.InvalidateActiveOtpsAsync(phoneNumber, request.Purpose);

        // 9. Generate new OTP
        var otp = await _otpService.GenerateAndSaveOtpAsync(phoneNumber, request.Purpose);

        // 10. Send OTP
        await _smsService.SendOtpAsync(phoneNumber, otp);

        // 11. Return response
        return new ResendOtpResponse
        {
            Message ="Mã OTP mới đã được gửi.",
            Otp = otp
        };
    }
}