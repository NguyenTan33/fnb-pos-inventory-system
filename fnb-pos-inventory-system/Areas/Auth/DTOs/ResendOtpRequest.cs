namespace fnb_pos_inventory_system.Areas.Auth.DTOs
{
    public class ResendOtpRequest
    {
        public string PhoneNumber { get; set; } = string.Empty;

        public string Purpose { get; set; } = string.Empty;
    }
}
