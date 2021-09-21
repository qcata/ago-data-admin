namespace agro_data_models.Settings
{
    public class AuthenticationSettings
    {
        public string Secret { get; set; }
        public string Salt { get; set; }
        public double TokenExpirationInMinutes { get; set; }
        public string DefaultRole { get; set; }
    }
}
