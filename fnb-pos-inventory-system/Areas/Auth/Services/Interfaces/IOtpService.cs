using fnb_pos_inventory_system.Areas.Auth.DTOs;

namespace fnb_pos_inventory_system.Areas.Auth.Services.Interfaces;

public interface IOtpService
{
    // Generate and send Register OTP
    Task<string> SendRegisterOtpAsync(string phoneNumber);

    // Verify Register OTP
    Task<VerifyRegisterOtpResponse> VerifyRegisterOtpAsync(VerifyRegisterOtpRequest request);

    // Generate and send Forgot Password OTP
    Task<string> SendForgotPasswordOtpAsync(string phoneNumber);

    // Verify Forgot Password OTP
    Task<VerifyForgotPasswordOtpResponse> VerifyForgotPasswordOtpAsync(VerifyForgotPasswordOtpRequest request);

    // Resend OTP with cooldown check
    Task<ResendOtpResponse> ResendOtpAsync(ResendOtpRequest request);
}