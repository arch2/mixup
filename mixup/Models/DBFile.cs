using System.Collections.Generic;
namespace mixup.Models
{
    public class DBFile
    {
        public APIInfo API { get; set; }
        public List<Category> Categories { get; set; }
        public List<Items> Items { get; set; }
    }
}