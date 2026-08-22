using fnb_pos_inventory_system.Areas.Inventory.Services.Interfaces;
using fnb_pos_inventory_system.Enums;
using fnb_pos_inventory_system.Entities;
using Microsoft.EntityFrameworkCore;
using fnb_pos_inventory_system.Exceptions;

namespace fnb_pos_inventory_system.Areas.Inventory.Services.Implementations
{
    public class InventoryStockService : IInventoryStockService
    {
        private readonly ApplicationDbContext _context;

        public InventoryStockService(ApplicationDbContext context)
        {
            _context = context;
        }


        public async Task DecreaseStockAsync(int batchId, decimal quantity, InventoryTransactionType type, string accountId, string? note = null)
        {
            if (quantity <=0)             
            {
                throw new BusinessException("Số lượng phải lớn hơn 0.");
            }

            var InventoryBatch = await _context.InventoryBatches.FirstOrDefaultAsync(x =>x.Id == batchId);

            if (InventoryBatch == null) 
            {
                throw new BusinessException("Lô hàng không tồn tại.");
            }

            var quantityBefore = InventoryBatch.Quantity;

            if( quantity > quantityBefore)
            {
                throw new BusinessException("Số lượng tồn kho không đủ.");
            }

            var quantityAfter = quantityBefore - quantity;

            InventoryBatch.Quantity = quantityAfter;

            var transaction = new InventoryTransaction
            {
                InventoryBatchId = batchId,
                Type = type,
                QuantityChange = -quantity,
                QuantityBefore = quantityBefore,
                QuantityAfter = quantityAfter,
                Note = note,
                CreatedByAccountId = accountId,
                CreatedAt = DateTime.UtcNow,
            };

            _context.InventoryTransactions.Add(transaction);

            await _context.SaveChangesAsync();

        }

        public async Task IncreaseStockAsync(int batchId, decimal quantity, InventoryTransactionType type, string accountId, string? note = null)
        {
            // Validate input parameters
            if (quantity <= 0)
            {
                throw new BusinessException("Số lượng phải lớn hơn 0");
            }

            // Retrieve the inventory batch from the database
            var InventoryBatch = await _context.InventoryBatches.FirstOrDefaultAsync(b => b.Id == batchId);

            // Check if the inventory batch exists
            if (InventoryBatch == null)
            {
                throw new BusinessException("Lô hàng không tồn tại");
            }

            // Update the inventory batch quantity
            var quantityBefore = InventoryBatch.Quantity;

            var quantityAfter = InventoryBatch.Quantity + quantity;

            InventoryBatch.Quantity = quantityAfter;

            var transaction = new InventoryTransaction
            {
                InventoryBatchId = batchId,
                Type = type,
                QuantityChange = quantity,
                QuantityBefore = quantityBefore,
                QuantityAfter = quantityAfter,
                Note = note,
                CreatedByAccountId = accountId,
                CreatedAt = DateTime.UtcNow
            };

            _context.InventoryTransactions.Add(transaction);

            await _context.SaveChangesAsync();


        }
    }
}
