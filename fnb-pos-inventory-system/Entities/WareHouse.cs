namespace fnb_pos_inventory_system.Entities
{

    public class Warehouse
    {
        // Primary Key
        public int Id { get; set; }

        // Mã kho
        // Ví dụ: WH001
        public string Code { get; set; } = string.Empty;

        // Tên kho
        // Ví dụ: Kho nguyên liệu Quận 8
        public string Name { get; set; } = string.Empty;

        // Foreign Key tới Branch
        public int BranchId { get; set; }

        // Navigation Property
        public Branch Branch { get; set; } = null!;

        // Kho còn hoạt động hay không
        public bool IsActive { get; set; } = true;

        // Thời gian tạo
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}