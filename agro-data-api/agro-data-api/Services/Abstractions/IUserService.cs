using agro_data_models.Dto.Authentication;
using System.Threading.Tasks;

namespace agro_data_api.Services.Abstractions
{
    public interface IUserService
    {
        public Task<LoginResponse> AuthenticateAsync(LoginRequest model);
        public Task<bool> RegisterAsync(RegisterRequest model);
    }
}
