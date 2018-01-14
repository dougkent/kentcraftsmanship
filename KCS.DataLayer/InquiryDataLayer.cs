using Cassandra;
using Cassandra.Data.Linq;
using KCS.Core.Interfaces;
using KCS.DataLayer.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;

namespace KCS.DataLayer
{
    public class InquiryDataLayer : IInquiryDataLayer
    {
        private readonly IDseContextFactory _dseContextFactory;

        public InquiryDataLayer(IDseContextFactory dseContextFactory)
        {
            _dseContextFactory = dseContextFactory;
        }

        public ICollection<Core.Models.Inquiry> GetAllInquiries()
        {
            using (var dse = _dseContextFactory.GetDseContext())
            {
                return dse.Inquiries
                    .Execute()
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

        public ICollection<Core.Models.Inquiry> GetUnreadInquiries()
        {
            using (var dse = _dseContextFactory.GetDseContext())
            {
                return dse.UnreadInquiries
                    .Execute()
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

        public void MarkInquiryAsRead(Guid inquiryId)
        {
            using (var dse = _dseContextFactory.GetDseContext())
            {
                var updateStmt = dse.Inquiries.Where(i => i.Id == inquiryId)
                    .Select(i => new DataLayer.Models.Inquiry { ReadDate = DateTimeOffset.Now })
                    .Update();

                var deleteStmt = dse.UnreadInquiries.Where(i => i.Id == inquiryId)
                    .Delete();

                dse.ExecuteBatch(updateStmt, deleteStmt);
            }
        }

        public void SubmitInquiry(Core.Models.InquirySubmission inquirySubmission)
        {
            using (var dse = _dseContextFactory.GetDseContext())
            {
                var id = Guid.NewGuid();
                var submitted = DateTimeOffset.Now;

                var inquiryInsertStmt = dse.Inquiries.Insert(new DataLayer.Models.Inquiry
                {
                    Id = id,
                    Email = inquirySubmission.Email,
                    Submitted = submitted,
                    Subject = inquirySubmission.Subject,
                    Body = inquirySubmission.Body,
                });

                var unreadInquiryInsertStmt = dse.UnreadInquiries.Insert(new DataLayer.Models.UnreadInquiry
                {
                    Id = id,
                    Email = inquirySubmission.Email,
                    Submitted = submitted,
                    Subject = inquirySubmission.Subject,
                    Body = inquirySubmission.Body,
                });

                dse.ExecuteBatch(inquiryInsertStmt, unreadInquiryInsertStmt);
            }
        }

        public void DeleteInquiry(Guid inquiryId)
        {
            using (var dse = _dseContextFactory.GetDseContext())
            {
                var inquiryDeleteStmt = dse.Inquiries.Where(i => i.Id == inquiryId)
                    .Delete();

                var unreadInquiryDeleteStmt = dse.UnreadInquiries.Where(i => i.Id == inquiryId)
                    .Delete();

                var batch = new BatchStatement()
                    .Add(inquiryDeleteStmt)
                    .Add(unreadInquiryDeleteStmt);

                dse.ExecuteBatch(inquiryDeleteStmt, unreadInquiryDeleteStmt);
            }
        }
    }
}
