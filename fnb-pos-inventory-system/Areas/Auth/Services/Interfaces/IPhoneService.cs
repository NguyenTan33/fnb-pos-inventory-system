namespace fnb_pos_inventory_system.Areas.Auth.Services.Interfaces
{
    public interface IPhoneService
    {
        string Normalize(string phoneNumber);
        bool IsValid(string phoneNumber);
    }
}

