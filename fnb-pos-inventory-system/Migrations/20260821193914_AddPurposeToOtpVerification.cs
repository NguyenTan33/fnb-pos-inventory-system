using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace fnb_pos_inventory_system.Migrations
{
    /// <inheritdoc />
    public partial class AddPurposeToOtpVerification : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Purpose",
                table: "OtpVerifications",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Purpose",
                table: "OtpVerifications");
        }
    }
}
