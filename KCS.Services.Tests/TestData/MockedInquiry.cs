using KCS.Core.Models;
using System;

namespace KCS.Services.Tests.TestData
{
    internal static class MockedInquiry
    {
        private static Inquiry _unreadInquiry;

        internal static Inquiry UnreadInquiry
        {
            get
            {
                if(_unreadInquiry == null)
                {
                    _unreadInquiry = new Inquiry
                    {
                        Id = Guid.NewGuid(),
                        Email = "Test Email",
                        Subject = "Test Subject",
                        Body = "Test Body",
                        Submitted = DateTime.Now,
                        Read = null,
                    };
                }

                return _unreadInquiry;
            }
        }

        private static Inquiry _readInquiry;

        internal static Inquiry ReadInquiry
        {
            get
            {
                if (_readInquiry == null)
                {
                    _readInquiry = new Inquiry
                    {
                        Id = Guid.NewGuid(),
                        Email = "Test Email",
                        Subject = "Test Subject",
                        Body = "Test Body",
                        Submitted = DateTime.Now,
                        Read = DateTime.Now.AddDays(1),
                    };
                }

                return _readInquiry;
            }
        }
    }
}
