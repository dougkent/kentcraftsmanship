using Cassandra;
using Cassandra.Data.Linq;
using Cassandra.Mapping;
using KCS.Core.Interfaces;
using KCS.Core.Models;
using KCS.DataLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace KCS.DataLayer
{
    public class InquiryDataLayer : IInquiryDataLayer
    {
        public InquiryDataLayer()
        {
            MappingConfiguration.Global.Define(
               new Map<DataLayer.Models.Inquiry>()
                  .TableName("inquiries")
                  .PartitionKey(u => u.Id)
                  .Column(u => u.ReadDate, cm => cm.WithName("read_date")),
               new Map<DataLayer.Models.UnreadInquiry>()
                  .TableName("unread_inquiries")
                  .PartitionKey(u => u.Id));
        }

        private ISession GetSession()
        {
            Cluster cluster = Cluster.Builder().AddContactPoint("127.0.0.1").Build();
            return cluster.Connect("kent_craftsmanship");
        }

        public ICollection<Core.Models.Inquiry> GetAllInquiries()
        {
            var session = GetSession();

            var inquiries = new Table<DataLayer.Models.Inquiry>(session)
                .Execute();

            return inquiries.Select(i => new Core.Models.Inquiry
            {
                Id = i.Id,
                Email = i.Email,
                Submitted = i.Submitted.DateTime,
                Subject = i.Subject,
                Body = i.Body,
                Read = i.ReadDate?.DateTime,
            }).ToList();
        }

        public ICollection<Core.Models.Inquiry> GetUnreadInquiries()
        {
            var session = GetSession();

            var inquiries = new Table<DataLayer.Models.UnreadInquiry>(session)
                .Execute();

            return inquiries.Select(i => new Core.Models.Inquiry
            {
                Id = i.Id,
                Email = i.Email,
                Submitted = i.Submitted.DateTime,
                Subject = i.Subject,
                Body = i.Body,
            }).ToList();
        }

        public void MarkInquiryAsRead(Guid inquiryId)
        {
            var session = GetSession();

            var inquiries = new Table<DataLayer.Models.Inquiry>(session);
            var unreadInquiries = new Table<DataLayer.Models.UnreadInquiry>(session);

            var updateStmt = inquiries.Where(i => i.Id == inquiryId)
                .Select(i => new DataLayer.Models.Inquiry { ReadDate = DateTimeOffset.Now })
                .Update();

            var deleteStmt = unreadInquiries.Where(i => i.Id == inquiryId)
                .Delete();

            var batch = new BatchStatement()
                .Add(updateStmt)
                .Add(deleteStmt);

            session.Execute(batch);
        }

        public void SubmitInquiry(Core.Models.InquirySubmission inquirySubmission)
        {
            var session = GetSession();

            var inquiries = new Table<DataLayer.Models.Inquiry>(session);
            var unreadInquiries = new Table<DataLayer.Models.UnreadInquiry>(session);

            var id = Guid.NewGuid();
            var submitted = DateTimeOffset.Now;

            var inquiryInsertStmt = inquiries.Insert(new DataLayer.Models.Inquiry
            {
                Id = id,
                Email = inquirySubmission.Email,
                Submitted = submitted,
                Subject = inquirySubmission.Subject,
                Body = inquirySubmission.Body,
            });

            var unreadInquiryInsertStmt = unreadInquiries.Insert(new DataLayer.Models.UnreadInquiry
            {
                Id = id,
                Email = inquirySubmission.Email,
                Submitted = submitted,
                Subject = inquirySubmission.Subject,
                Body = inquirySubmission.Body,
            });

            var batch = new BatchStatement()
                .Add(inquiryInsertStmt)
                .Add(unreadInquiryInsertStmt);

            session.Execute(batch);
        }

        public void DeleteInquiry(Guid inquiryId)
        {
            var session = GetSession();

            var inquiries = new Table<DataLayer.Models.Inquiry>(session);
            var unreadInquiries = new Table<DataLayer.Models.UnreadInquiry>(session);

            var inquiryDeleteStmt = inquiries.Where(i => i.Id == inquiryId)
                .Delete();

            var unreadInquiryDeleteStmt = unreadInquiries.Where(i => i.Id == inquiryId)
                .Delete();

            var batch = new BatchStatement()
                .Add(inquiryDeleteStmt)
                .Add(unreadInquiryDeleteStmt);

            session.Execute(batch);
        }
    }
}
