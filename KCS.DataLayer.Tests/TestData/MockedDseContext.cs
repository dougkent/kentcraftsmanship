using Cassandra.Data.Linq;
using KCS.Core.Models;
using KCS.DataLayer.Interfaces;
using Moq;

namespace KCS.DataLayer.Tests.TestData
{
    internal class MockedDseContext
    {
        private readonly Mock<IDseContext> _dseContext;

        internal Mock<IDseContext> DseContext { get { return _dseContext; } }

        internal MockedDseContext()
        {
            _dseContext = new Mock<IDseContext>();
        }
    }
}
