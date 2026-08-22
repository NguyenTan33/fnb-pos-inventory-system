using System.Runtime.InteropServices;
using System.ComponentModel.DataAnnotations;

namespace fnb_pos_inventory_system.Entities;

public class InventoryBatch
{
    // Primary Key
    public int Id { get; set; }

    // Mã lô
    // Ví dụ: LOT-20260822-001
    public string BatchCode { get; set; } = string.Empty;

    // Item của lô này
    public int InventoryItemId { get; set; }

    // Navigation Property
    public InventoryItem InventoryItem { get; set; } = null!;

    // Kho đang chứa lô hàng
    public int WarehouseId { get; set; }

    // Navigation Property
    public Warehouse Warehouse { get; set; } = null!;

    // Số lượng hiện còn trong lô
    // Luôn sử dụng Base Unit của InventoryItem
    public decimal Quantity { get; set; }

    // Hạn sử dụng
    // Một số item có thể không có HSD
    public DateTime? ExpirationDate { get; set; }

    // Thời điểm lô được nhập vào kho
    public DateTime ReceivedAt { get; set; } = DateTime.UtcNow;

    // Thời điểm record được tạo
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    [Timestamp]
    public byte[] RowVersion { get; set; } = Array.Empty<byte>();
}