using System;
using System.ComponentModel.DataAnnotations;

namespace agro_data_models.Generic
{
    public class Entity : IEntity
    {
        [Key]
        public int Id { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
