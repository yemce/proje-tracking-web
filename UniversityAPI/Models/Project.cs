using System.Text.Json.Serialization;

namespace UniversityAPI.Models
{
    public class Project
    {
        public int ProjectId { get; set; }
        public string ProjectNumber { get; set; }
        //public string ProjectOwner { get; set; }
        public string ProjectName { get; set; }
        public string Description { get; set; }
        public int ProjectType { get; set; }
        public int Year { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int Duration => (EndDate.Year - StartDate.Year) * 12 + EndDate.Month - StartDate.Month;
        public bool CompletionStatus { get; set; }

        public int? StudentId { get; set; }
        [JsonIgnore]
        public Student Student { get; set; }

        public int? StaffId { get; set; }
        [JsonIgnore]
        public Staff Staff { get; set;}


        // Öğrenci sahibi için
        //public int? OwnerId { get; set; }
        //public ProjectOwnerType OwnerType { get; set; } // "Student" or "Staff"

        //public Student StudentOwner { get; set; }

        //// Personel sahibi için
        //public int? StaffOwnerId { get; set; }
        //public Staff StaffOwner { get; set; }

        //public enum ProjectOwnerType
        //{
        //    Student,
        //    Staff
        //}
    }
}
