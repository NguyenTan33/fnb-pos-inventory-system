namespace fnb_pos_inventory_system.Areas.Auth.Services.Interfaces;

public interface IOtpService
{
    Task<string> GenerateAndSaveOtpAsync(string phoneNumber, string purpose);
    Task ValidateOtpAsync(string phoneNumber, string otp, string purpose);
    Task InvalidateActiveOtpsAsync(string phoneNumber, string purpose);
    Task CheckCooldownAsync(string phoneNumber, string purpose, int cooldownSeconds = 60);
}