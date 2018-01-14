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
            if (inquiryId == Guid.Empty) throw new ArgumentException("Inquiry Id is required.");

            _inquiryDataLayer.MarkInquiryAsRead(inquiryId);
        }

        public void SubmitInquiry(InquirySubmission inquirySubmission)
        {
            if (inquirySubmission == null) throw new ArgumentException("Inquiry Submission is required.");

            _inquiryDataLayer.SubmitInquiry(inquirySubmission);
        }

        public void DeleteInquiry(Guid inquiryId)
        {
            if (inquiryId == Guid.Empty) throw new ArgumentException("Inquiry Id is required.");

            _inquiryDataLayer.DeleteInquiry(inquiryId);
        }
    }
}
