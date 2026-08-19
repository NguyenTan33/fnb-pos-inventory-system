using fnb_pos_inventory_system.Entities;

namespace fnb_pos_inventory_system.Areas.Auth.Services.Interfaces;

public interface ITokenService
{
    Task<string> GenerateAccessTokenAsync(Account account);
}