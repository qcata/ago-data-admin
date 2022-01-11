using agro_data_models.Models;
using System.Threading.Tasks;

namespace agro_data_api.Services.Abstractions
{
    public interface ICropService
    {
        Task<Crop> GetCropDetails(int landId);
    }
}
