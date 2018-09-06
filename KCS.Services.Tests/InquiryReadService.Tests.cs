using KCS.Services.Tests.TestData;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System.Linq;
using System.Threading.Tasks;

namespace KCS.Services.Tests
{
    [TestClass]
    public class InquiryReadServiceTests
    {
        private class MockedInquiryReadService
        {
            private readonly MockedInquiryDataLayer _inquiryDataLayer;

            internal MockedInquiryDataLayer InquiryDataLayer
            {
                get
                {
                    return _inquiryDataLayer;
                }
            }

            private readonly InquiryReadService _inquiryReadService;

            internal InquiryReadService InquiryReadService
            {
                get
                {
                    return _inquiryReadService;
                }
            }

            internal MockedInquiryReadService()
            {
                _inquiryDataLayer = new MockedInquiryDataLayer();
                _inquiryReadService = new InquiryReadService(_inquiryDataLayer.InquiryDataLayer.Object);
            }
        }

        [TestMethod]
        public async Task InquiryReadService_CanGetAllInquiries()
        {
            var mockedReadInquiryService = new MockedInquiryReadService();

            var inquiries = await mockedReadInquiryService.InquiryReadService
                .GetAllInquiriesAsync();

            Assert.IsNotNull(inquiries);

            Assert.AreEqual(2, inquiries.Count);

            Assert.AreEqual(MockedInquiry.ReadInquiry.Id, inquiries.First().Id);

            mockedReadInquiryService.InquiryDataLayer.InquiryDataLayer
                .Verify(d => d.GetAllInquiriesAsync(), Times.Once);
        }

        [TestMethod]
        public async Task InquiryReadService_CanGetUnreadInquiries()
        {
            var mockedReadInquiryService = new MockedInquiryReadService();

            var inquiries = await mockedReadInquiryService.InquiryReadService
                .GetUnreadInquiriesAsync();

            Assert.IsNotNull(inquiries);

            Assert.AreEqual(1, inquiries.Count);

            Assert.AreEqual(MockedInquiry.UnreadInquiry.Id, inquiries.First().Id);

            mockedReadInquiryService.InquiryDataLayer.InquiryDataLayer
                .Verify(d => d.GetUnreadInquiriesAsync(), Times.Once);
        }
    }
}
