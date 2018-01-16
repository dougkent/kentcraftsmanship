using KCS.Core.Models;
using System;
using System.Threading.Tasks;

namespace KCS.Core.Interfaces
{
    public interface IInquiryWriteService
    {
        Task MarkInquiryAsReadAsync(Guid inquiryId);

        Task SubmitInquiryAsync(InquirySubmission inquirySubmission);

        Task DeleteInquiryAsync(Guid inquiryId);
    }
}
