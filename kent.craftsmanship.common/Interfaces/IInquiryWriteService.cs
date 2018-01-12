using kent.craftsmanship.core.Models;
using System;

namespace kent.craftsmanship.core.Interfaces
{
    public interface IInquiryWriteService
    {
        void MarkInquiryAsRead(Guid inquiryId);

        void SubmitInquiry(Inquiry inquiry);

        void DeleteInquiry(Guid inquiryId);
    }
}
