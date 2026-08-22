using fnb_pos_inventory_system.Enums;

namespace fnb_pos_inventory_system.Entities;

public class InventoryTransaction
{
    // Primary Key
    public long Id { get; set; }

    // Batch bị tác động
    public int InventoryBatchId { get; set; }

    // Navigation Property
    public InventoryBatch InventoryBatch { get; set; } = null!;

    // Loại giao dịch kho
    public InventoryTransactionType Type { get; set; }

    // Số lượng thay đổi
    // Dương = tăng tồn
    // Âm = giảm tồn
    public decimal QuantityChange { get; set; }

    // Tồn trước giao dịch
    public decimal QuantityBefore { get; set; }

    // Tồn sau giao dịch
    public decimal QuantityAfter { get; set; }

    // Lý do / ghi chú
    public string? Note { get; set; }

    // ID tài khoản thực hiện thao tác
    public string? CreatedByAccountId { get; set; }

    // Navigation Property
    public Account? CreatedByAccount { get; set; }

    // Thời điểm phát sinh giao dịch
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}