using fnb_pos_inventory_system.Enums;

namespace fnb_pos_inventory_system.Entities;

public class InventoryItem
{
    public int Id { get; set; }

    public string Code { get; set; } = string.Empty;

    public string Name { get; set; } = string.Empty;

    public InventoryItemType Type { get; set; }

    public int UnitId { get; set; }

    public Unit Unit { get; set; } = null!;

    public bool IsActive { get; set; } = true;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}