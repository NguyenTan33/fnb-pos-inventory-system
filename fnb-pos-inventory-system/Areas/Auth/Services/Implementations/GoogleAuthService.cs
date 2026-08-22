using fnb_pos_inventory_system.Areas.Auth.DTOs;
using fnb_pos_inventory_system.Areas.Auth.Services.Interfaces;
using fnb_pos_inventory_system.Entities;
using fnb_pos_inventory_system.Exceptions;
using Google.Apis.Auth;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace fnb_pos_inventory_system.Areas.Auth.Services.Implementations
{
    public class GoogleAuthService : IGoogleAuthService
    {
        // Dependency Injection
        private readonly UserManager<Account> _userManager;
        private readonly ITokenService _tokenService;
        private readonly IHashService _hashService;
        private readonly ApplicationDbContext _context;
        private readonly IConfiguration _configuration;

        public GoogleAuthService(
            UserManager<Account> userManager,
            ITokenService tokenService,
            IHashService hashService,
            ApplicationDbContext context,
            IConfiguration configuration)
        {
            _userManager = userManager;
            _tokenService = tokenService;
            _hashService = hashService;
            _context = context;
            _configuration = configuration;
        }

        public async Task<LoginResponse> GoogleLoginAsync(GoogleLoginRequest request)
        {
            // 1. Validate Google ID Token input string
            if (string.IsNullOrWhiteSpace(request.IdToken))
            {
                throw new BusinessException("Token Google không được để trống.");
            }

            // 2. Validate Google ID Token using Google APIs library
            GoogleJsonWebSignature.Payload payload;
            try
            {
                payload = await GoogleJsonWebSignature.ValidateAsync(request.IdToken);
            }
            catch (Exception ex)
            {
                throw new BusinessException($"Xác thực Token Google thất bại: {ex.Message}");
            }

            // 3. Extract user information from Google payload
            var email = payload.Email;
            var fullName = payload.Name ?? email;

            if (string.IsNullOrWhiteSpace(email))
            {
                throw new BusinessException("Không thể lấy địa chỉ Email từ tài khoản Google.");
            }

            // 4. Find existing account by Email or UserName
            var account = await _userManager.FindByEmailAsync(email) 
                ?? await _userManager.FindByNameAsync(email);

            // 5. If account does not exist, auto-register new account
            if (account == null)
            {
                account = new Account
                {
                    FullName = fullName,
                    Email = email,
                    UserName = email,
                    PhoneNumber = string.Empty,
                    EmailConfirmed = true,
                    PhoneNumberConfirmed = true
                };

                // Create user in Identity without password (social login user)
                var createResult = await _userManager.CreateAsync(account);
                if (!createResult.Succeeded)
                {
                    var errors = string.Join(", ", createResult.Errors.Select(e => e.Description));
                    throw new BusinessException($"Không thể tạo tài khoản Google: {errors}");
                }

                // Assign default "User" role
                await _userManager.AddToRoleAsync(account, "User");
            }

            // 6. Generate Access Token (JWT) via TokenService
            var accessToken = await _tokenService.GenerateAccessTokenAsync(account);

            // 7. Generate Refresh Token via TokenService
            var refreshToken = _tokenService.GenerateRefreshToken();

            // 8. Hash Refresh Token and save to database
            var refreshTokenSecret = _configuration["RefreshToken:Secret"] 
                ?? throw new InvalidOperationException("Refresh Token Secret chưa được cấu hình.");

            var refreshTokenHash = _hashService.Hash(refreshToken, refreshTokenSecret);
            var refreshTokenExpireDays = int.Parse(_configuration["RefreshToken:ExpireDays"] ?? "7");

            var refreshTokenEntity = new RefreshToken
            {
                AccountId = account.Id,
                TokenHash = refreshTokenHash,
                ExpiresAt = DateTime.UtcNow.AddDays(refreshTokenExpireDays),
                IsRevoked = false
            };

            _context.RefreshTokens.Add(refreshTokenEntity);
            await _context.SaveChangesAsync();

            // 9. Get Access Token expiration in minutes
            var accessTokenExpireMinutes = int.Parse(_configuration["Jwt:ExpireMinutes"] ?? "60");

            // 10. Return LoginResponse token pair
            return new LoginResponse
            {
                AccessToken = accessToken,
                RefreshToken = refreshToken,
                ExpiresAt = DateTime.UtcNow.AddMinutes(accessTokenExpireMinutes)
            };
        }
    }
}
