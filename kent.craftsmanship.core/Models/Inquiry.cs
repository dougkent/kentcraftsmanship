using System;

namespace kent.craftsmanship.core.Models
{
    public class Inquiry
    {
        public Guid Id { get; set; }

        public string Email { get; set; }

        public string Body { get; set; }

        public DateTime Created { get; set; }

        public DateTime? Read { get; set; }
    }
}
