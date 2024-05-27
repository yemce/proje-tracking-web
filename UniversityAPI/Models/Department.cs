namespace UniversityAPI.Models
{
    public class Department
    {
        public int DepartmentId { get; set; }
        public required string DepartmentName { get; set; }
        public int FacultyId { get; set; }
        public Faculty Faculty { get; set; }
        public ICollection<Student> Students { get; set; }
        public ICollection<Staff> StaffMembers { get; set; }
    }
}
