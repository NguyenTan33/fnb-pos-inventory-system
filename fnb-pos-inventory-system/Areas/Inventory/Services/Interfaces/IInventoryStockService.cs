using fnb_pos_inventory_system.Enums;

namespace fnb_pos_inventory_system.Areas.Inventory.Services.Interfaces
{
    public interface IInventoryStockService
    {
        public Task IncreaseStockAsync(int batchId, decimal quantity, InventoryTransactionType type, string accountId, string? note = null);

        Task DecreaseStockAsync(int batchId, decimal quantity, InventoryTransactionType type, string accountId, string? note = null);
    }
}
