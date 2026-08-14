using fnb_pos_inventory_system.Areas.Auth.DTOs;
using fnb_pos_inventory_system.Areas.Auth.Services.Interfaces;
using fnb_pos_inventory_system.Entities;
using fnb_pos_inventory_system.Exceptions;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;

namespace fnb_pos_inventory_system.Areas.Auth.Services.Implementations;

public class AuthService : IAuthService
{
    // Dependency Injection
    private readonly UserManager<Account> _userManager;
    private readonly IPhoneService _phoneService;
    private readonly ISmsService _smsService;
    private readonly IOtpHashService _otpHashService;
    private readonly ApplicationDbContext _context;

    // Constructor
    public AuthService(
        UserManager<Account> userManager,
        IPhoneService phoneService,
        ISmsService smsService,
        IOtpHashService otpHashService,
        ApplicationDbContext context)
    {
        _userManager = userManager;
        _phoneService = phoneService;
        _smsService = smsService;
        _otpHashService = otpHashService;
        _context = context;
    }

    public async Task<RegisterResponse> RegisterAsync(RegisterRequest request)
    {
        // 1. Normalize phone number
        var phoneNumber = _phoneService.Normalize(request.PhoneNumber);

        // 2. Validate phone number
        if (!_phoneService.IsValid(phoneNumber))
        {
            throw new BusinessException("Số điện thoại không hợp lệ.");
        }

        // 3. Check if phone number already exists
        var existingUser = await _userManager.Users
            .FirstOrDefaultAsync(x => x.PhoneNumber == phoneNumber);

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

        // 5. Create account using Identity
        var result = await _userManager.CreateAsync(
            account,
            request.Password);

        // 6. Check account creation result
        if (!result.Succeeded)
        {
            var errors = string.Join(
                ", ",
                result.Errors.Select(e => e.Description));

            throw new BusinessException(errors);
        }

        // 7. Generate 6-digit OTP
        var otp = RandomNumberGenerator
            .GetInt32(100000, 1000000)
            .ToString();

        // 8. Hash OTP before storing it
        var otpHash = _otpHashService.Hash(otp);

        // 9. Create OTP verification record
        var otpVerification = new OtpVerification
        {
            PhoneNumber = phoneNumber,
            OtpHash = otpHash,
            ExpiresAt = DateTime.UtcNow.AddMinutes(5),
            FailedAttempts = 0,
            IsUsed = false
        };

        // 10. Save OTP verification to database
        _context.OtpVerifications.Add(otpVerification);

        await _context.SaveChangesAsync();

        // 11. Send OTP via SMS
        await _smsService.SendOtpAsync(
            phoneNumber,
            otp);

        // 12. Return response
        var response = new RegisterResponse
        {
            Message = $"Đăng ký thành công. Mã OTP là: {otp}",
            UserId = account.Id
            //FullName = account.FullName,
            //PhoneNumber = account.PhoneNumber,
            //UserId = account.Id
        };

        return response;
    }


    // Verify Register OTP
    public async Task<VerifyRegisterOtpResponse> VerifyRegisterOtpAsync(VerifyRegisterOtpRequest request)
    {
        // 1. Normalize phone number
        var phoneNumber = _phoneService.Normalize(request.PhoneNumber);

        // 2. Validate phone number
        if (!_phoneService.IsValid(phoneNumber))
        {
            throw new BusinessException("Số điện thoại không hợp lệ.");
        }

        // 3. Find the latest unused OTP verification
        var otpVerification = await _context.OtpVerifications.Where(x => x.PhoneNumber == phoneNumber && !x.IsUsed).OrderByDescending(x => x.CreatedAt).FirstOrDefaultAsync();

        // 4. Check if OTP verification record exists
        if (otpVerification == null)
        {
            throw new BusinessException("Mã OTP không tồn tại hoặc đã được sử dụng.");
        }

        // 5. Check if OTP is expired
        if (DateTime.UtcNow > otpVerification.ExpiresAt)
        {
            throw new BusinessException("Mã OTP đã hết hạn.");
        }

        // 6. Check if OTP is locked due to too many failed attempts
        if (otpVerification.FailedAttempts >= 5)
        {
            throw new BusinessException("Mã OTP đã bị khóa.");
        }

        // 7. Verify OTP
        if (!_otpHashService.Verify(request.Otp , otpVerification.OtpHash))
        {
            // Increment failed attempts and save changes
            otpVerification.FailedAttempts++;
            await _context.SaveChangesAsync();

            throw new BusinessException("Mã OTP không hợp lệ.");
        }

        // 8. Save changes to OTP verification record
        var account = await _userManager.Users.FirstOrDefaultAsync(x => x.PhoneNumber == phoneNumber);

        // 9. Check if account exists
        if (account == null)
        {
            throw new BusinessException("Tài khoản không tồn tại.");
        }

        // Mark OTP as used
        otpVerification.IsUsed = true;

        // 10. Confirm phone number
        account.PhoneNumberConfirmed = true;

        // 11. Save changes to account
        await _context.SaveChangesAsync();

        // Return response
        return new VerifyRegisterOtpResponse
        {
            Message = "Xác thực số điện thoại thành công.",
            UserId = account.Id
        };
    }
}