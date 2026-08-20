using fnb_pos_inventory_system.Areas.Auth.Services.Interfaces;
using System.Security.Cryptography;
using System.Text;

namespace fnb_pos_inventory_system.Areas.Auth.Services.Implementations
{
    public class HashService : IHashService
    {
        private readonly string _secret;

        // Constructor
        public HashService(IConfiguration configuration)
        {
            // Get the OTP secret from configuration
            _secret = configuration["Otp:Secret"] ?? throw new InvalidOperationException("OTP secret chưa được cấu hình.");
        }

        // Hash the OTP using HMACSHA256 with the secret key
        public string Hash(string otp)
        {
            // Compute the HMACSHA256 hash of the OTP using the secret key
            using var hmac = new HMACSHA256(Encoding.UTF8.GetBytes(_secret));

            // Convert the OTP string to bytes and compute the hash
            var otpBytes = Encoding.UTF8.GetBytes(otp);

            // Compute the hash and convert it to a hexadecimal string
            var hash = hmac.ComputeHash(otpBytes);

            // Return the hash as a hexadecimal string
            return Convert.ToHexString(hash);
        }

        // Verify the OTP against the provided hash
        public bool Verify(string otp, string hash)
        {
            // Compute the expected hash for the provided OTP
            var expectedHash = Hash(otp);

            // Compare the expected hash with the provided hash in a time-constant manner
            var expectedBytes = Convert.FromHexString(expectedHash);
            var actualBytes = Convert.FromHexString(hash);

            // Use CryptographicOperations.FixedTimeEquals to prevent timing attacks
            return CryptographicOperations.FixedTimeEquals(expectedBytes,actualBytes);
        }
    }
}
