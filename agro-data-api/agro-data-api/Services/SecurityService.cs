using agro_data_api.Services.Abstractions;
using System;
using System.Security.Cryptography;
using System.Text;

namespace agro_data_api.Services
{
    public class SecurityService : ISecurityService
    {
        public bool ValidatePassword(string password, string generatedHash)
        {
            if (string.IsNullOrEmpty(generatedHash) || generatedHash.Length < 128)
                throw new ArgumentException("Invalid hash.");

            // Get the hash. The first 64 characters contain the original hash value.
            var hash = generatedHash.Substring(0, 64);

            // Get the salt. The next 64 characters contain the salt value.
            var salt = generatedHash.Substring(64, 64);

            // Generate hash from password with salt.
            var passwordHash = ComputeHash(string.Concat(salt, password));

            // Compare passwordhash with real hash. Return true if password matches.
            return string.CompareOrdinal(hash, passwordHash) == 0;
        }

        public string ComputeHash(string value)
        {
            using (var sha = new SHA256Managed())
            {
                var utf8 = Encoding.UTF8.GetBytes(value);
                return GetHex(sha.ComputeHash(utf8));
            }
        }

        private static string GetHex(byte[] bytes)
        {
            var s = new StringBuilder(bytes.Length * 2);
            foreach (var b in bytes)
            {
                s.Append(b.ToString("x2"));
            }
            return s.ToString();
        }

        public string ComputePassword(string password, string salt)
        {
            string passHash = ComputeHash(string.Concat(salt, password));
            return string.Concat(passHash, salt);
        }
    }
}
