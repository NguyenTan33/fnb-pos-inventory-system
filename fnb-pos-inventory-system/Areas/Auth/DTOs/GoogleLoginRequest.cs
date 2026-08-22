namespace fnb_pos_inventory_system.Areas.Auth.DTOs
{
    public class GoogleLoginRequest
    {
        // Google ID Token (JWT Token) received from Google OAuth Client
        public string IdToken { get; set; } = string.Empty;
    }
}
