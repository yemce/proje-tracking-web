//using Microsoft.EntityFrameworkCore;
//using Microsoft.EntityFrameworkCore.Metadata;
//using Microsoft.EntityFrameworkCore.Metadata.Builders;
//using System.Reflection.Emit;
//using UniversityAPI.Models;

//namespace UniversityAPI.Data.Config
//{
//    public class ProjectConfig : IEntityTypeConfiguration<Project>
//    {
//        public void Configure(EntityTypeBuilder<Project> builder)
//        {

//            // Project-Student relationship
//            builder
//                .HasOne(p => p.StudentOwner)
//                .WithMany(s => s.Projects)
//                //.HasForeignKey(p => p.OwnerId)
//                .OnDelete(DeleteBehavior.Cascade)
//                .HasConstraintName("FK_Project_StudentOwner")
//                .IsRequired(false);

//            // Project-Staff relationship
//           builder
//                .HasOne(p => p.StaffOwner)
//                .WithMany(s => s.Projects)
//                //.HasForeignKey(p => p.OwnerId)
//                .OnDelete(DeleteBehavior.Cascade)
//                .HasConstraintName("FK_Project_StaffOwner")
//                .IsRequired(false);

//            // Discriminator for Project ownership
//            builder
//                .HasDiscriminator<string>("OwnerType")
//                .HasValue<Student>("Student")
//                .HasValue<Staff>("Staff");
//        }
//    }
//}
