namespace UniversityAPI.Models
{
    public class Faculty
    {
        public int FacultyId { get; set; }
        public required string FacultyName { get; set; }
        public ICollection<Department>? Departments { get; set; }
    }
}
