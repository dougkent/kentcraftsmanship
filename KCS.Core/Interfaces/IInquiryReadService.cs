using KCS.Core.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace KCS.Core.Interfaces
{
    public interface IInquiryReadService
    {
        Task<ICollection<Inquiry>> GetAllInquiriesAsync();

        Task<ICollection<Inquiry>> GetUnreadInquiriesAsync();
    }
}
