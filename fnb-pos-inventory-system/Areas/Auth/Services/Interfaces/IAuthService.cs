using fnb_pos_inventory_system.Areas.Auth.DTOs;

namespace fnb_pos_inventory_system.Areas.Auth.Services.Interfaces;

public interface IAuthService
{
    // Register new account
    Task<RegisterResponse> RegisterAsync(RegisterRequest request);

    // Verify OTP when registering
    Task<VerifyRegisterOtpResponse> VerifyRegisterOtpAsync(VerifyRegisterOtpRequest request);

    // Login
    Task<LoginResponse> LoginAsync(LoginRequest request);

    // Generate new Access Token + rotate Refresh Token
    Task<RefreshTokenResponse> RefreshTokenAsync(RefreshTokenRequest request);

    // Logout and revoke Refresh Token
    Task LogoutAsync(LogoutRequest request);

    // Send Forgot Password OTP
    Task<ForgotPasswordResponse> ForgotPasswordAsync(ForgotPasswordRequest request);

    // Verify Forgot Password OTP
    Task<VerifyForgotPasswordOtpResponse> VerifyForgotPasswordOtpAsync(VerifyForgotPasswordOtpRequest request);

    // Reset password after OTP verification
    Task ResetPasswordAsync(ResetPasswordRequest request);

    // Resend OTP
    Task<ResendOtpResponse> ResendOtpAsync( ResendOtpRequest request);
}