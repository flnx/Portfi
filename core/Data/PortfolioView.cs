using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.JavaScript;
using System.Text;
using System.Threading.Tasks;

namespace PortfiModels.Data
{
    public class PortfolioView
    {
        public Guid Id { get; set; }
        public string UserId { get; set; }
        public Guid PortfolioId { get; set; }
        public bool IsActive => DateTime.UtcNow < ExpirationDate;
        public DateTime LastOccurredDate { get; set; }
        public DateTime ExpirationDate => LastOccurredDate.AddDays(90);

    }
}
