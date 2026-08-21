using fnb_pos_inventory_system.Areas.Auth.DTOs;
using fnb_pos_inventory_system.Areas.Auth.Services.Interfaces;
using fnb_pos_inventory_system.Entities;
using fnb_pos_inventory_system.Exceptions;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;

namespace fnb_pos_inventory_system.Areas.Auth.Services.Implementations;

public class OtpService : IOtpService
{
    private readonly ApplicationDbContext _context;
    private readonly IHashService _hashService;
    private readonly IPhoneService _phoneService;
    private readonly ISmsService _smsService;
    private readonly UserManager<Account> _userManager;
    private readonly IConfiguration _configuration;

    public OtpService(
        ApplicationDbContext context,
        IHashService hashService,
        IPhoneService phoneService,
        ISmsService smsService,
        UserManager<Account> userManager,
        IConfiguration configuration)
    {
        _context = context;
        _hashService = hashService;
        _phoneService = phoneService;
        _smsService = smsService;
        _userManager = userManager;
        _configuration = configuration;
    }

    // Helper: Get OTP Secret from configuration
    private string GetOtpSecret() =>
        _configuration["Otp:Secret"] ?? throw new InvalidOperationException("OTP Secret chưa được cấu hình.");

    // Helper: Generate 6-digit OTP and save to database
    public async Task<string> GenerateAndSaveOtpAsync(string phoneNumber, string purpose)
    {
        // 1. Generate random 6-digit OTP using CSPRNG
        var otp = RandomNumberGenerator.GetInt32(100000, 1000000).ToString();

        // 2. Hash OTP before storing
        var otpHash = _hashService.Hash(otp, GetOtpSecret());

        // 3. Create OtpVerification entity
        var otpVerification = new OtpVerification
        {
            PhoneNumber = phoneNumber,
            OtpHash = otpHash,
            ExpiresAt = DateTime.UtcNow.AddMinutes(5),
            FailedAttempts = 0,
            IsUsed = false,
            Purpose = purpose
        };

        // 4. Save to database
        _context.OtpVerifications.Add(otpVerification);
        await _context.SaveChangesAsync();

        return otp;
    }

    // Helper: Validate OTP code against database record
    public async Task ValidateOtpAsync(string phoneNumber, string otp, string purpose)
    {
        // 1. Query latest unused OTP for phone number & purpose
        var otpVerification = await _context.OtpVerifications
            .Where(x => x.PhoneNumber == phoneNumber && !x.IsUsed && x.Purpose == purpose)
            .OrderByDescending(x => x.CreatedAt)
            .FirstOrDefaultAsync();

        if (otpVerification == null)
            throw new BusinessException("Mã OTP không tồn tại hoặc đã được sử dụng.");

        // 2. Check expiration
        if (DateTime.UtcNow > otpVerification.ExpiresAt)
            throw new BusinessException("Mã OTP đã hết hạn.");

        // 3. Check failed attempts limit
        if (otpVerification.FailedAttempts >= 5)
            throw new BusinessException("Mã OTP đã bị khóa do nhập sai quá nhiều lần.");

        // 4. Verify OTP hash
        if (!_hashService.Verify(otp, otpVerification.OtpHash, GetOtpSecret()))
        {
            otpVerification.FailedAttempts++;
            await _context.SaveChangesAsync();
            throw new BusinessException("Mã OTP không hợp lệ.");
        }

        // 5. Mark OTP as used
        otpVerification.IsUsed = true;
        await _context.SaveChangesAsync();
    }

    // Helper: Invalidate all active OTPs for phone number & purpose
    public async Task InvalidateActiveOtpsAsync(string phoneNumber, string purpose)
    {
        var oldOtps = await _context.OtpVerifications
            .Where(x => x.PhoneNumber == phoneNumber && x.Purpose == purpose && !x.IsUsed)
            .ToListAsync();

        foreach (var item in oldOtps)
        {
            item.IsUsed = true;
        }

        if (oldOtps.Any())
        {
            await _context.SaveChangesAsync();
        }
    }

    // Helper: Check cooldown time between OTP requests
    public async Task CheckCooldownAsync(string phoneNumber, string purpose, int cooldownSeconds = 60)
    {
        var latestOtp = await _context.OtpVerifications
            .Where(x => x.PhoneNumber == phoneNumber && x.Purpose == purpose)
            .OrderByDescending(x => x.CreatedAt)
            .FirstOrDefaultAsync();

        if (latestOtp != null && DateTime.UtcNow < latestOtp.CreatedAt.AddSeconds(cooldownSeconds))
        {
            throw new BusinessException($"Vui lòng chờ {cooldownSeconds} giây trước khi gửi lại OTP.");
        }
    }

