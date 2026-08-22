namespace fnb_pos_inventory_system.Entities
{
    public class Branch
    {
        // Primary Key
        public int Id { get; set; }

        // Mã chi nhánh
        // Ví dụ: CN001
        public string Code { get; set; } = string.Empty;

        // Tên chi nhánh
        // Ví dụ: Chi nhánh Quận 8
        public string Name { get; set; } = string.Empty;

        // Địa chỉ
        public string? Address { get; set; }

        // Chi nhánh còn hoạt động hay không
        public bool IsActive { get; set; } = true;

        // Thời gian tạo
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        // Một Branch có nhiều Warehouse
        public ICollection<Warehouse> Warehouses { get; set; }
            = new List<Warehouse>();
    }
}