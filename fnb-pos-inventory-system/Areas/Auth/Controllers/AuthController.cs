using Azure;
using fnb_pos_inventory_system.Areas.Auth.DTOs;
using fnb_pos_inventory_system.Areas.Auth.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace fnb_pos_inventory_system.Areas.Auth.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        // Dependency injection for the IAuthService
        private readonly IAuthService _authService;

        // Constructor to initialize the AuthController with the IAuthService
        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        // POST endpoint for user registration
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequest request)
        {
            // Call the RegisterAsync method from the IAuthService
            var response = await _authService.RegisterAsync(request);
            // Return a 201 Created response with the RegisterResponse object
            return CreatedAtAction(nameof(Register), new { id = response.UserId }, response);
        }

        [HttpPost("verify-otp")]
        public async Task<IActionResult> VerifyRegisterOtp([FromBody] VerifyRegisterOtpRequest request)
        {
            // Call the VerifyRegisterOtpAsync method from the IAuthService
            var response = await _authService.VerifyRegisterOtpAsync(request);
            // Return a 200 OK response with the VerifyRegisterOtpResponse object
            return Ok(response);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            // Call the LoginAsync method from the IAuthService
            var response = await _authService.LoginAsync(request);
            // Return a 200 OK response with the LoginResponse object
            return Ok(response);
        }

        [AllowAnonymous]
        [HttpPost("refresh")]
        public async Task<IActionResult> RefreshToken([FromBody] RefreshTokenRequest request)
        {
            var response = await _authService.RefreshTokenAsync(request);

            return Ok(response);
        }

        [AllowAnonymous]
        [HttpPost("logout")]
        public async Task<IActionResult> Logout([FromBody] LogoutRequest request)
        {
            await _authService.LogoutAsync(request);

            return Ok(new
            {
                message = "Đăng xuất thành công."
            });
        }

        [AllowAnonymous]
        [HttpPost("reset-password")]
        public async Task<IActionResult> ResetPassword([FromBody] ResetPasswordRequest request)
        {
            await _authService.ResetPasswordAsync(request);

            return Ok(new
            {
                message = "Đặt lại mật khẩu thành công."
            });
        }

        [AllowAnonymous]
        [HttpPost("forgot-password")]
        public async Task<IActionResult> ForgotPassword([FromBody] ForgotPasswordRequest request)
        {
            var response = await _authService.ForgotPasswordAsync(request);

            return Ok(response);
        }

        [AllowAnonymous]
        [HttpPost("verify-forgot-password-otp")]
        public async Task<IActionResult> VerifyForgotPasswordOtp([FromBody] VerifyForgotPasswordOtpRequest request)
        {
            var response =
                await _authService.VerifyForgotPasswordOtpAsync(request);

            return Ok(response);
        }
    }
}
