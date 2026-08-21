using fnb_pos_inventory_system.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace fnb_pos_inventory_system;

public class ApplicationDbContext : IdentityDbContext<Account>
{
    public ApplicationDbContext(
        DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }


    protected override void OnModelCreating(ModelBuilder builder)
    {
        // Configure ASP.NET Core Identity tables first
        base.OnModelCreating(builder);

        // Configure RefreshToken -> Account relationship
        builder.Entity<RefreshToken>()
            .HasOne(x => x.Account)
            .WithMany()
            .HasForeignKey(x => x.AccountId)
            .OnDelete(DeleteBehavior.Cascade);

        // Prevent duplicate phone numbers at database level
        builder.Entity<Account>()
            .HasIndex(x => x.PhoneNumber)
            .IsUnique()
            .HasFilter("[PhoneNumber] IS NOT NULL");

        // Apply IEntityTypeConfiguration classes in this assembly
        builder.ApplyConfigurationsFromAssembly(
            typeof(ApplicationDbContext).Assembly);
    }

    public DbSet<OtpVerification> OtpVerifications { get; set; } = null!;
    public DbSet<RefreshToken> RefreshTokens { get; set; } = null!;
}