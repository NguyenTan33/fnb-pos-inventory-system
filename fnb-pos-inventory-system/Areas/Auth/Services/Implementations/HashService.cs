using fnb_pos_inventory_system.Areas.Auth.Services.Interfaces;
using System.Security.Cryptography;
using System.Text;

namespace fnb_pos_inventory_system.Areas.Auth.Services.Implementations
{
    public class HashService : IHashService
    {
        
        public string Hash(string value, string secret)
        {
            // Create a new instance of HMACSHA256 with the secret key
            using var hmac = new HMACSHA256(
                Encoding.UTF8.GetBytes(secret));

            // Convert the value to a byte array
            var valueBytes = Encoding.UTF8.GetBytes(value);

            // Compute the hash
            var hash = hmac.ComputeHash(valueBytes);

            return Convert.ToHexString(hash);
        }

        public bool Verify(
            string value,
            string hash,
            string secret)
        {
            // Compute the expected hash for the given value and secret
            var expectedHash = Hash(value, secret);

            // Compare the expected hash with the provided hash in a time-constant manner
            var expectedBytes =
                Convert.FromHexString(expectedHash);

            // Convert the provided hash to a byte array
            var actualBytes =
                Convert.FromHexString(hash);

            // Use CryptographicOperations.FixedTimeEquals to prevent timing attacks
            return CryptographicOperations.FixedTimeEquals(
                expectedBytes,
                actualBytes);
        }
    }
}