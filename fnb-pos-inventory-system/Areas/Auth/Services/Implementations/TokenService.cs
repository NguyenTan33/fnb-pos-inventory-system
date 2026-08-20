using fnb_pos_inventory_system.Areas.Auth.Services.Interfaces;
using fnb_pos_inventory_system.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;


namespace fnb_pos_inventory_system.Areas.Auth.Services.Implementations
{
    public class TokenService : ITokenService
    {
        //DI
        private readonly UserManager<Account> _userManager;
        private readonly IConfiguration _configuration;

        public TokenService(IConfiguration configuration, UserManager<Account> userManager)
        {
            _configuration = configuration;
            _userManager = userManager;
        }


        public async Task<string> GenerateAccessTokenAsync(Account account)
        {
            // Generate claims based on the account information
            var claims = new List<Claim>();

            var roles = await _userManager.GetRolesAsync(account);
            foreach (var role in roles) {
                claims.Add(new Claim(ClaimTypes.Role, role));
            }
            // Add claims for the account properties
            claims.Add(new Claim(ClaimTypes.NameIdentifier,account.Id));

            // Add claims for the account properties
            claims.Add(new Claim(ClaimTypes.MobilePhone,account.PhoneNumber ?? string.Empty));

            // Add claims for the account properties
            var jwtKey = _configuration["Jwt:Key"]?? throw new InvalidOperationException("JWT Key chưa được cấu hình.");

            // Create a symmetric security key using the JWT key
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey));

            //  Create signing credentials using the security key and the HMAC-SHA256 algorithm
            var credentials = new SigningCredentials(key,SecurityAlgorithms.HmacSha256);

            // Set the token expiration time (in minutes) from configuration or default to 60 minutes
            var expireMinutes = int.Parse(_configuration["Jwt:ExpireMinutes"] ?? "60");

            // Create the JWT token with the specified claims, expiration, and signing credentials
            var token = new JwtSecurityToken(
                                             issuer: _configuration["Jwt:Issuer"],
                                             audience: _configuration["Jwt:Audience"],
                                             claims: claims,
                                             expires: DateTime.UtcNow.AddMinutes(expireMinutes),
                                             signingCredentials: credentials);


            // Create a JwtSecurityTokenHandler to write the token as a string
            var tokenHandler = new JwtSecurityTokenHandler();

            return tokenHandler.WriteToken(token);
        }

        public string GenerateRefreshToken()
        {
            var randomBytes = RandomNumberGenerator.GetBytes(64);

            return Convert.ToBase64String(randomBytes);
        }
    }
}
