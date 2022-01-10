using agro_data_models.Generic;

namespace agro_data_models.Models
{
    public class Land : Entity
    {
        public double Coord1 { get; set; }
        public double Coord2 { get; set; }
        public double Coord3 { get; set; }
        public double Coord4 { get; set; }

        public string Name { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }
    }
}
