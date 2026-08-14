namespace fnb_pos_inventory_system.Areas.Auth.DTOs
{
    public class RegisterRequest
    {
        public string FullName { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string PhoneNumber { get; set; } = string.Empty;
    }
}
