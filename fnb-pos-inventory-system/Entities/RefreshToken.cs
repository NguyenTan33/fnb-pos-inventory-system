using fnb_pos_inventory_system.Entities;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class RefreshToken
{
    public string Id { get; set; } = Guid.NewGuid().ToString();

    [Required]
    public string AccountId { get; set; } = string.Empty;

    [Required]
    public string TokenHash { get; set; } = string.Empty;

    public DateTime ExpiresAt { get; set; }

    public bool IsRevoked { get; set; } = false;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime? RevokedAt { get; set; }

    [ForeignKey(nameof(AccountId))]
    public Account Account { get; set; } = null!;
}