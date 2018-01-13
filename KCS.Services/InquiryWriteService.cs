using KCS.Core.Interfaces;
using KCS.Core.Models;
using System;

namespace KCS.Services
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

        public void SubmitInquiry(InquirySubmission inquirySubmission)
        {
            _inquiryDataLayer.SubmitInquiry(inquirySubmission);
        }

        public void DeleteInquiry(Guid inquiryId)
        {
            _inquiryDataLayer.DeleteInquiry(inquiryId);
        }
    }
}
