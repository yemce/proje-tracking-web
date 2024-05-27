namespace UniversityAPI.Models
{
    public class Student
    {
        public   int StudentId { get; set; }
        public required string FirstName { get; set; }
        public required string LastName { get; set; }
        public string Email { get; set; }
        public int DepartmentId { get; set; }
        public Department Department { get; set; }
        public ICollection<Project> Projects { get; set; }
    }
}
