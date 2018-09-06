using Dse.Data.Linq;
using System;

namespace KCS.DataLayer.Models
{
    public class Inquiry
    {
        public Guid Id { get; set; }

        public string Email { get; set; }

        public DateTimeOffset Submitted { get; set; }

        public string Subject { get; set; }

        public string Body { get; set; }

        public DateTimeOffset? ReadDate { get; set; }
    }
}
