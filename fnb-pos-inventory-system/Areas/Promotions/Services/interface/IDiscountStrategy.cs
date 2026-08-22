using fnb_pos_inventory_system.Entities;

namespace fnb_pos_inventory_system.Areas.Promotions.Services
{
    public interface IDiscountStrategy
    {
        public decimal ApplyDiscount(PromotionBenefit promotionBenefit,Order order);
    }
    public class StraightDiscountStrategy : IDiscountStrategy
    {

        public decimal ApplyDiscount(PromotionBenefit promotionBenefit, Order order)
        {
            decimal discountAmount = promotionBenefit.discountValue;
            //decimal finalAmount = order.totalAmount - promotionBenefit.discountValue;
            //order.discountAmount = discountAmount;
            //order.finalAmount = finalAmount;
            return discountAmount;
        }
    }
    public class PercentageDiscountStrategy : IDiscountStrategy
    {

        public decimal ApplyDiscount(PromotionBenefit promotionBenefit, Order order)
        {
            decimal discountAmount = order.totalAmount * promotionBenefit.discountValue / 100;
            //decimal finalAmount = order.totalAmount - (order.totalAmount * promotionBenefit.discountValue / 100);
            //order.discountAmount = discountAmount;
            //order.finalAmount = finalAmount;
            return discountAmount;
        }
    }
}



