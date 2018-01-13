using System;

namespace KCS.Core.Models
{
    public class Inquiry
    {
        public Guid Id { get; set; }

        public string Email { get; set; }

        public DateTime Submitted { get; set; }

        public string Subject { get; set; }

        public string Body { get; set; }

        public DateTime? Read { get; set; }
    }
}
