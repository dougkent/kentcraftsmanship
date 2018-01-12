using kent.craftsmanship.web.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace kent.craftsmanship.web.Controllers
{
    [Route("api/values")]
    public class ValuesController : Controller
    {
        private readonly IOptions<ConfigSettings> _settingsAccessor;

        public ValuesController(IOptions<ConfigSettings> settingsAccessor)
        {
            _settingsAccessor = settingsAccessor;
        }

        [HttpGet("")]
        public IActionResult GetData()
        {
            return Ok(new { env = _settingsAccessor.Value.Env });
        }
    }
}
