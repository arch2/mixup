using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using mixup.Models;

namespace mixup.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;
        private AppSettings _appSettings;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, AppSettings appSettings)
        {
            _logger = logger;
            _appSettings = appSettings;
        }

        [HttpGet]
        //public IEnumerable<WeatherForecast> Get()
        public string Get()
        {
            //var rng = new Random();
            //return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            //{
            //    Date = DateTime.Now.AddDays(index),
            //    TemperatureC = rng.Next(-20, 55),
            //    Summary = Summaries[rng.Next(Summaries.Length)]
            //})
            //.ToArray();
            //var db = @"D:\Sites\fusion\assets\jDB.json";
            var db = _appSettings.DBFile;
            //FileStream fileStream = new FileStream(db, FileMode.Open);
            //var result = new StringBuilder();
            //using (StreamReader reader = new StreamReader(fileStream))
            //{
            //    string line = reader.ReadLine();
            //    result.Append(line);
            //}
            //return result.ToString();
            var result = System.IO.File.ReadAllText(db);
            return result;
        }
    }
}
