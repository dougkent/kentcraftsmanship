using System;

namespace KCS.DataLayer.Models
{
    public class UnreadInquiry
    {
        public Guid Id { get; set; }

        public string Email { get; set; }

        public DateTimeOffset Submitted { get; set; }

        public string Subject { get; set; }

        public string Body { get; set; }
    }
}
