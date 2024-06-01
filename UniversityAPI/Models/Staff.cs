using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UniversityAPI.Models
{
    public class Staff
    {
        public  int StaffId { get; set; }
        [StringLength(11, MinimumLength = 11)]
        public required string TC { get; set; }
        public  string FirstName { get; set; }
        public  string LastName { get; set; }
        public string Email { get; set; }
        public int DepartmentId { get; set; }
        public Department Department { get; set; }
        public ICollection<Project> Projects { get; set; }
    }
}
