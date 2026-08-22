using fnb_pos_inventory_system.Areas.Auth.DTOs;

namespace fnb_pos_inventory_system.Areas.Auth.Services.Interfaces
{
    public interface IFacebookAuthService
    {
        // Authenticate Facebook AccessToken, auto-register account if not existing, return LoginResponse
        Task<LoginResponse> FacebookLoginAsync(FacebookLoginRequest request);
    }
}
