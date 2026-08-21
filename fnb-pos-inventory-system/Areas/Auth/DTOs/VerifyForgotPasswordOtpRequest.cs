namespace fnb_pos_inventory_system.Areas.Auth.DTOs
{
    public class VerifyForgotPasswordOtpRequest
    {
        public string PhoneNumber { get; set; } = string.Empty;
        public string Otp { get; set; } = string.Empty;
    }
}
