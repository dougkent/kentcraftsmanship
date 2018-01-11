using kent.craftsmanship.common.Interfaces;
using kent.craftsmanship.common.Models;
using System;

namespace kent.craftsmanship.services
{
    public class InquiryWriteService : IInquiryWriteService
    {
        private readonly IInquiryDataLayer _inquiryDataLayer;

        public InquiryWriteService(IInquiryDataLayer inquiryDataLayer)
        {
            _inquiryDataLayer = inquiryDataLayer;
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
