namespace fnb_pos_inventory_system.Areas.Auth.Services.Interfaces
{
    public interface IHashService
    {
        string Hash(string otp);
        bool Verify(string otp, string hash);
    }
}
