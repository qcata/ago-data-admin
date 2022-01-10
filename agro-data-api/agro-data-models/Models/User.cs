using agro_data_models.Generic;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace agro_data_models.Models
{
    public class User : Entity
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }

        [JsonIgnore]
        public List<Land> Lands { get; set; }
    }
}
