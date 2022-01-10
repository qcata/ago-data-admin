using agro_data_api.Services.Abstractions;
using agro_data_models.Dto.Land;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace agro_data_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LandController : ControllerBase
    {
        private readonly ILandService _landService;

        public LandController(ILandService landService)
        {
            _landService = landService;
        }

        [HttpPost]
        [Route("/api/{userId}/[controller]")]
        [AllowAnonymous]
        public async Task<IActionResult> CreateLand([FromRoute] int userId, CreateLandRequest model)
        {
            var loginResponse = await _landService.CreateNewLand(userId, model);
            return Ok(loginResponse);
        }
    }
}
