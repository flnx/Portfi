using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PortfiModels.Data
{
    public class Project
    {
        public Guid Id { get; set; } 
        public string HostedLink { get; set; }
        public string SourceCodeLink { get; set; }
        public ICollection<string> Images { get; set; }
        public string Description { get; set; }
        public ICollection<string> Categories { get; set; }
        
    }

    public enum ProjectCategory
    {
        CSharp = 1,
        Js =2,
        Other = 3,

    }
}
