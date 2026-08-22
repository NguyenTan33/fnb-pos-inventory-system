using fnb_pos_inventory_system.Entities;

namespace fnb_pos_inventory_system.Areas.Promotions.Services
{
    public class PromotionService
    {

        private readonly ApplicationDbContext context;
        private readonly DiscountStrategyFactory promotionServiceFactory = new DiscountStrategyFactory();
        public PromotionService(ApplicationDbContext dbcontext)
        {
            context = dbcontext;
        }
        // Implement methods to manage promotions, conditions, targets, benefits, and usage
        public void CreatePromotion(string name, decimal value, int amount, DateTime endDate, bool isActive)
        {
            Promotion promotion = new Promotion
            {
                name = name,
                priority = 0,
                isStackable = false,
                exclusiveGroup = null,
                usageLimit = amount,
                usageLimitPerUser = 1,
                startDate = DateTime.Now,
                endDate = endDate,
                isActive = isActive
            };
            //context.Promotions.Add(promotion);
            context.SaveChanges();
        }

        public bool ValidateCondition(Promotion promotion, PromotionCondition condition, Order order)
        {
            var now = DateTime.Now;
            if (!promotion.isActive || now < promotion.startDate || now > promotion.endDate)
                return false;

            return true;
        }

        public decimal CalculateDiscount(PromotionBenefit promotionBenefit, Order order)
        {
            var strategy = promotionServiceFactory.GetStrategy(promotionBenefit , order);
            decimal orderAfterDiscount = strategy.ApplyDiscount(promotionBenefit,order);
            return orderAfterDiscount;
        }


        // ==========================================
        // 3. Apply Promotion to Order
        // ==========================================
        public bool ApplyPromotionToOrder(Promotion promo, PromotionCondition condition, PromotionBenefit benefit, Order order)
        {
            // Bước 1: Kiểm tra điều kiện trước
            if (!ValidateCondition(promo, condition, order))
            {
                return false; // Không đủ điều kiện áp dụng
            }

            // Bước 2: Thỏa mãn thì tính số tiền giảm
            decimal discountAmount = CalculateDiscount(benefit, order);

            // Bước 3: Cập nhật thông số hiển thị lên Order (Chưa SaveChanges)
            order.discountAmount = discountAmount;
            order.finalAmount = order.totalAmount - discountAmount;

            return true;
        }
    }
    public class DiscountStrategyFactory
    {
        
        public IDiscountStrategy GetStrategy(PromotionBenefit benefitType , Order order)
        {
            return benefitType.benefitType switch
            {
                PromotionType.PercentageDiscount => new PercentageDiscountStrategy(),
                PromotionType.StraightDiscount => new StraightDiscountStrategy(),
                
                _ => throw new NotSupportedException($"Chưa hỗ trợ loại giảm giá: {benefitType}")
            };
        }
    }
}

