using fnb_pos_inventory_system.Areas.Auth.Services.Interfaces;

namespace fnb_pos_inventory_system.Areas.Auth.Services.Implementations
{
    public class OtpHashService : IOtpHashService
    {
        public Task<string> HashOtpAsync(string otp)
        {
            throw new NotImplementedException();
        }
    }
}
