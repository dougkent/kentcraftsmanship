using kent.craftsmanship.core.Models;
using System.Collections.Generic;

namespace kent.craftsmanship.core.Interfaces
{
    public interface IInquiryReadService
    {
        ICollection<Inquiry> GetAllInquiries();

        ICollection<Inquiry> GetUnreadInquiries();
    }
}
