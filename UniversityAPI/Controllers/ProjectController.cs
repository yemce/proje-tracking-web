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
        public async Task<ActionResult<IEnumerable<Project>>> GetAllProject()
        {
            var projects = await _context.Projects.ToListAsync();

            return Ok(projects);
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
        public async Task<ActionResult<IEnumerable<Project>>> AddProject([FromBody]Project project)
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

    }
}
