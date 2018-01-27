using Cassandra;
using Cassandra.Data.Linq;
using KCS.DataLayer.Models;
using System;
using System.Threading.Tasks;

namespace KCS.DataLayer.Interfaces
{
    public interface ICassandraContext : IDisposable
    {
        Table<Inquiry> Inquiries { get; }

        Table<UnreadInquiry> UnreadInquiries { get; }

        Task ExecuteBatchAsync(params Statement[] statements);
    }
}
