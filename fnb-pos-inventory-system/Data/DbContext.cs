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

        // Prevent duplicate unit symbols at database level
        builder.Entity<Unit>()
            .HasIndex(x => x.Symbol)
            .IsUnique();

        // Prevent duplicate inventory item codes at database level
        builder.Entity<InventoryItem>()
            .HasIndex(x => x.Code)
            .IsUnique();

        // Configure InventoryItem -> Unit relationship
        builder.Entity<Warehouse>()
            .HasOne(x => x.Branch)
            .WithMany(x => x.Warehouses)
            .HasForeignKey(x => x.BranchId)
            .OnDelete(DeleteBehavior.Restrict);

        // Prevent duplicate branch codes at database level
        builder.Entity<Branch>()
            .HasIndex(x => x.Code)
            .IsUnique();

        // Prevent duplicate warehouse codes at database level
        builder.Entity<Warehouse>()
            .HasIndex(x => x.Code)
            .IsUnique();

        // Configure InventoryBatch -> InventoryItem relationship
        builder.Entity<InventoryBatch>()
            .HasOne(x => x.InventoryItem)
            .WithMany()
            .HasForeignKey(x => x.InventoryItemId)
            .OnDelete(DeleteBehavior.Restrict);

        // Configure InventoryBatch -> Warehouse relationship
        builder.Entity<InventoryBatch>()
            .HasOne(x => x.Warehouse)
            .WithMany()
            .HasForeignKey(x => x.WarehouseId)
            .OnDelete(DeleteBehavior.Restrict);

        // Configure InventoryTransaction -> InventoryBatch relationship
        builder.Entity<InventoryTransaction>()
            .HasOne(x => x.InventoryBatch)
            .WithMany()
            .HasForeignKey(x => x.InventoryBatchId)
            .OnDelete(DeleteBehavior.Restrict);

        // Configure InventoryTransaction -> Account relationship
        builder.Entity<InventoryTransaction>()
            .HasOne(x => x.CreatedByAccount)
            .WithMany()
            .HasForeignKey(x => x.CreatedByAccountId)
            .OnDelete(DeleteBehavior.Restrict);

        // Apply IEntityTypeConfiguration classes in this assembly
        builder.ApplyConfigurationsFromAssembly(
            typeof(ApplicationDbContext).Assembly);
    }

    public DbSet<OtpVerification> OtpVerifications { get; set; } = null!;
    public DbSet<RefreshToken> RefreshTokens { get; set; } = null!;
    public DbSet<Unit> Units { get; set; } = null!;
    public DbSet<InventoryItem> InventoryItems { get; set; } = null!;
    public DbSet<Branch> Branches { get; set; } = null!;
    public DbSet<Warehouse> Warehouses { get; set; } = null!;
    public DbSet<InventoryBatch> InventoryBatches { get; set; } = null!;
    public DbSet<InventoryTransaction> InventoryTransactions { get; set; } = null!;
}