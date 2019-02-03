using KCS.Core.Models;

namespace KCS.Core.Extensions
{
    public static class InquirySubmissionExtensions
    {
        public static AirtableRequest ToAirtableRequest(this InquirySubmission submission)
        {
            return new AirtableRequest
            {
                Email = submission.Email,
                Summary = submission.Subject,
                Description = submission.Body,
            };
        }
    }
}