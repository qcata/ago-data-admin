using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace agro_data_api.Migrations
{
    public partial class addedCrops : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Crops",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    HasBeenTillaged = table.Column<bool>(type: "bit", nullable: false),
                    HasBeenPlanted = table.Column<bool>(type: "bit", nullable: false),
                    HasBeenFertilized = table.Column<bool>(type: "bit", nullable: false),
                    HasBeenWatered = table.Column<bool>(type: "bit", nullable: false),
                    HasBeenHarvested = table.Column<bool>(type: "bit", nullable: false),
                    CropType = table.Column<int>(type: "int", nullable: false),
                    Profit = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Quantity = table.Column<int>(type: "int", nullable: false),
                    Updated = table.Column<DateTime>(type: "datetime2", nullable: false),
                    LandId = table.Column<int>(type: "int", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Crops", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Crops_Lands_LandId",
                        column: x => x.LandId,
                        principalTable: "Lands",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Crops_LandId",
                table: "Crops",
                column: "LandId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Crops");
        }
    }
}
