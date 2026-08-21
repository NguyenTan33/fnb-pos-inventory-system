using System.Security.Claims;
using fnb_pos_inventory_system.Areas.Auth.DTOs;
using fnb_pos_inventory_system.Areas.Auth.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.RateLimiting;

namespace fnb_pos_inventory_system.Areas.Auth.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        // Dependency Injection
        private readonly IAuthenticationService _authenticationService;
        private readonly IOtpService _otpService;
        private readonly IPasswordService _passwordService;
        private readonly ITokenService _tokenService;

        // Constructor
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

        // REGISTER
        [AllowAnonymous]
        [EnableRateLimiting("AuthPolicy")]
        [HttpPost("register")]
        public async Task<IActionResult> Register(
            [FromBody] RegisterRequest request)
        {
            var response =
                await _authenticationService.RegisterAsync(request);

            return CreatedAtAction(
                nameof(Register),
                new { id = response.UserId },
                response);
        }

        // VERIFY REGISTER OTP
        [AllowAnonymous]
        [EnableRateLimiting("VerifyOtpPolicy")]
        [HttpPost("verify-otp")]
        public async Task<IActionResult> VerifyRegisterOtp(
            [FromBody] VerifyRegisterOtpRequest request)
        {
            var response =
                await _otpService.VerifyRegisterOtpAsync(request);

            return Ok(response);
        }

        // LOGIN
        [AllowAnonymous]
        [EnableRateLimiting("AuthPolicy")]
        [HttpPost("login")]
        public async Task<IActionResult> Login(
            [FromBody] LoginRequest request)
        {
            var response =
                await _authenticationService.LoginAsync(request);

            return Ok(response);
        }

        // REFRESH TOKEN
        [AllowAnonymous]
        [EnableRateLimiting("AuthPolicy")]
        [HttpPost("refresh")]
        public async Task<IActionResult> RefreshToken(
            [FromBody] RefreshTokenRequest request)
        {
            var response =
                await _tokenService.RefreshTokenAsync(request);

            return Ok(response);
        }

        // LOGOUT
        [AllowAnonymous]
        [HttpPost("logout")]
        public async Task<IActionResult> Logout(
            [FromBody] LogoutRequest request)
        {
            await _authenticationService.LogoutAsync(request);

            return Ok(new
            {
                message = "Đăng xuất thành công."
            });
        }

        // FORGOT PASSWORD
        // SEND OTP
        [AllowAnonymous]
        [EnableRateLimiting("SendOtpPolicy")]
        [HttpPost("forgot-password")]
        public async Task<IActionResult> ForgotPassword(
            [FromBody] ForgotPasswordRequest request)
        {
            var response =
                await _passwordService.ForgotPasswordAsync(request);

            return Ok(response);
        }

        // VERIFY FORGOT PASSWORD OTP
        [AllowAnonymous]
        [EnableRateLimiting("VerifyOtpPolicy")]
        [HttpPost("verify-forgot-password-otp")]
        public async Task<IActionResult> VerifyForgotPasswordOtp(
            [FromBody] VerifyForgotPasswordOtpRequest request)
        {
            var response =
                await _otpService.VerifyForgotPasswordOtpAsync(request);

            return Ok(response);
        }

        // RESET PASSWORD
        [AllowAnonymous]
        [EnableRateLimiting("AuthPolicy")]
        [HttpPost("reset-password")]
        public async Task<IActionResult> ResetPassword(
            [FromBody] ResetPasswordRequest request)
        {
            await _passwordService.ResetPasswordAsync(request);

            return Ok(new
            {
                message = "Đặt lại mật khẩu thành công."
            });
        }

        // RESEND OTP
        [AllowAnonymous]
        [EnableRateLimiting("SendOtpPolicy")]
        [HttpPost("resend-otp")]
        public async Task<IActionResult> ResendOtp(
            [FromBody] ResendOtpRequest request)
        {
            var response =
                await _otpService.ResendOtpAsync(request);

            return Ok(response);
        }

        // CHANGE PASSWORD
        [Authorize]
        [EnableRateLimiting("AuthPolicy")]
        [HttpPost("change-password")]
        public async Task<IActionResult> ChangePassword(
            [FromBody] ChangePasswordRequest request)
        {
            // 1. Get AccountId from JWT
            var accountId =
                User.FindFirstValue(
                    ClaimTypes.NameIdentifier);

            // 2. Validate claim
            if (string.IsNullOrWhiteSpace(accountId))
            {
                return Unauthorized(new
                {
                    message = "Token không chứa thông tin tài khoản hợp lệ."
                });
            }

            // 3. Change password for the authenticated account
            await _passwordService.ChangePasswordAsync(accountId,request);

            // 4. Return success
            return Ok(new
            {
                message = "Đổi mật khẩu thành công."
            });
        }
    }
}