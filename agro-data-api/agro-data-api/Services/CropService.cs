using agro_data_api.Repository;
using agro_data_api.Services.Abstractions;
using agro_data_models.Enums;
using agro_data_models.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;

namespace agro_data_api.Services
{
    public class CropService : ICropService
    {
        private readonly IRepository<Crop> _cropRepository;

        public CropService(IRepository<Crop> cropRepository)
        {
            _cropRepository = cropRepository;
        }

        public async Task<Crop> GetCropDetails(int landId)
        {
            var dbCrop = await _cropRepository.Find(c => c.LandId == landId).FirstOrDefaultAsync();
            if (dbCrop == null)
            {
                dbCrop = new Crop()
                {
                    CreatedAt = DateTime.Now,
                    Updated = DateTime.Now,
                    CropType = CropType.None,
                    LandId = landId
                };
                await _cropRepository.AddAsync(dbCrop);
            }
            if (dbCrop.Updated.Year != DateTime.Now.Year)
            {
                dbCrop.Updated = DateTime.Now;
                dbCrop.HasBeenFertilized = false;
                dbCrop.HasBeenPlanted = false;
                dbCrop.CropType = CropType.None;
                dbCrop.HasBeenHarvested = false;
                dbCrop.HasBeenTillaged = false;
                dbCrop.HasBeenWatered = false;
                dbCrop.Profit = 0;
                dbCrop.Quantity = 0;
                await _cropRepository.UpdateAsync(dbCrop);
            }
            return dbCrop;
        }
    }
}
