using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using mixup.Models;
using System;
using System.Linq;
using System.Text.Json;

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
        private DBFile LoadDBFile()
        {
            try
            {
                _logger.LogDebug("Loading File");
                var db = _appSettings.DBFile;
                var result = System.IO.File.ReadAllText(db);
                var dbFile = JsonSerializer.Deserialize<DBFile>(result);
                return dbFile;
            }
            catch (Exception e)
            {
                _logger.LogError("Failed to load file", e);
                throw e;
            }
        }
        private void WriteDBFile(DBFile data)
        {
            try
            {
                _logger.LogDebug("Writing to file");
                var db = _appSettings.DBFile;
                var dataSerialized = JsonSerializer.Serialize(data);
                System.IO.File.WriteAllText(db, dataSerialized);
            }
            catch (Exception e)
            {
                _logger.LogError("Failed to write to file", e);
                throw e;
            }
        }
        [HttpGet]
        public DBFile Get()
        {
            try
            {
                _logger.LogDebug("Executing Get call");
                var data = LoadDBFile();
                return data;
            }
            catch (Exception e)
            {
                _logger.LogError("Failed get call", e);
                throw e;
            }
        }
        [HttpDelete]
        public string Delete(int ItemId)
        {
            try
            {
                _logger.LogDebug("Executing Delete on", ItemId);
                var data = LoadDBFile();
                var itemToDelete = data.Items.Find(x => x.Id == ItemId);
                data.Items.Remove(itemToDelete);
                WriteDBFile(data);
                return "Deleted";
            }
            catch (Exception e)
            {
                _logger.LogError("Failed to delete", e);
                throw e;
            }
        }
        [HttpPut]
        public string Update(Items i)
        {
            try
            {
                _logger.LogDebug("Executing update on", i.Id);
                var data = LoadDBFile();
                var itemToUpdate = data.Items.FirstOrDefault(x => x.Id == i.Id);
                itemToUpdate.CategoryId = i.CategoryId;
                itemToUpdate.Site = i.Site;
                itemToUpdate.Name = i.Name;
                WriteDBFile(data);
                return "Updated";
            }
            catch (Exception e)
            {
                _logger.LogError("Failed to update", e);
                throw e;
            }
        }
        [HttpPost]
        public string Create(Items i)
        {
            try
            {
                _logger.LogDebug("Executing create on", i.Id);
                var data = LoadDBFile();
                var maxId = data.Items.Max(x => x.Id) + 1;
                i.Id = maxId;
                data.Items.Add(i);
                WriteDBFile(data);
                return "Updated";
            }
            catch (Exception e)
            {
                _logger.LogError("Failed to create", e);
                throw e;
            }
        }
    }
}
