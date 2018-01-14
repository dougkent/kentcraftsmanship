using Cassandra;
using Cassandra.Data.Linq;
using Cassandra.Mapping;
using KCS.DataLayer.Interfaces;
using KCS.DataLayer.Models;
using System.Collections.Generic;

namespace KCS.DataLayer
{
    public class DseContext : IDseContext
    {
        private readonly ICluster _cluster;
        private readonly ISession _session;

        private readonly Table<Inquiry> _inquiries;

        public Table<Inquiry> Inquiries { get { return _inquiries; } }

        private readonly Table<UnreadInquiry> _unreadInquiries;

        public Table<UnreadInquiry> UnreadInquiries { get { return _unreadInquiries; } }

        public DseContext()
        {
            MappingConfiguration.Global.Define(
               new Map<Inquiry>()
                  .TableName("inquiries")
                  .PartitionKey(u => u.Id)
                  .Column(u => u.ReadDate, cm => cm.WithName("read_date")),
               new Map<UnreadInquiry>()
                  .TableName("unread_inquiries")
                  .PartitionKey(u => u.Id));

            _cluster = Cassandra.Cluster.Builder().AddContactPoint("127.0.0.1").Build();
            _session = _cluster.Connect("kent_craftsmanship");
            _inquiries = new Table<Inquiry>(_session);
            _unreadInquiries = new Table<UnreadInquiry>(_session);
        }

        public void Dispose()
        {
            _session.Dispose();
            _cluster.Dispose();
        }

        public void ExecuteBatch(params Statement[] statements)
        {
            var batch = new BatchStatement();

            foreach (var statement in statements)
            {
                batch.Add(statement);
            }

            _session.Execute(batch);
        }
    }
}
