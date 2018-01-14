using KCS.Core.Interfaces;
using Moq;

namespace KCS.Web.Tests.TestData
{
    internal class MockedInquiryWriteService
    {
        private readonly Mock<IInquiryWriteService> _inquiryWriteService;

        internal Mock<IInquiryWriteService> InquiryWriteService { get { return _inquiryWriteService; } }

        internal MockedInquiryWriteService()
        {
            _inquiryWriteService = new Mock<IInquiryWriteService>();
        }
    }
}
