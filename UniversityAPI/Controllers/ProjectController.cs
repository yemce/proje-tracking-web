using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UniversityAPI.Data;
using UniversityAPI.Models;

namespace UniversityAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : ControllerBase
    {
        private readonly DataContext _context;

        public ProjectController(DataContext context)
        {
            _context = context;
        }


        [HttpGet]
public async Task<ActionResult<IEnumerable<object>>> GetAllProject()
{
    var projects = await _context.Projects
                                 .Include(p => p.ProjectType)
                                 .Include(p => p.Student)
                                    .ThenInclude(s => s.Department)
                                        .ThenInclude(d => d.Faculty) // Faculty ilişkisini yükleyin
                                 .Include(p => p.Staff)
                                    .ThenInclude(s => s.Department)
                                        .ThenInclude(d => d.Faculty) // Faculty ilişkisini yükleyin
                                 .ToListAsync();

    var projectData = projects.Select(p => new
    {
        p.ProjectId,
        p.ProjectNumber,
        ProjectTypeName = p.ProjectType.ProjectTypeName,
        p.ProjectName,
        p.Description,
        p.Year,
        p.StartDate,
        p.EndDate,
        p.Duration,
        p.CompletionStatus,
        p.Budget,
        StudentName = p.Student != null ? p.Student.FirstName + " " + p.Student.LastName : "",
        StaffName = p.Staff != null ? p.Staff.FirstName + " " + p.Staff.LastName : "",
        DepartmentName = p.Student != null ? p.Student.Department.DepartmentName : 
                         p.Staff != null ? p.Staff.Department != null ? p.Staff.Department.DepartmentName : "" : "", 
        FacultyName = p.Student != null ? p.Student.Department.Faculty.FacultyName : 
                      p.Staff != null ? p.Staff.Department != null ? p.Staff.Department.Faculty.FacultyName : "" : ""
    });

    return Ok(projectData);
}




        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Project>>> GetHero(int id)
        {
            var project = await _context.Projects.FindAsync(id);

            if (project == null)
            {
                return NotFound("Project not found");
            }
            return Ok(project);
        }


        [HttpPost]
        public async Task<ActionResult<IEnumerable<Project>>> AddProject([FromBody] Project project)
        {
            if (project == null)
            {
                return BadRequest(new { error = "Project data is null." });
            }

            try
            {
                _context.Projects.Add(project);
                await _context.SaveChangesAsync();

                return Ok(await _context.Projects.ToListAsync());
            }

            catch (Exception ex)
            {
                return StatusCode(500, new { error = "An error occurred while creating the project.", details = ex.Message });
            }
        }

        [HttpPut]
        [HttpDelete]
        public async Task<ActionResult<IEnumerable<Project>>> DelteProject()
        {
            var projects = await _context.Projects.ToListAsync();
            return Ok(projects);
        }

    }
}
