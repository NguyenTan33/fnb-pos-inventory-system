namespace fnb_pos_inventory_system.Entities
{
    public class OtpVerification
    {
        public Guid Id { get; set; }
        public string PhoneNumber { get; set; } = string.Empty;
        public string OtpHash { get; set; } = string.Empty;
        public DateTime ExpiresAt { get; set; }
        public int FailedAttempts { get; set; } = 0;
        public bool IsUsed { get; set; } = false;
        public string Purpose { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    }
}
