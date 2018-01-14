using System.ComponentModel.DataAnnotations;

namespace KCS.Core.Models
{
    public class InquirySubmission
    {
        [Required]
        public string Email { get; set; }

        [Required]
        public string Subject { get; set; }

        [Required]
        public string Body { get; set; }
    }
}
