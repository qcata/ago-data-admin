using agro_data_models.Models;

namespace agro_data_api.Services.Abstractions
{
    public interface ITokenService
    {
        public string GenerateJwtToken(User user);
    }
}
