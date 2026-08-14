using fnb_pos_inventory_system.Areas.Auth.DTOs;

namespace fnb_pos_inventory_system.Services.Auth
{
    public interface IAuthService
    {
        Task<RegisterResponse> RegisterAsync(RegisterRequest request);
    }
}