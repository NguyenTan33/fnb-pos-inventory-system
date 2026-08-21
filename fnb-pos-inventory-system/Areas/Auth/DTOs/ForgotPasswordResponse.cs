namespace fnb_pos_inventory_system.Areas.Auth.DTOs
{
    public class ForgotPasswordResponse
    {
        public string Message { get; set; } = string.Empty;
        public string Otp { get; set; } = string.Empty;
    }
}
