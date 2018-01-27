using Dse;
using Dse.Data.Linq;
using Dse.Mapping;
using KCS.DataLayer.Interfaces;
using KCS.DataLayer.Models;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace KCS.DataLayer
{
    public class DseContext : IDseContext
    {
        private readonly IDseCluster _cluster;
        private readonly IDseSession _session;

        private readonly Table<Inquiry> _inquiries;

        public Table<Inquiry> Inquiries { get { return _inquiries; } }

        private readonly Table<UnreadInquiry> _unreadInquiries;

        public Table<UnreadInquiry> UnreadInquiries { get { return _unreadInquiries; } }

        static DseContext()
        {
            MappingConfiguration.Global.Define(
               new Map<Inquiry>()
                  .TableName("inquiries")
                  .PartitionKey(u => u.Id)
                  .Column(u => u.ReadDate, cm => cm.WithName("read_date")),
               new Map<UnreadInquiry>()
                  .TableName("unread_inquiries")
                  .PartitionKey(u => u.Id));
        }

        public DseContext()
        {
            _cluster = DseCluster.Builder()
                .AddContactPoint("127.0.0.1")
                .Build();

            _session = _cluster.Connect("kent_craftsmanship");
            _inquiries = new Table<Inquiry>(_session);
            _unreadInquiries = new Table<UnreadInquiry>(_session);
        }

        public void Dispose()
        {
            _session.Dispose();
            _cluster.Dispose();
        }

        public async Task ExecuteBatchAsync(params Statement[] statements)
        {
            var batch = new BatchStatement();

            foreach (var statement in statements)
            {
                batch.Add(statement);
            }

            await _session.ExecuteAsync(batch);
        }
    }
}
