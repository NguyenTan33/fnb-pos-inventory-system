using fnb_pos_inventory_system.Areas.Auth.DTOs;

namespace fnb_pos_inventory_system.Areas.Auth.Services.Interfaces
{
    public interface IGoogleAuthService
    {
        // Authenticate Google IdToken, auto-register account if not existing, return LoginResponse with tokens
        Task<LoginResponse> GoogleLoginAsync(GoogleLoginRequest request);
    }
}
