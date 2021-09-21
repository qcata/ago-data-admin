using agro_data_api.Services.Abstractions;
using agro_data_models.Dto.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace agro_data_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        [Route("login")]
        [AllowAnonymous]
        public async Task<IActionResult> Login(LoginRequest model)
        {
            var loginResponse = await _userService.AuthenticateAsync(model);
            return Ok(loginResponse);
        }

        [HttpPost]
        [Route("register")]
        [AllowAnonymous]
        public async Task<IActionResult> Register(RegisterRequest model)
        {
            var registerResponse = await _userService.RegisterAsync(model);
            return Ok(registerResponse);
        }
    }
}
