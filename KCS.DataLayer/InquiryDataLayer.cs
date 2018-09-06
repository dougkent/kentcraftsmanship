using Cassandra.Data.Linq;
using KCS.Core.Interfaces;
using KCS.DataLayer.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KCS.DataLayer
{
    public class InquiryDataLayer : IInquiryDataLayer
    {
        private readonly ICassandraContextFactory _cassandraContextFactory;

        public InquiryDataLayer(ICassandraContextFactory cassandraContextFactory)
        {
            _cassandraContextFactory = cassandraContextFactory;
        }

        public async Task<ICollection<Core.Models.Inquiry>> GetAllInquiriesAsync()
        {
            using (var cassandra = _cassandraContextFactory.GetDseContext())
            {
                return (await cassandra.Inquiries.ExecuteAsync())
                    .Select(i => new Core.Models.Inquiry
                    {
                        Id = i.Id,
                        Email = i.Email,
                        Submitted = i.Submitted.DateTime,
                        Subject = i.Subject,
                        Body = i.Body,
                        Read = i.ReadDate?.DateTime,
                    }).ToList();
            }
        }

        public async Task<ICollection<Core.Models.Inquiry>> GetUnreadInquiriesAsync()
        {
            using (var cassandra = _cassandraContextFactory.GetDseContext())
            {
                return (await cassandra.UnreadInquiries.ExecuteAsync())
                    .Select(i => new Core.Models.Inquiry
                    {
                        Id = i.Id,
                        Email = i.Email,
                        Submitted = i.Submitted.DateTime,
                        Subject = i.Subject,
                        Body = i.Body,
                    }).ToList();
            }
        }

        public async Task MarkInquiryAsReadAsync(Guid inquiryId)
        {
            using (var cassandra = _cassandraContextFactory.GetDseContext())
            {
                var updateStmt = cassandra.Inquiries.Where(i => i.Id == inquiryId)
                    .Select(i => new DataLayer.Models.Inquiry { ReadDate = DateTimeOffset.Now })
                    .Update();

                var deleteStmt = cassandra.UnreadInquiries.Where(i => i.Id == inquiryId)
                    .Delete();

                await cassandra.ExecuteBatchAsync(updateStmt, deleteStmt);
            }
        }

        public async Task SubmitInquiryAsync(Core.Models.InquirySubmission inquirySubmission)
        {
            using (var cassandra = _cassandraContextFactory.GetDseContext())
            {
                var id = Guid.NewGuid();
                var submitted = DateTimeOffset.Now;

                var inquiryInsertStmt = cassandra.Inquiries.Insert(new DataLayer.Models.Inquiry
                {
                    Id = id,
                    Email = inquirySubmission.Email,
                    Submitted = submitted,
                    Subject = inquirySubmission.Subject,
                    Body = inquirySubmission.Body,
                });

                var unreadInquiryInsertStmt = cassandra.UnreadInquiries.Insert(new DataLayer.Models.UnreadInquiry
                {
                    Id = id,
                    Email = inquirySubmission.Email,
                    Submitted = submitted,
                    Subject = inquirySubmission.Subject,
                    Body = inquirySubmission.Body,
                });

                await cassandra.ExecuteBatchAsync(inquiryInsertStmt, unreadInquiryInsertStmt);
            }
        }

        public async Task DeleteInquiryAsync(Guid inquiryId)
        {
            using (var cassandra = _cassandraContextFactory.GetDseContext())
            {
                var inquiryDeleteStmt = cassandra.Inquiries.Where(i => i.Id == inquiryId)
                    .Delete();

                var unreadInquiryDeleteStmt = cassandra.UnreadInquiries.Where(i => i.Id == inquiryId)
                    .Delete();

                await cassandra.ExecuteBatchAsync(inquiryDeleteStmt, unreadInquiryDeleteStmt);
            }
        }
    }
}
