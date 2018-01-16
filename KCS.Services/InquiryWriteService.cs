using KCS.Core.Interfaces;
using KCS.Core.Models;
using System;
using System.Threading.Tasks;

namespace KCS.Services
{
    public class InquiryWriteService : IInquiryWriteService
    {
        private readonly IInquiryDataLayer _inquiryDataLayer;

        public InquiryWriteService(IInquiryDataLayer inquiryDataLayer)
        {
            _inquiryDataLayer = inquiryDataLayer;
        }
        
        public async Task MarkInquiryAsReadAsync(Guid inquiryId)
        {
            if (inquiryId == Guid.Empty) throw new ArgumentException("Inquiry Id is required.");

            await _inquiryDataLayer.MarkInquiryAsReadAsync(inquiryId);
        }

        public async Task SubmitInquiryAsync(InquirySubmission inquirySubmission)
        {
            if (inquirySubmission == null) throw new ArgumentException("Inquiry Submission is required.");

            await _inquiryDataLayer.SubmitInquiryAsync(inquirySubmission);
        }

        public async Task DeleteInquiryAsync(Guid inquiryId)
        {
            if (inquiryId == Guid.Empty) throw new ArgumentException("Inquiry Id is required.");

            await _inquiryDataLayer.DeleteInquiryAsync(inquiryId);
        }
    }
}
