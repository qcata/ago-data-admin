using agro_data_api.Repository;
using agro_data_api.Services.Abstractions;
using agro_data_models.Dto.Authentication;
using agro_data_models.Enums;
using agro_data_models.Models;
using agro_data_models.Settings;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Threading.Tasks;

namespace agro_data_api.Services
{
    public class UserService : IUserService
    {
        private readonly IRepository<User> _userRepository;
        private readonly ITokenService _tokenService;
        private readonly ISecurityService _securityService;
        private readonly AuthenticationSettings _authenticationSettings;

        public UserService(IOptions<AuthenticationSettings> authenticationSettings,
                           IRepository<User> userRepository,
                           ISecurityService securityService,
                           ITokenService tokenService)
        {
            _userRepository = userRepository;
            _tokenService = tokenService;
            _securityService = securityService;
            _authenticationSettings = authenticationSettings.Value;
        }

        public async Task<LoginResponse> AuthenticateAsync(LoginRequest model)
        {
            try
            {
                var response = new LoginResponse();
                var user = await _userRepository.Find(u => u.Email == model.Email).SingleOrDefaultAsync();
                if (user != null)
                {
                    if (_securityService.ValidatePassword(model.Password, user.Password))
                    {
                        var token = _tokenService.GenerateJwtToken(user);

                        response.Token = token;
                        response.LoginResult = LoginResult.Authenticated;

                    }
                    else
                    {
                        response.LoginResult = LoginResult.Failed;
                        response.AuthenticationErrorMessage = "User and Password are incorrect";
                    }
                }
                else
                {
                    response.LoginResult = LoginResult.Failed;
                    response.AuthenticationErrorMessage = "User and Password are incorrect";
                }
                return response;
            }
            catch (Exception ex)
            {
                return new LoginResponse
                {
                    LoginResult = LoginResult.Failed,
                    AuthenticationErrorMessage = "Something went wrong"
                };
            }
        }

        public async Task<bool> RegisterAsync(RegisterRequest model)
        {
            var dbUser = new User()
            {
                CreatedAt = DateTime.Now,
                Password = _securityService.ComputePassword(model.Password, _authenticationSettings.Salt),
                Email = model.Email,
                Name = model.NameAndSurname,
            };
            await _userRepository.AddAsync(dbUser);
            return true;
        }
    }
}
