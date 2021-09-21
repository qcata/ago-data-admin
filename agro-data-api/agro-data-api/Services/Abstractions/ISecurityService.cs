namespace agro_data_api.Services.Abstractions
{
    public interface ISecurityService
    {
        public bool ValidatePassword(string password, string generatedHash);
        public string ComputeHash(string value);
        public string ComputePassword(string password, string salt);
    }
}
