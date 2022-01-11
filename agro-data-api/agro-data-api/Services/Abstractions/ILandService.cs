using agro_data_models.Dto.Land;
using agro_data_models.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace agro_data_api.Services.Abstractions
{
    public interface ILandService
    {
        Task<bool> CreateNewLand(int userId, CreateLandRequest dto);
        Task<IEnumerable<Land>> GetLands(int userId);
    }
}
