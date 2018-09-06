using KCS.Core.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace KCS.Core.Interfaces
{
    public interface IInquiryDataLayer
    {
        Task<ICollection<Inquiry>> GetAllInquiriesAsync();

        Task<ICollection<Inquiry>> GetUnreadInquiriesAsync();

        Task MarkInquiryAsReadAsync(Guid inquiryId);

        Task SubmitInquiryAsync(InquirySubmission inquirySubmission);

        Task DeleteInquiryAsync(Guid inquiryId);
    }
}
