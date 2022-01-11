using agro_data_models.Models;
using Microsoft.EntityFrameworkCore;

namespace agro_data_api.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<Land> Lands { get; set; }
        public virtual DbSet<Crop> Crops { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        }
    }
}