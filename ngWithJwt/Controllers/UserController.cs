using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ngWithJwt.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ngWithJwt.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        [HttpGet]
        [Route("GetUserData")]
        [Authorize(Policy = Policies.User)]
        public IActionResult GetUserData()
        {
            return Ok("This is an normal user");
        }

        [HttpGet]
        [Route("GetAdminData")]
        [Authorize(Policy = Policies.Admin)]
        public IActionResult GetAdminData()
        {
            return Ok("This is an Admin user");
        }
    }
}
