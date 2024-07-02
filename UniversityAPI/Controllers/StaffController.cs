using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UniversityAPI.Models;

namespace UniversityAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StaffController : ControllerBase
    {
        [HttpGet]
        [HttpPost]
        [HttpPut]
        [HttpDelete]

        public async Task<ActionResult<IEnumerable<Staff>>> DeleteStaff()
        {
            //var faculties = await _context.Faculties.ToListAsync();

            return Ok("silindi");
        }
    }
}
