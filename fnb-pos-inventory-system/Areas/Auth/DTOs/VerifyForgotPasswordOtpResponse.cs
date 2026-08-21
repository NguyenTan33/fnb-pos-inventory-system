
    namespace fnb_pos_inventory_system.Areas.Auth.DTOs
    {
        public class VerifyForgotPasswordOtpResponse
        {
            public string ResetToken { get; set; } = string.Empty;
            public string UserId { get; set; } = string.Empty;
            public string Otp { get; set; } = string.Empty;
    }
    }
