namespace fnb_pos_inventory_system.Areas.Auth.Services.Interfaces
{
    public interface ISmsService
    {
        Task SendOtpAsync(string phoneNumber, string otp);
    }
}