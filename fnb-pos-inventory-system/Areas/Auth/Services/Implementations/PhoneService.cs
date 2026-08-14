using fnb_pos_inventory_system.Areas.Auth.Services.Interfaces;
using System.Text.RegularExpressions;

namespace fnb_pos_inventory_system.Areas.Auth.Services.Implementations
{
    public class PhoneService : IPhoneService
    {
        public bool IsValid(string phoneNumber)
        {
            // Check if the input phone number is null or empty
            if (string.IsNullOrWhiteSpace(phoneNumber))
            {
                return false;
            }

            // Normalize the phone number before validation
            return Regex.IsMatch(phoneNumber, @"^\+84(3|5|7|8|9)\d{8}$");
        }

        // This method normalizes a phone number by removing spaces and trimming whitespace.
        public string Normalize(string phoneNumber)
        {
            // Check if the input phone number is null or empty
            var phone = phoneNumber.Trim();

            // Remove all spaces from the phone number
            phone = phone.Replace(" ","");

            // If the phone number starts with "0", replace it with the country code "+84"
            if (phone.StartsWith("0"))
            {
                // Convert Vietnamese local format (0xxxxxxxxx) to E.164 format (+84xxxxxxxxx)
                phone = "+84" + phone.Substring(1);
            }    

            return phone;
        }
    }
}
