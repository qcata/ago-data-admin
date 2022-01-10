using agro_data_models.Enums;

namespace agro_data_models.Dto.Authentication
{
    public class LoginResponse
    {
        public LoginResult LoginResult { get; set; }
        public string Token { get; set; }
        public int UserId { get; set; }
        public string AuthenticationErrorMessage { get; set; }
    }
}
