using KCS.DataLayer.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace KCS.DataLayer.Tests.TestData
{
    public static class MockedInquiry
    {
        private static Inquiry _inquiry;

        public static Inquiry Inquiry
        {
            get
            {
                if(_inquiry == null)
                {
                    _inquiry = new Inquiry
                    {
                        Id = Guid.NewGuid(),
                        Email = "Test Email",
                        Submitted = DateTime.Now,
                        Subject = "Test Subject",
                        Body = "Test Body",
                        ReadDate = DateTime.Now.AddDays(1),
                    };
                }

                return _inquiry;
            }
        }

        private static Inquiry _unreadInquiry;

        public static Inquiry UnreadInquiry
        {
            get
            {
                if(_unreadInquiry == null)
                {
                    _unreadInquiry = new Inquiry
                    {
                        Id = MockedUnreadInquiry.UnreadInquiry.Id,
                        Email = MockedUnreadInquiry.UnreadInquiry.Email,
                        Submitted = MockedUnreadInquiry.UnreadInquiry.Submitted,
                        Subject = MockedUnreadInquiry.UnreadInquiry.Subject,
                        Body = MockedUnreadInquiry.UnreadInquiry.Body,
                    };
                }

                return _unreadInquiry;
            }
        }
    }
}
