using KCS.DataLayer.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace KCS.DataLayer.Tests.TestData
{
    public static class MockedUnreadInquiry
    {
        private static UnreadInquiry _unreadInquiry;

        public static UnreadInquiry UnreadInquiry
        {
            get
            {
                if (_unreadInquiry == null)
                {
                    _unreadInquiry = new UnreadInquiry
                    {
                        Id = Guid.NewGuid(),
                        Email = "Test Email",
                        Submitted = DateTime.Now,
                        Subject = "Test Subject",
                        Body = "Test Body",
                    };
                }

                return _unreadInquiry;
            }
        }

    }
}
