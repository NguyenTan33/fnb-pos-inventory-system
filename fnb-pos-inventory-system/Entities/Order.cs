public class Order
{
    public int id { get; set; }
    public int customerId { get; set; }
    public DateTime orderDate { get; set; }
    public decimal totalAmount { get; set; }
    public decimal discountAmount { get; set; }
    public decimal finalAmount { get; set; }
    public string status { get; set; } = string.Empty!;
}