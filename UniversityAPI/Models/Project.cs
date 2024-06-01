 using System.Text.Json.Serialization;

namespace UniversityAPI.Models
{
    public class Project
    {
        public int ProjectId { get; set; }
        public string ProjectNumber { get; set; }
        // ForeignKey ilişkisi
        public int ProjectTypeId { get; set; }
        [JsonIgnore]
        public ProjectType ProjectType { get; set; }
        public string ProjectName { get; set; }
        public string Description { get; set; }
        public int Year { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int Duration => (EndDate.Year - StartDate.Year) * 12 + EndDate.Month - StartDate.Month;
        public bool CompletionStatus { get; set; }
        public decimal Budget { get; set; }

         public int? StudentId { get; set; }
        [JsonIgnore]
        public Student Student { get; set; }

        public int? StaffId { get; set; }
        [JsonIgnore]
        public Staff Staff { get; set;}

    }
}
