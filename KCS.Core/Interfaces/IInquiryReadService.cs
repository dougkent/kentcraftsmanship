using KCS.Core.Models;
using System.Collections.Generic;

namespace KCS.Core.Interfaces
{
    public interface IInquiryReadService
    {
        ICollection<Inquiry> GetAllInquiries();

        ICollection<Inquiry> GetUnreadInquiries();
    }
}
