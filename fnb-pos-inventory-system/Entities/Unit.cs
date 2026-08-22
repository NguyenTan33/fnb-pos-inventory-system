namespace fnb_pos_inventory_system.Entities
{
    public class Unit
    {
        public int Id { get; set; }

        public string Name { get; set; } = string.Empty;

        public string Symbol { get; set; } = string.Empty;

        public bool IsActive { get; set; } = true;
    }
}

