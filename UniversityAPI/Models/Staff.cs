namespace UniversityAPI.Models
{
    public class Staff
    {
        public  int StaffId { get; set; }
        public  string FirstName { get; set; }
        public  string LastName { get; set; }
        public string Email { get; set; }
        public int DepartmentId { get; set; }
        public Department Department { get; set; }
        public ICollection<Project> Projects { get; set; }
    }
}
