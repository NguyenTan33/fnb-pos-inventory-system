using fnb_pos_inventory_system.Areas.Auth.DTOs;
using fnb_pos_inventory_system.Areas.Auth.Services.Interfaces;
using fnb_pos_inventory_system.Entities;
using fnb_pos_inventory_system.Exceptions;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace fnb_pos_inventory_system.Areas.Auth.Services.Implementations
{
    public class FacebookAuthService : IFacebookAuthService
    {
        // Dependency Injection
        private readonly HttpClient _httpClient;
        private readonly UserManager<Account> _userManager;
        private readonly ITokenService _tokenService;
        private readonly IHashService _hashService;
        private readonly ApplicationDbContext _context;
        private readonly IConfiguration _configuration;

        public FacebookAuthService(
            HttpClient httpClient,
            UserManager<Account> userManager,
            ITokenService tokenService,
            IHashService hashService,
            ApplicationDbContext context,
            IConfiguration configuration)
        {
            _httpClient = httpClient;
            _userManager = userManager;
            _tokenService = tokenService;
            _hashService = hashService;
            _context = context;
            _configuration = configuration;
        }

        private class FacebookUserInfoResponse
        {
            [JsonPropertyName("id")]
            public string Id { get; set; } = string.Empty;

            [JsonPropertyName("name")]
            public string Name { get; set; } = string.Empty;

            [JsonPropertyName("email")]
            public string? Email { get; set; }
        }

        public async Task<LoginResponse> FacebookLoginAsync(FacebookLoginRequest request)
        {
            // 1. Validate Facebook Access Token input
            if (string.IsNullOrWhiteSpace(request.AccessToken))
            {
                throw new BusinessException("Facebook Access Token không được để trống.");
            }

            // 2. Call Facebook Graph API to verify token and retrieve user profile
            var graphApiUrl = $"https://graph.facebook.com/v19.0/me?fields=id,name,email&access_token={request.AccessToken}";
            
            HttpResponseMessage httpResponse;
            try
            {
                httpResponse = await _httpClient.GetAsync(graphApiUrl);
            }
            catch (Exception ex)
            {
                throw new BusinessException($"Không thể kết nối đến máy chủ Facebook: {ex.Message}");
            }

            if (!httpResponse.IsSuccessStatusCode)
            {
                throw new BusinessException("Xác thực Facebook Access Token thất bại hoặc Token đã hết hạn.");
            }

            // 3. Deserialize Facebook user profile
            var jsonString = await httpResponse.Content.ReadAsStringAsync();
            var fbUser = JsonSerializer.Deserialize<FacebookUserInfoResponse>(jsonString);

            if (fbUser == null || string.IsNullOrWhiteSpace(fbUser.Id))
            {
                throw new BusinessException("Không thể lấy thông tin người dùng từ Facebook.");
            }

            // 4. Determine user email and name (fallback email if Facebook account has no registered email)
            var email = !string.IsNullOrWhiteSpace(fbUser.Email) ? fbUser.Email : $"{fbUser.Id}@facebook.com";
            var fullName = !string.IsNullOrWhiteSpace(fbUser.Name) ? fbUser.Name : $"Facebook User ({fbUser.Id})";

            // 5. Find existing account by Email or UserName
            var account = await _userManager.FindByEmailAsync(email)
                ?? await _userManager.FindByNameAsync(email);

            // 6. If account does not exist, auto-register new account
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
                    throw new BusinessException($"Không thể tạo tài khoản Facebook: {errors}");
                }

                // Assign default "User" role
                await _userManager.AddToRoleAsync(account, "User");
            }

            // 7. Generate Access Token (JWT) via TokenService
            var accessToken = await _tokenService.GenerateAccessTokenAsync(account);

            // 8. Generate Refresh Token via TokenService
            var refreshToken = _tokenService.GenerateRefreshToken();

            // 9. Hash Refresh Token and save to database
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

            // 10. Get Access Token expiration in minutes
            var accessTokenExpireMinutes = int.Parse(_configuration["Jwt:ExpireMinutes"] ?? "60");

            // 11. Return LoginResponse token pair
            return new LoginResponse
            {
                AccessToken = accessToken,
                RefreshToken = refreshToken,
                ExpiresAt = DateTime.UtcNow.AddMinutes(accessTokenExpireMinutes)
            };
        }
    }
}
