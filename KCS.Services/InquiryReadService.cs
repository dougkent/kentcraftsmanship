using KCS.Core.Interfaces;
using KCS.Core.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace KCS.Services
{
    public class InquiryReadService : IInquiryReadService
    {
        private readonly IInquiryDataLayer _inquiryDataLayer;

        public InquiryReadService(IInquiryDataLayer inquiryDataLayer)
        {
            _inquiryDataLayer = inquiryDataLayer;
        }

        public async Task<ICollection<Inquiry>> GetAllInquiriesAsync()
        {
            return await _inquiryDataLayer.GetAllInquiriesAsync();
        }

        public async Task<ICollection<Inquiry>> GetUnreadInquiriesAsync()
        {
            return await _inquiryDataLayer.GetUnreadInquiriesAsync();
        }
    }
}