    public async Task<string> SendRegisterOtpAsync(string phoneNumber)
    {
        // 1. Normalize phone number
        var normalizedPhone = _phoneService.Normalize(phoneNumber);

        // 2. Validate phone number format
        if (!_phoneService.IsValid(normalizedPhone))
        {
            throw new BusinessException("Số điện thoại không hợp lệ.");
        }

        // 3. Check cooldown limit
        await CheckCooldownAsync(normalizedPhone, "Register", 60);

        // 4. Invalidate old active Register OTPs
        await InvalidateActiveOtpsAsync(normalizedPhone, "Register");

        // 5. Generate and save new Register OTP
        var otp = await GenerateAndSaveOtpAsync(normalizedPhone, "Register");

        // 6. Send OTP via SMS service
        await _smsService.SendOtpAsync(normalizedPhone, otp);

        // 7. Return plain OTP
        return otp;
    }

    public async Task<VerifyRegisterOtpResponse> VerifyRegisterOtpAsync(VerifyRegisterOtpRequest request)
    {
        // 1. Normalize phone number
        var phoneNumber = _phoneService.Normalize(request.PhoneNumber);

        // 2. Validate phone number
        if (!_phoneService.IsValid(phoneNumber))
        {
            throw new BusinessException("Số điện thoại không hợp lệ.");
        }

        // 3. Validate Register OTP code
        await ValidateOtpAsync(phoneNumber, request.Otp, "Register");

        // 4. Find account by phone number
        var account = await _userManager.Users.FirstOrDefaultAsync(x => x.PhoneNumber == phoneNumber);

        if (account == null)
        {
            throw new BusinessException("Tài khoản không tồn tại.");
        }

        // 5. Confirm phone number
        account.PhoneNumberConfirmed = true;

        // 6. Save changes to database
        await _context.SaveChangesAsync();

        // 7. Return success response
        return new VerifyRegisterOtpResponse
        {
            Message = "Xác thực số điện thoại thành công.",
            UserId = account.Id
        };
    }

    public async Task<string> SendForgotPasswordOtpAsync(string phoneNumber)
    {
        // 1. Normalize phone number
        var normalizedPhone = _phoneService.Normalize(phoneNumber);

        // 2. Validate phone number format
        if (!_phoneService.IsValid(normalizedPhone))
        {
            throw new BusinessException("Số điện thoại không hợp lệ.");
        }

        // 3. Check cooldown limit
        await CheckCooldownAsync(normalizedPhone, "ForgotPassword", 60);

        // 4. Invalidate old active ForgotPassword OTPs
        await InvalidateActiveOtpsAsync(normalizedPhone, "ForgotPassword");

        // 5. Generate and save new ForgotPassword OTP
        var otp = await GenerateAndSaveOtpAsync(normalizedPhone, "ForgotPassword");

        // 6. Send OTP via SMS service
        await _smsService.SendOtpAsync(normalizedPhone, otp);

        // 7. Return plain OTP
        return otp;
    }

    public async Task<VerifyForgotPasswordOtpResponse> VerifyForgotPasswordOtpAsync(VerifyForgotPasswordOtpRequest request)
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
            throw new BusinessException("Tài khoản không tồn tại.");
        }

        // 4. Validate Forgot Password OTP
        await ValidateOtpAsync(phoneNumber, request.Otp, "ForgotPassword");

        // 5. Generate Identity Password Reset Token
        var resetToken = await _userManager.GeneratePasswordResetTokenAsync(account);

        // 6. Return response with reset token
        return new VerifyForgotPasswordOtpResponse
        {
            ResetToken = resetToken
        };
    }

    public async Task<ResendOtpResponse> ResendOtpAsync(ResendOtpRequest request)
    {
        // 1. Normalize phone number
        var phoneNumber = _phoneService.Normalize(request.PhoneNumber);

        // 2. Validate phone number format
        if (!_phoneService.IsValid(phoneNumber))
        {
            throw new BusinessException("Số điện thoại không hợp lệ.");
        }

        // 3. Validate OTP purpose
        if (request.Purpose != "Register" && request.Purpose != "ForgotPassword")
        {
            throw new BusinessException("Mục đích OTP không hợp lệ.");
        }

        // 4. Find account by phone number
        var account = await _userManager.Users.FirstOrDefaultAsync(x => x.PhoneNumber == phoneNumber);

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
        if (request.Purpose == "ForgotPassword")
        {
            if (account == null)
            {
                throw new BusinessException("Tài khoản không tồn tại.");
            }
        }

        // 7. Check 60-second cooldown
        await CheckCooldownAsync(phoneNumber, request.Purpose, 60);

        // 8. Invalidate old active OTPs
        await InvalidateActiveOtpsAsync(phoneNumber, request.Purpose);

        // 9. Generate new OTP
        var otp = await GenerateAndSaveOtpAsync(phoneNumber, request.Purpose);

        // 10. Send OTP via SMS service
        await _smsService.SendOtpAsync(phoneNumber, otp);

        // 11. Return resend response (including plain OTP for testing)
        return new ResendOtpResponse
        {
            Message = "Mã OTP mới đã được gửi.",
            Otp = otp
        };
    }
}