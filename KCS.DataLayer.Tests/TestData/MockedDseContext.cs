using Cassandra;
using Cassandra.Data.Linq;
using KCS.DataLayer.Interfaces;
using KCS.DataLayer.Models;
using Moq;
using System.Collections.Generic;

namespace KCS.DataLayer.Tests.TestData
{
    internal class MockedDseContext
    {
        private readonly Mock<IDseContext> _dseContext;

        internal Mock<IDseContext> DseContext { get { return _dseContext; } }

        internal MockedDseContext()
        {
            var session = new Mock<ISession>();

            var table = new Mock<Table<Inquiry>>();
            table.Setup(t => t.Execute()).Returns(new List<Inquiry>
            {
                MockedInquiry.Inquiry,
                MockedInquiry.UnreadInquiry,
            });

            _dseContext = new Mock<IDseContext>();
            _dseContext.Setup(c => c.Inquiries).Returns(table.Object);
        }
    }
}
