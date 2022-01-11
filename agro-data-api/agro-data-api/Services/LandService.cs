using agro_data_api.Repository;
using agro_data_api.Services.Abstractions;
using agro_data_models.Dto.Land;
using agro_data_models.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace agro_data_api.Services
{
    public class LandService : ILandService
    {
        private readonly IRepository<Land> _landRepository;

        public LandService(IRepository<Land> landRepository)
        {
            _landRepository = landRepository;
        }

        public async Task<bool> CreateNewLand(int userId, CreateLandRequest dto)
        {
            var existingLand = _landRepository.Find(l => l.UserId == userId
                                                         && l.Coord1 == dto.Coord1
                                                         && l.Coord2 == dto.Coord2
                                                         && l.Coord3 == dto.Coord3
                                                         && l.Coord4 == dto.Coord4)
                                               .FirstOrDefault();
            if (existingLand == null)
            {
                var dbObject = new Land()
                {
                    Coord1 = dto.Coord1,
                    Coord2 = dto.Coord2,
                    Coord3 = dto.Coord3,
                    Coord4 = dto.Coord4,
                    CreatedAt = DateTime.Now,
                    Name = dto.Name,
                    UserId = userId
                };
                await _landRepository.AddAsync(dbObject);
                return true;
            }
            else
            {
                return false;
            }
        }

        public async Task<IEnumerable<Land>> GetLands(int userId)
        {
            return await _landRepository.Find(l => l.UserId == userId).ToListAsync();
        }
    }
}
