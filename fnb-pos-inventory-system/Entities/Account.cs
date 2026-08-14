using Microsoft.AspNetCore.Identity;

namespace fnb_pos_inventory_system.Entities
{
    public class Account : IdentityUser
    {
        public string FullName { get; set; } = string.Empty;

        public int? BranchId { get; set; }

        public bool IsActive { get; set; } = true;

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    }
}
