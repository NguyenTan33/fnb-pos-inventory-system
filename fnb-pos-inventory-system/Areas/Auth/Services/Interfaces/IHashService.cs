namespace fnb_pos_inventory_system.Areas.Auth.Services.Interfaces
{
    public interface IHashService
    {
        string Hash(string value, string secret);

        bool Verify(string value, string hash, string secret);
    }
}