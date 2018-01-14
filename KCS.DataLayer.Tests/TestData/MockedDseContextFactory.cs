using KCS.DataLayer.Interfaces;
using Moq;

namespace KCS.DataLayer.Tests.TestData
{
    internal class MockedDseContextFactory
    {
        private readonly MockedDseContext _mockedDseContext;

        internal MockedDseContext MockedDseContext { get { return _mockedDseContext; } }

        private readonly Mock<IDseContextFactory> _dseContextFactory;

        internal Mock<IDseContextFactory> DseContextFactory { get { return _dseContextFactory; } }

        internal MockedDseContextFactory()
        {
            _mockedDseContext = new MockedDseContext();

            _dseContextFactory = new Mock<IDseContextFactory>();

            _dseContextFactory.Setup(f => f.GetDseContext()).Returns(_mockedDseContext.DseContext.Object);
        }
    }
}
