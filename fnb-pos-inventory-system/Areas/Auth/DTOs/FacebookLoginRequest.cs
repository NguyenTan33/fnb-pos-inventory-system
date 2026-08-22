namespace fnb_pos_inventory_system.Areas.Auth.DTOs
{
    public class FacebookLoginRequest
    {
        // Facebook User Access Token received from Facebook SDK / OAuth Client
        public string AccessToken { get; set; } = string.Empty;
    }
}
