using kent.craftsmanship.common.Interfaces;
using kent.craftsmanship.common.Models;
using System;
using System.Collections.Generic;

namespace kent.craftsmanship.services
{
    public class InquiryReadService : IInquiryReadService
    {
        private readonly IInquiryDataLayer _inquiryDataLayer;

        public InquiryReadService(IInquiryDataLayer inquiryDataLayer)
        {
            _inquiryDataLayer = inquiryDataLayer;
        }

        public ICollection<Inquiry> GetAllInquiries()
        {
            return _inquiryDataLayer.GetAllInquiries();
        }

        public ICollection<Inquiry> GetUnreadInquiries()
        {
            return _inquiryDataLayer.GetUnreadInquiries();
        }

        public void MarkInquiryAsRead(Guid inquiryId)
        {
            _inquiryDataLayer.MarkInquiryAsRead(inquiryId);
        }

        public void SubmitInquiry(Inquiry inquiry)
        {
            _inquiryDataLayer.SubmitInquiry(inquiry);
        }

        public void DeleteInquiry(Guid inquiryId)
        {
            _inquiryDataLayer.DeleteInquiry(inquiryId);
        }
    }
}
