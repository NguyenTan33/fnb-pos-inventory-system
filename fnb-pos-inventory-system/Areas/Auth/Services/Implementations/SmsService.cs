using fnb_pos_inventory_system.Areas.Auth.Services.Interfaces;

namespace fnb_pos_inventory_system.Areas.Auth.Services.Implementations
{
    public class SmsService : ISmsService
    {
        // This is a mock implementation of the SMS service. In a real-world scenario, you would integrate with an actual SMS provider.
        public Task SendOtpAsync(string phoneNumber, string otp)
        {
            // Log the OTP to the console for demonstration purposes. In production, you would send the OTP via an SMS provider.
            Console.WriteLine($"OTP gửi đến {phoneNumber}: {otp}");

            return Task.CompletedTask;
        }
    }
}