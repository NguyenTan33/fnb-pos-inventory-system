using fnb_pos_inventory_system.Areas.Auth.DTOs;
using fnb_pos_inventory_system.Areas.Auth.Services.Interfaces;
using fnb_pos_inventory_system.Entities;
using fnb_pos_inventory_system.Exceptions;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace fnb_pos_inventory_system.Areas.Auth.Services.Implementations
{
    public class PasswordService : IPasswordService
    {
        // Dependency Injection
        private readonly UserManager<Account> _userManager;
        private readonly IPhoneService _phoneService;
        private readonly IOtpService _otpService;

        public PasswordService(
            UserManager<Account> userManager,
            IPhoneService phoneService,
            IOtpService otpService)
        {
            _userManager = userManager;
            _phoneService = phoneService;
            _otpService = otpService;
        }

        public async Task<ForgotPasswordResponse> ForgotPasswordAsync(ForgotPasswordRequest request)
        {
            // 1. Normalize phone number
            var phoneNumber = _phoneService.Normalize(request.PhoneNumber);

            // 2. Validate phone number format
            if (!_phoneService.IsValid(phoneNumber))
            {
                throw new BusinessException("Số điện thoại không hợp lệ.");
            }

            // 3. Find account by phone number
            var account = await _userManager.Users.FirstOrDefaultAsync(x => x.PhoneNumber == phoneNumber);

            if (account == null)
            {
                throw new BusinessException("Nếu số điện thoại được đăng ký, mã xác thực sẽ được gửi.");
            }

            // 4. Generate and send Forgot Password OTP using OtpService
            var otp = await _otpService.SendForgotPasswordOtpAsync(phoneNumber);

            // 5. Return response (including plain OTP for testing)
            return new ForgotPasswordResponse
            {
                Message = "Nếu số điện thoại được đăng ký, mã xác thực sẽ được gửi.",
                Otp = otp
            };
        }

        public async Task ResetPasswordAsync(ResetPasswordRequest request)
        {
            // 1. Normalize phone number
            var phoneNumber = _phoneService.Normalize(request.PhoneNumber);

            // 2. Validate phone number format
            if (!_phoneService.IsValid(phoneNumber))
            {
                throw new BusinessException("Số điện thoại không hợp lệ.");
            }

            // 3. Validate Reset Token
            if (string.IsNullOrWhiteSpace(request.ResetToken))
            {
                throw new BusinessException("Reset Token không hợp lệ.");
            }

            // 4. Validate new password
            if (string.IsNullOrWhiteSpace(request.NewPassword))
            {
                throw new BusinessException("Mật khẩu mới không được để trống.");
            }

            // 5. Find account by phone number
            var account = await _userManager.Users.FirstOrDefaultAsync(x => x.PhoneNumber == phoneNumber);

            if (account == null)
            {
                throw new BusinessException("Yêu cầu đặt lại mật khẩu không hợp lệ.");
            }

            // 6. Reset password using ASP.NET Core Identity
            var result = await _userManager.ResetPasswordAsync(account, request.ResetToken, request.NewPassword);

            // 7. Check result
            if (!result.Succeeded)
            {
                var errors = string.Join(", ", result.Errors.Select(e => e.Description));
                throw new BusinessException(errors);
            }
        }

        public async Task ChangePasswordAsync(string accountId, ChangePasswordRequest request)
        {
            // 1. Validate inputs
            if (string.IsNullOrWhiteSpace(request.AccountId))
            {
                throw new BusinessException("Mã tài khoản không hợp lệ.");
            }

            if (string.IsNullOrWhiteSpace(request.CurrentPassword) || string.IsNullOrWhiteSpace(request.NewPassword))
            {
                throw new BusinessException("Mật khẩu hiện tại và mật khẩu mới không được để trống.");
            }

            // 2. Find account by Id
            var account = await _userManager.FindByIdAsync(request.AccountId);

            if (account == null)
            {
                throw new BusinessException("Tài khoản không tồn tại.");
            }

            // 3. Change password using Identity
            var result = await _userManager.ChangePasswordAsync(account, request.CurrentPassword, request.NewPassword);

            // 4. Check result
            if (!result.Succeeded)
            {
                var errors = string.Join(", ", result.Errors.Select(e => e.Description));
                throw new BusinessException(errors);
            }
        }
    }
}
