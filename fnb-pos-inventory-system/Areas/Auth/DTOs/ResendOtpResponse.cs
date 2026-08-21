namespace fnb_pos_inventory_system.Areas.Auth.DTOs
{
    public class ResendOtpResponse
    {
        public string Message { get; set; } = string.Empty;

        // Chỉ trả OTP để test trong Development
        public string? Otp { get; set; }
    }
}
