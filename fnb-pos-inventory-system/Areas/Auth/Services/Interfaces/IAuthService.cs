using fnb_pos_inventory_system.Areas.Auth.DTOs;


namespace fnb_pos_inventory_system.Areas.Auth.Services.Interfaces
{
    public interface IAuthService
    {
        Task<RegisterResponse> RegisterAsync(RegisterRequest request);
        Task<VerifyRegisterOtpResponse> VerifyRegisterOtpAsync(VerifyRegisterOtpRequest request);
        Task<LoginResponse> LoginAsync(LoginRequest request);
        Task<RefreshTokenResponse> RefreshTokenAsync(RefreshTokenRequest request);
        Task LogoutAsync(LogoutRequest request);
        Task<ForgotPasswordResponse> ForgotPasswordAsync(ForgotPasswordRequest request);
        Task<VerifyForgotPasswordOtpResponse> VerifyForgotPasswordOtpAsync(VerifyForgotPasswordOtpRequest request);
        Task ResetPasswordAsync(ResetPasswordRequest request);
    }
}