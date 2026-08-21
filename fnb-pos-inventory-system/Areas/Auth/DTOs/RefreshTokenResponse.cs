namespace fnb_pos_inventory_system.Areas.Auth.DTOs
{
    public class RefreshTokenResponse
    {
        public string AccessToken { get; set; } = string.Empty;

        public string RefreshToken { get; set; } = string.Empty;

        public DateTime ExpiresAt { get; set; }
    }
}
