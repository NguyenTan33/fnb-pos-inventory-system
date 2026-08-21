using fnb_pos_inventory_system.Areas.Auth.Services.Interfaces;
using fnb_pos_inventory_system.Entities;
using fnb_pos_inventory_system.Exceptions;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;

namespace fnb_pos_inventory_system.Areas.Auth.Services.Implementations;

public class OtpService : IOtpService
{
    private readonly ApplicationDbContext _context;
    private readonly IHashService _hashService;
    private readonly IConfiguration _configuration;

    public OtpService(
        ApplicationDbContext context,
        IHashService hashService,
        IConfiguration configuration)
    {
        _context = context;
        _hashService = hashService;
        _configuration = configuration;
    }

    private string GetOtpSecret() =>
        _configuration["Otp:Secret"] ?? throw new InvalidOperationException("OTP Secret chưa được cấu hình.");

    public async Task<string> GenerateAndSaveOtpAsync(string phoneNumber, string purpose)
    {
        var otp = RandomNumberGenerator.GetInt32(100000, 1000000).ToString();
        var otpHash = _hashService.Hash(otp, GetOtpSecret());

        var otpVerification = new OtpVerification
        {
            PhoneNumber = phoneNumber,
            OtpHash = otpHash,
            ExpiresAt = DateTime.UtcNow.AddMinutes(5),
            FailedAttempts = 0,
            IsUsed = false,
            Purpose = purpose
        };

        _context.OtpVerifications.Add(otpVerification);
        await _context.SaveChangesAsync();

        return otp;
    }

    public async Task ValidateOtpAsync(string phoneNumber, string otp, string purpose)
    {
        var otpVerification = await _context.OtpVerifications
            .Where(x => x.PhoneNumber == phoneNumber && !x.IsUsed && x.Purpose == purpose)
            .OrderByDescending(x => x.CreatedAt)
            .FirstOrDefaultAsync();

        if (otpVerification == null)
            throw new BusinessException("Mã OTP không tồn tại hoặc đã được sử dụng.");

        if (DateTime.UtcNow > otpVerification.ExpiresAt)
            throw new BusinessException("Mã OTP đã hết hạn.");

        if (otpVerification.FailedAttempts >= 5)
            throw new BusinessException("Mã OTP đã bị khóa.");

        if (!_hashService.Verify(otp, otpVerification.OtpHash, GetOtpSecret()))
        {
            otpVerification.FailedAttempts++;
            await _context.SaveChangesAsync();
            throw new BusinessException("Mã OTP không hợp lệ.");
        }

        otpVerification.IsUsed = true;
        await _context.SaveChangesAsync();
    }

    public async Task InvalidateActiveOtpsAsync(string phoneNumber, string purpose)
    {
        var oldOtps = await _context.OtpVerifications
            .Where(x => x.PhoneNumber == phoneNumber && x.Purpose == purpose && !x.IsUsed)
            .ToListAsync();

        foreach (var item in oldOtps)
        {
            item.IsUsed = true;
        }
    }

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
}