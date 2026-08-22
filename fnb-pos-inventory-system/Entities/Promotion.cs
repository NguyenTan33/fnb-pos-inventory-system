namespace fnb_pos_inventory_system.Entities
{
    public class Promotion
    {
        public int id { get; set; }
        public string name { get; set; } = string.Empty!;
        public string? code { get; set; }
        public int priority { get; set; } = 0;
        public bool isStackable { get; set; } = false;
        public string? exclusiveGroup { get; set; }
        public int? usageLimit { get; set; }
        public int usageLimitPerUser { get; set; } = 1;
        public DateTime startDate { get; set; }
        public DateTime endDate { get; set; }
        public bool isActive { get; set; } = true;
    }
    public enum PromotionType
    {
        StraightDiscount,
        PercentageDiscount,
        //BuyXGetY,
        //Combo
    }

    public class PromotionCondition
    {
        public int id { get; set; }
        public int promotionId { get; set; }
        public string conditionType { get; set; } = string.Empty!; // MinOrderAmount, TimeFrame, Tier
        public string conditionOperator { get; set; } = ">=";
        public string conditionValue { get; set; } = string.Empty!; // Lưu chuỗi/JSON giá trị điều kiện
    }

    public class PromotionTarget
    {
        public int id { get; set; }
        public int promotionId { get; set; }
        public string targetType { get; set; } = string.Empty!; // Product, Category, Branch
        public int targetId { get; set; }
        public bool isExcluded { get; set; } = false;
    }

    public class PromotionBenefit
    {
        public int id { get; set; }
        public int promotionId { get; set; }
        public PromotionType benefitType { get; set; } // PercentDiscount, FixedDiscount, FreeItem
        public decimal discountValue { get; set; }
        public decimal? maxDiscountAmount { get; set; }
        public int? buyQuantity { get; set; }
        public int? getQuantity { get; set; }
        public int? targetItemId { get; set; }
    }

    public class PromotionUsage
    {
        public int id { get; set; }
        public int promotionId { get; set; }
        public int orderId { get; set; }
        public int? customerId { get; set; }
        public decimal discountAmount { get; set; }
        public DateTime usedDate { get; set; } = DateTime.Now;
    }
}
