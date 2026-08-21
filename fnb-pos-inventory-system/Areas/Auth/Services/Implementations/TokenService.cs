using fnb_pos_inventory_system.Areas.Auth.DTOs;
using fnb_pos_inventory_system.Areas.Auth.Services.Interfaces;
using fnb_pos_inventory_system.Entities;
using fnb_pos_inventory_system.Exceptions;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace fnb_pos_inventory_system.Areas.Auth.Services.Implementations
{
    public class TokenService : ITokenService
    {
        // Dependency Injection
        private readonly UserManager<Account> _userManager;
        private readonly IConfiguration _configuration;
        private readonly IHashService _hashService;
        private readonly ApplicationDbContext _context;

        public TokenService(
            IConfiguration configuration,
            UserManager<Account> userManager,
            IHashService hashService,
            ApplicationDbContext context)
        {
            _configuration = configuration;
            _userManager = userManager;
            _hashService = hashService;
            _context = context;
        }

        public async Task<string> GenerateAccessTokenAsync(Account account)
        {
            // 1. Create claims list
            var claims = new List<Claim>();

            // 2. Get user roles and add to claims
            var roles = await _userManager.GetRolesAsync(account);
            foreach (var role in roles)
            {
                claims.Add(new Claim(ClaimTypes.Role, role));
            }

            // 3. Add account ID claim
            claims.Add(new Claim(ClaimTypes.NameIdentifier, account.Id));

            // 4. Add mobile phone claim
            claims.Add(new Claim(ClaimTypes.MobilePhone, account.PhoneNumber ?? string.Empty));

            // 5. Get JWT Secret key from configuration
            var jwtKey = _configuration["Jwt:Key"] ?? throw new InvalidOperationException("JWT Key chưa được cấu hình.");

            // 6. Create symmetric security key
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey));

            // 7. Create signing credentials using HMAC-SHA256
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            // 8. Get expiration time in minutes (default 60 mins)
            var expireMinutes = int.Parse(_configuration["Jwt:ExpireMinutes"] ?? "60");

            // 9. Generate JWT Token object
            var token = new JwtSecurityToken(
                issuer: _configuration["Jwt:Issuer"],
                audience: _configuration["Jwt:Audience"],
                claims: claims,
                expires: DateTime.UtcNow.AddMinutes(expireMinutes),
                signingCredentials: credentials);

            // 10. Write token string using JwtSecurityTokenHandler
            var tokenHandler = new JwtSecurityTokenHandler();
            return tokenHandler.WriteToken(token);
        }

        public string GenerateRefreshToken()
        {
            // 1. Generate 64 cryptographically secure random bytes
            var randomBytes = RandomNumberGenerator.GetBytes(64);

            // 2. Convert bytes to Base64 string
            return Convert.ToBase64String(randomBytes);
        }

        public async Task<RefreshTokenResponse> RefreshTokenAsync(RefreshTokenRequest request)
        {
            // 1. Validate Refresh Token input
            if (string.IsNullOrWhiteSpace(request.RefreshToken))
            {
                throw new BusinessException("Refresh Token không hợp lệ.");
            }

            // 2. Get Refresh Token secret key from configuration
            var refreshTokenSecret = _configuration["RefreshToken:Secret"] 
                ?? throw new InvalidOperationException("Refresh Token Secret chưa được cấu hình.");

            // 3. Compute HMAC-SHA256 hash of provided Refresh Token
            var refreshTokenHash = _hashService.Hash(request.RefreshToken, refreshTokenSecret);

            // 4. Query stored Refresh Token from database
            var storedRefreshToken = await _context.RefreshTokens
                .FirstOrDefaultAsync(x => x.TokenHash == refreshTokenHash);

            if (storedRefreshToken == null)
            {
                throw new BusinessException("Refresh Token không hợp lệ.");
            }

            // 5. Check if Refresh Token is revoked
            if (storedRefreshToken.IsRevoked)
            {
                throw new BusinessException("Refresh Token đã bị thu hồi.");
            }

            // 6. Check if Refresh Token is expired
            if (DateTime.UtcNow > storedRefreshToken.ExpiresAt)
            {
                throw new BusinessException("Refresh Token đã hết hạn.");
            }

            // 7. Find associated Account
            var account = await _userManager.FindByIdAsync(storedRefreshToken.AccountId);

            if (account == null)
            {
                throw new BusinessException("Tài khoản không tồn tại.");
            }

            // 8. Revoke current Refresh Token
            storedRefreshToken.IsRevoked = true;
            storedRefreshToken.RevokedAt = DateTime.UtcNow;

            // 9. Generate new Access Token
            var newAccessToken = await GenerateAccessTokenAsync(account);

            // 10. Generate new Refresh Token
            var newRefreshToken = GenerateRefreshToken();

            // 11. Hash new Refresh Token
            var newRefreshTokenHash = _hashService.Hash(newRefreshToken, refreshTokenSecret);

            // 12. Get expiration in days (default 7 days)
            var refreshTokenExpireDays = int.Parse(_configuration["RefreshToken:ExpireDays"] ?? "7");

            // 13. Create new Refresh Token record
            var newRefreshTokenEntity = new RefreshToken
            {
                AccountId = account.Id,
                TokenHash = newRefreshTokenHash,
                ExpiresAt = DateTime.UtcNow.AddDays(refreshTokenExpireDays),
                IsRevoked = false
            };

            // 14. Save changes to database
            _context.RefreshTokens.Add(newRefreshTokenEntity);
            await _context.SaveChangesAsync();

            // 15. Get Access Token expiration in minutes
            var accessTokenExpireMinutes = int.Parse(_configuration["Jwt:ExpireMinutes"] ?? "60");

            // 16. Return rotated token pair response
            return new RefreshTokenResponse
            {
                AccessToken = newAccessToken,
                RefreshToken = newRefreshToken,
                ExpiresAt = DateTime.UtcNow.AddMinutes(accessTokenExpireMinutes)
            };
        }
    }
}
