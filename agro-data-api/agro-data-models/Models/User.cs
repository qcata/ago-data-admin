using agro_data_models.Generic;

namespace agro_data_models.Models
{
    public class User : Entity
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
    }
}
