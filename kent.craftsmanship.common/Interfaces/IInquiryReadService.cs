using kent.craftsmanship.common.Models;
using System.Collections.Generic;

namespace kent.craftsmanship.common.Interfaces
{
    public interface IInquiryReadService
    {
        ICollection<Inquiry> GetAllInquiries();

        ICollection<Inquiry> GetUnreadInquiries();
    }
}
