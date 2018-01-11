using kent.craftsmanship.common.Interfaces;
using kent.craftsmanship.common.Models;
using System;
using System.Collections.Generic;

namespace kent.craftsmanship.datalayer
{
    public class InquiryDataLayer : IInquiryDataLayer
    {
        public ICollection<Inquiry> GetAllInquiries()
        {
            throw new NotImplementedException();
        }

        public ICollection<Inquiry> GetUnreadInquiries()
        {
            throw new NotImplementedException();
        }

        public void MarkInquiryAsRead(Guid inquiryId)
        {
            throw new NotImplementedException();
        }

        public void SubmitInquiry(Inquiry inquiry)
        {
            throw new NotImplementedException();
        }

        public void DeleteInquiry(Guid inquiryId)
        {
            throw new NotImplementedException();
        }
    }
}
