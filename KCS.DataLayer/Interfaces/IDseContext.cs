using Cassandra;
using Cassandra.Data.Linq;
using KCS.DataLayer.Models;
using System;
using System.Collections.Generic;

namespace KCS.DataLayer.Interfaces
{
    public interface IDseContext : IDisposable
    {
        Table<Inquiry> Inquiries { get; }

        Table<UnreadInquiry> UnreadInquiries { get; }

        void ExecuteBatch(params Statement[] statements);
    }
}
