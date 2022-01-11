using agro_data_models.Enums;
using agro_data_models.Generic;
using System;

namespace agro_data_models.Models
{
    public class Crop : Entity
    {
        public bool HasBeenTillaged { get; set; }
        public bool HasBeenPlanted { get; set; }
        public bool HasBeenFertilized { get; set; }
        public bool HasBeenWatered { get; set; }
        public bool HasBeenHarvested { get; set; }
        public CropType CropType { get; set; }
        public decimal Profit { get; set; }
        public int Quantity { get; set; }
        public DateTime Updated { get; set; }

        public int LandId { get; set; }
        public Land Land { get; set; }
    }
}
