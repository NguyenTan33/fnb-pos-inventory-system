namespace fnb_pos_inventory_system.Areas.Auth.DTOs
{
    public class ChangePasswordRequest
    {
        public string AccountId { get; set; } = string.Empty;
        public string CurrentPassword { get; set; } = string.Empty;
        public string NewPassword { get; set; } = string.Empty;
    }
}
