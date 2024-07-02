using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UniversityAPI.Data;
using UniversityAPI.Models;

namespace UniversityAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FacultyController : ControllerBase
    {
        private readonly DataContext _context;

        public FacultyController(DataContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Faculty>>> GetAllProject()
        {
            var faculties = await _context.Faculties.ToListAsync();
            
            return Ok(faculties);
        }


        [HttpPost]
        public async Task<ActionResult<IEnumerable<Faculty>>> CreateFaculty([FromBody]Faculty faculty)
        {
            if (faculty == null)
            {
                return BadRequest("Faculty cannot be null.");
            }

            // Sadece fakülteyi ekliyoruz, ilişkili verileri değil.
            _context.Faculties.Add(faculty);
            await _context.SaveChangesAsync();

            // Tüm fakülteleri döndürmek için.
            var faculties = await _context.Faculties.ToListAsync();
            return Ok(faculties);
        }
        [HttpPut]
        [HttpDelete]
        public async Task<ActionResult<IEnumerable<Faculty>>> DeleteFaculty()
        {
            var faculties = await _context.Faculties.ToListAsync();

            return Ok(faculties);
        }

    }
}
