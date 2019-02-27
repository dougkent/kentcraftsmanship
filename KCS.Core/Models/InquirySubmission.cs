using System.ComponentModel.DataAnnotations;

namespace KCS.Core.Models
{
    public class InquirySubmission
    {
        [Required]
        public string Email { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Message { get; set; }

        [Required]
        public string Captcha { get; set; }
    }
}
