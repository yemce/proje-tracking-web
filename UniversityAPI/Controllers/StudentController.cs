using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UniversityAPI.Models;

namespace UniversityAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        [HttpGet]
        [HttpPost]
        [HttpPut]
        [HttpDelete]

        public async Task<ActionResult<IEnumerable<Student>>> DeleteStudent()
        {
            //var faculties = await _context.Faculties.ToListAsync();

            return Ok("silindi");
        }
    }
}
