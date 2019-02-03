using KCS.Core.Models;
using System;
using System.Threading.Tasks;

namespace KCS.Core.Interfaces
{
    public interface IInquiryWriteService
    {
        Task SubmitInquiryAsync(InquirySubmission inquirySubmission);
    }
}
