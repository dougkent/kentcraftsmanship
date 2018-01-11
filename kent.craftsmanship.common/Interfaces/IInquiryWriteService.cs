using kent.craftsmanship.common.Models;
using System;

namespace kent.craftsmanship.common.Interfaces
{
    public interface IInquiryWriteService
    {
        void MarkInquiryAsRead(Guid inquiryId);

        void SubmitInquiry(Inquiry inquiry);

        void DeleteInquiry(Guid inquiryId);
    }
}
