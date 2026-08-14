using fnb_pos_inventory_system.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace fnb_pos_inventory_system;

public class ApplicationDbContext
    : IdentityDbContext<Account>
{
    public ApplicationDbContext(
        DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
        builder.ApplyConfigurationsFromAssembly(typeof(ApplicationDbContext).Assembly);
    }

    public DbSet<OtpVerification> OtpVerifications { get; set; } = null!;
}