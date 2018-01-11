using System;
using System.Collections;
using System.Collections.Generic;
using kent.craftsmanship.common.Models;

namespace kent.craftsmanship.common.Interfaces
{
    public interface IInquiryDataLayer
    {
        ICollection<Inquiry> GetAllInquiries();

        ICollection<Inquiry> GetUnreadInquiries();

        void MarkInquiryAsRead(Guid inquiryId);

        void SubmitInquiry(Inquiry inquiry);

        void DeleteInquiry(Guid inquiryId);
    }
}
