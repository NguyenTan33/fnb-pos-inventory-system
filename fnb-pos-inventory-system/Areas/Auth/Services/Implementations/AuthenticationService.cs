using fnb_pos_inventory_system.Areas.Auth.DTOs;
using fnb_pos_inventory_system.Areas.Auth.Services.Interfaces;
using fnb_pos_inventory_system.Entities;
using fnb_pos_inventory_system.Exceptions;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace fnb_pos_inventory_system.Areas.Auth.Services.Implementations
{
    public class AuthenticationService : IAuthenticationService
    {
        // Dependency Injection
        private readonly UserManager<Account> _userManager;
        private readonly IPhoneService _phoneService;
        private readonly IOtpService _otpService;
        private readonly ITokenService _tokenService;
        private readonly IHashService _hashService;
        private readonly ApplicationDbContext _context;
        private readonly IConfiguration _configuration;

        public AuthenticationService(
            UserManager<Account> userManager,
            IPhoneService phoneService,
            IOtpService otpService,
            ITokenService tokenService,
            IHashService hashService,
            ApplicationDbContext context,
            IConfiguration configuration)
        {
            _userManager = userManager;
            _phoneService = phoneService;
            _otpService = otpService;
            _tokenService = tokenService;
            _hashService = hashService;
            _context = context;
            _configuration = configuration;
        }

        public async Task<RegisterResponse> RegisterAsync(RegisterRequest request)
        {
            // 1. Normalize phone number
            var phoneNumber = _phoneService.Normalize(request.PhoneNumber);

            // 2. Validate phone number format
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

            // 4. Create account entity
            var account = new Account
            {
                FullName = request.FullName,
                PhoneNumber = phoneNumber,
                UserName = phoneNumber,
                PhoneNumberConfirmed = false
            };

            // 5. Create account using ASP.NET Core Identity
            var result = await _userManager.CreateAsync(account, request.Password);

            if (!result.Succeeded)
            {
                var errors = string.Join(", ", result.Errors.Select(e => e.Description));
                throw new BusinessException(errors);
            }

            // 6. Assign default "User" role
            var roleResult = await _userManager.AddToRoleAsync(account, "User");

            if (!roleResult.Succeeded)
            {
                var errors = string.Join(", ", roleResult.Errors.Select(e => e.Description));
                throw new BusinessException(errors);
            }

            // 7. Generate and send Register OTP via OtpService
            var otp = await _otpService.SendRegisterOtpAsync(phoneNumber);

            // 8. Return registration response (including plain OTP for testing)
            return new RegisterResponse
            {
                Message = $"Đăng ký thành công. Mã OTP là: {otp}",
                UserId = account.Id
            };
        }

        public async Task<LoginResponse> LoginAsync(LoginRequest request)
        {
            // 1. Normalize phone number
            var phoneNumber = _phoneService.Normalize(request.PhoneNumber);

            // 2. Validate phone number format
            if (!_phoneService.IsValid(phoneNumber))
            {
                throw new BusinessException("Số điện thoại không hợp lệ.");
            }

            // 3. Find account by phone number
            var account = await _userManager.Users.FirstOrDefaultAsync(x => x.PhoneNumber == phoneNumber);

            if (account == null)
            {
                throw new BusinessException("Số điện thoại hoặc mật khẩu không chính xác.");
            }

            // 4. Check phone number confirmation status
            if (!account.PhoneNumberConfirmed)
            {
                throw new BusinessException("Số điện thoại chưa được xác thực.");
            }

            // 5. Validate password using Identity
            var isPasswordValid = await _userManager.CheckPasswordAsync(account, request.Password);

            if (!isPasswordValid)
            {
                throw new BusinessException("Số điện thoại hoặc mật khẩu không chính xác.");
            }

            // 6. Generate Access Token (JWT) via TokenService
            var accessToken = await _tokenService.GenerateAccessTokenAsync(account);

            // 7. Generate Refresh Token via TokenService
            var refreshToken = _tokenService.GenerateRefreshToken();

            // 8. Get Refresh Token secret key and hash it
            var refreshTokenSecret = _configuration["RefreshToken:Secret"] 
                ?? throw new InvalidOperationException("Refresh Token Secret chưa được cấu hình.");

            var refreshTokenHash = _hashService.Hash(refreshToken, refreshTokenSecret);

            // 9. Save Refresh Token record to database
            var refreshTokenExpireDays = int.Parse(_configuration["RefreshToken:ExpireDays"] ?? "7");

            var refreshTokenEntity = new RefreshToken
            {
                AccountId = account.Id,
                TokenHash = refreshTokenHash,
                ExpiresAt = DateTime.UtcNow.AddDays(refreshTokenExpireDays),
                IsRevoked = false
            };

            _context.RefreshTokens.Add(refreshTokenEntity);
            await _context.SaveChangesAsync();

            // 10. Get Access Token expiration time in minutes
            var accessTokenExpireMinutes = int.Parse(_configuration["Jwt:ExpireMinutes"] ?? "60");

            // 11. Return LoginResponse with token pair
            return new LoginResponse
            {
                AccessToken = accessToken,
                RefreshToken = refreshToken,
                ExpiresAt = DateTime.UtcNow.AddMinutes(accessTokenExpireMinutes)
            };
        }

        public async Task LogoutAsync(LogoutRequest request)
        {
            // 1. Validate Refresh Token input
            if (string.IsNullOrWhiteSpace(request.RefreshToken))
            {
                throw new BusinessException("Refresh Token không hợp lệ.");
            }

            // 2. Get Refresh Token secret key
            var refreshTokenSecret = _configuration["RefreshToken:Secret"] 
                ?? throw new InvalidOperationException("Refresh Token Secret chưa được cấu hình.");

            // 3. Compute Hash of provided Refresh Token
            var refreshTokenHash = _hashService.Hash(request.RefreshToken, refreshTokenSecret);

            // 4. Query Refresh Token from database
            var storedRefreshToken = await _context.RefreshTokens
                .FirstOrDefaultAsync(x => x.TokenHash == refreshTokenHash);

            if (storedRefreshToken == null)
            {
                throw new BusinessException("Refresh Token không hợp lệ.");
            }

            // 5. Check if already revoked
            if (storedRefreshToken.IsRevoked)
            {
                throw new BusinessException("Refresh Token đã bị thu hồi.");
            }

            // 6. Revoke Refresh Token
            storedRefreshToken.IsRevoked = true;
            storedRefreshToken.RevokedAt = DateTime.UtcNow;

            // 7. Save changes to database
            await _context.SaveChangesAsync();
        }
    }
}
