using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using mixup.Models;

namespace mixup.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class DBController : ControllerBase
    {

        private readonly ILogger<WeatherForecastController> _logger;
        private AppSettings _appSettings;

        public DBController(ILogger<WeatherForecastController> logger, AppSettings appSettings)
        {
            _logger = logger;
            _appSettings = appSettings;
        }

        [HttpGet]
        public string Get()
        {
            var db = _appSettings.DBFile;
            var result = System.IO.File.ReadAllText(db);
            return result;
        }
    }
}
