using Dse.Data.Linq;
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
        private readonly IDseContextFactory _dseContextFactory;

        public InquiryDataLayer(IDseContextFactory dseContextFactory)
        {
            _dseContextFactory = dseContextFactory;
        }

        public async Task<ICollection<Core.Models.Inquiry>> GetAllInquiriesAsync()
        {
            using (var dse = _dseContextFactory.GetDseContext())
            {
                return (await dse.Inquiries.ExecuteAsync())
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
            using (var dse = _dseContextFactory.GetDseContext())
            {
                return (await dse.UnreadInquiries.ExecuteAsync())
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
            using (var dse = _dseContextFactory.GetDseContext())
            {
                var updateStmt = dse.Inquiries.Where(i => i.Id == inquiryId)
                    .Select(i => new DataLayer.Models.Inquiry { ReadDate = DateTimeOffset.Now })
                    .Update();

                var deleteStmt = dse.UnreadInquiries.Where(i => i.Id == inquiryId)
                    .Delete();

                await dse.ExecuteBatchAsync(updateStmt, deleteStmt);
            }
        }

        public async Task SubmitInquiryAsync(Core.Models.InquirySubmission inquirySubmission)
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

                await dse.ExecuteBatchAsync(inquiryInsertStmt, unreadInquiryInsertStmt);
            }
        }

        public async Task DeleteInquiryAsync(Guid inquiryId)
        {
            using (var dse = _dseContextFactory.GetDseContext())
            {
                var inquiryDeleteStmt = dse.Inquiries.Where(i => i.Id == inquiryId)
                    .Delete();

                var unreadInquiryDeleteStmt = dse.UnreadInquiries.Where(i => i.Id == inquiryId)
                    .Delete();

                await dse.ExecuteBatchAsync(inquiryDeleteStmt, unreadInquiryDeleteStmt);
            }
        }
    }
}
