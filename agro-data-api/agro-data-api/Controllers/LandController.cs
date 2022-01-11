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
        private readonly ICropService _cropService;

        public LandController(ILandService landService, ICropService cropService)
        {
            _landService = landService;
            _cropService = cropService;
        }

        [HttpPost]
        [Route("/api/{userId}/[controller]")]
        [AllowAnonymous]
        public async Task<IActionResult> CreateLand([FromRoute] int userId, CreateLandRequest model)
        {
            var loginResponse = await _landService.CreateNewLand(userId, model);
            return Ok(loginResponse);
        }

        [HttpGet]
        [Route("/api/{userId}/[controller]")]
        [AllowAnonymous]
        public async Task<IActionResult> GetLandsForUser([FromRoute] int userId)
        {
            return Ok(await _landService.GetLands(userId));
        }

        [HttpGet]
        [Route("/api/[controller]/{landId}")]
        [AllowAnonymous]
        public async Task<IActionResult> GetCropDetailsForLand([FromRoute] int landId)
        {
            return Ok(await _cropService.GetCropDetails(landId));
        }
    }
}
