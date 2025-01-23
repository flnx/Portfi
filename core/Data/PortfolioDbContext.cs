using Microsoft.EntityFrameworkCore;

namespace PortfiModels.Data
{
    public class PortfolioDbContext : DbContext
    {
        public PortfolioDbContext(DbContextOptions<PortfolioDbContext> options) : base(options)
        {
        }

        
        public DbSet<Portfolio> Portfolios { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<PortfolioView> PortfolioViews { get; set; }
        public DbSet<PortfolioDownload> PortfolioDownloads { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            
            modelBuilder.Entity<Portfolio>()
                .HasMany(p => p.Projects)
                .WithOne()
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Portfolio>()
                .HasMany(p => p.PortfolioViews)
                .WithOne()
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Portfolio>()
                .HasMany(p => p.PortfolioDownloads)
                .WithOne()
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}