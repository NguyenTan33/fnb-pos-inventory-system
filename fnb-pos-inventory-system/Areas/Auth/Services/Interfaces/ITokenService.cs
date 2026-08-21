using fnb_pos_inventory_system.Areas.Auth.DTOs;
using fnb_pos_inventory_system.Entities;

namespace fnb_pos_inventory_system.Areas.Auth.Services.Interfaces;

public interface ITokenService
{
    // Generate Access Token (JWT) from Account entity
    Task<string> GenerateAccessTokenAsync(Account account);

    // Generate random Refresh Token string
    string GenerateRefreshToken();

    // Validate Refresh Token, rotate tokens and return new token pair
    Task<RefreshTokenResponse> RefreshTokenAsync(RefreshTokenRequest request);
}