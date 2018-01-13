using KCS.Core.Models;
using System;

namespace KCS.Core.Interfaces
{
    public interface IInquiryWriteService
    {
        void MarkInquiryAsRead(Guid inquiryId);

        void SubmitInquiry(InquirySubmission inquirySubmission);

        void DeleteInquiry(Guid inquiryId);
    }
}
