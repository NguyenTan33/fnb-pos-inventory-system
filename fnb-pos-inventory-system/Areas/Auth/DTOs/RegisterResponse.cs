using fnb_pos_inventory_system.Areas.Auth.DTOs;

namespace fnb_pos_inventory_system.Areas.Auth.DTOs
{
    public class RegisterResponse
    {
        public string FullName { get; set; } = string.Empty;
        public string PhoneNumber { get; set; } = string.Empty; 
        public string UserId { get; set; } = string.Empty;
    }
}
