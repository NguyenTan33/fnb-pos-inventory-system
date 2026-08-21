using fnb_pos_inventory_system.Areas.Auth.DTOs;
using fnb_pos_inventory_system.Areas.Auth.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace fnb_pos_inventory_system.Areas.Auth.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        // Dependency injection for split Auth services
        private readonly IAuthenticationService _authenticationService;
        private readonly IOtpService _otpService;
        private readonly IPasswordService _passwordService;
        private readonly ITokenService _tokenService;

        // Constructor initializing AuthController with split services
        public AuthController(
            IAuthenticationService authenticationService,
            IOtpService otpService,
            IPasswordService passwordService,
            ITokenService tokenService)
        {
            _authenticationService = authenticationService;
            _otpService = otpService;
            _passwordService = passwordService;
            _tokenService = tokenService;
        }

        // POST api/Auth/register - Register new account
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequest request)
        {
            // 1. Call RegisterAsync from IAuthenticationService
            var response = await _authenticationService.RegisterAsync(request);

            // 2. Return 201 Created response
            return CreatedAtAction(nameof(Register), new { id = response.UserId }, response);
        }

        // POST api/Auth/verify-otp - Verify register OTP
        [HttpPost("verify-otp")]
        public async Task<IActionResult> VerifyRegisterOtp([FromBody] VerifyRegisterOtpRequest request)
        {
            // 1. Call VerifyRegisterOtpAsync from IOtpService
            var response = await _otpService.VerifyRegisterOtpAsync(request);

            // 2. Return 200 OK response
            return Ok(response);
        }

        // POST api/Auth/login - Account authentication & JWT issue
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            // 1. Call LoginAsync from IAuthenticationService
            var response = await _authenticationService.LoginAsync(request);

            // 2. Return 200 OK response with tokens
            return Ok(response);
        }

        // POST api/Auth/refresh - Refresh Access Token via Refresh Token
        [AllowAnonymous]
        [HttpPost("refresh")]
        public async Task<IActionResult> RefreshToken([FromBody] RefreshTokenRequest request)
        {
            // 1. Call RefreshTokenAsync from ITokenService
            var response = await _tokenService.RefreshTokenAsync(request);

            // 2. Return 200 OK response with rotated tokens
            return Ok(response);
        }

        // POST api/Auth/logout - Logout and revoke Refresh Token
        [AllowAnonymous]
        [HttpPost("logout")]
        public async Task<IActionResult> Logout([FromBody] LogoutRequest request)
        {
            // 1. Call LogoutAsync from IAuthenticationService
            await _authenticationService.LogoutAsync(request);

            // 2. Return 200 OK response
            return Ok(new
            {
                message = "Đăng xuất thành công."
            });
        }

        // POST api/Auth/forgot-password - Request Forgot Password OTP
        [AllowAnonymous]
        [HttpPost("forgot-password")]
        public async Task<IActionResult> ForgotPassword([FromBody] ForgotPasswordRequest request)
        {
            // 1. Call ForgotPasswordAsync from IPasswordService
            var response = await _passwordService.ForgotPasswordAsync(request);

            // 2. Return 200 OK response
            return Ok(response);
        }

        // POST api/Auth/verify-forgot-password-otp - Verify Forgot Password OTP
        [AllowAnonymous]
        [HttpPost("verify-forgot-password-otp")]
        public async Task<IActionResult> VerifyForgotPasswordOtp([FromBody] VerifyForgotPasswordOtpRequest request)
        {
            // 1. Call VerifyForgotPasswordOtpAsync from IOtpService
            var response = await _otpService.VerifyForgotPasswordOtpAsync(request);

            // 2. Return 200 OK response with ResetToken
            return Ok(response);
        }

        // POST api/Auth/reset-password - Reset password using ResetToken
        [AllowAnonymous]
        [HttpPost("reset-password")]
        public async Task<IActionResult> ResetPassword([FromBody] ResetPasswordRequest request)
        {
            // 1. Call ResetPasswordAsync from IPasswordService
            await _passwordService.ResetPasswordAsync(request);

            // 2. Return 200 OK response
            return Ok(new
            {
                message = "Đặt lại mật khẩu thành công."
            });
        }

        // POST api/Auth/resend-otp - Resend OTP code for Register or ForgotPassword
        [AllowAnonymous]
        [HttpPost("resend-otp")]
        public async Task<IActionResult> ResendOtp([FromBody] ResendOtpRequest request)
        {
            // 1. Call ResendOtpAsync from IOtpService
            var response = await _otpService.ResendOtpAsync(request);

            // 2. Return 200 OK response
            return Ok(response);
        }

        // POST api/Auth/change-password - Change password for authenticated account
        [Authorize]
        [HttpPost("change-password")]
        public async Task<IActionResult> ChangePassword([FromBody] ChangePasswordRequest request)
        {
            // 1. Call ChangePasswordAsync from IPasswordService
            await _passwordService.ChangePasswordAsync(request);

            // 2. Return 200 OK response
            return Ok(new
            {
                message = "Đổi mật khẩu thành công."
            });
        }
    }
}