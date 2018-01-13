using System;
using System.Collections;
using System.Collections.Generic;
using KCS.Core.Models;

namespace KCS.Core.Interfaces
{
    public interface IInquiryDataLayer
    {
        ICollection<Inquiry> GetAllInquiries();

        ICollection<Inquiry> GetUnreadInquiries();

        void MarkInquiryAsRead(Guid inquiryId);

        void SubmitInquiry(InquirySubmission inquirySubmission);

        void DeleteInquiry(Guid inquiryId);
    }
}
