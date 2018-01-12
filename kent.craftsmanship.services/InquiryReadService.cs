using kent.craftsmanship.core.Interfaces;
using kent.craftsmanship.core.Models;
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
    }
}
