using fnb_pos_inventory_system.Areas.Auth.DTOs;

namespace fnb_pos_inventory_system.Areas.Auth.Services.Interfaces;

public interface IAuthenticationService
{
    // Register new account and send OTP
    Task<RegisterResponse> RegisterAsync(RegisterRequest request);

    // Login with phone number and password
    Task<LoginResponse> LoginAsync(LoginRequest request);

    // Logout and revoke Refresh Token
    Task LogoutAsync(LogoutRequest request);
}
