namespace fnb_pos_inventory_system.Areas.Auth.DTOs
{
    public class ResetPasswordRequest
    {
        public string PhoneNumber { get; set; } = string.Empty;

        public string ResetToken { get; set; } = string.Empty;

        public string NewPassword { get; set; } = string.Empty;
    }
}
