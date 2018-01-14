using KCS.Services.Tests.TestData;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System.Linq;

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
        public void InquiryReadService_CanGetAllInquiries()
        {
            var mockedReadInquiryService = new MockedInquiryReadService();

            var inquiries = mockedReadInquiryService.InquiryReadService
                .GetAllInquiries();

            Assert.IsNotNull(inquiries);

            Assert.AreEqual(2, inquiries.Count);

            Assert.AreEqual(MockedInquiry.ReadInquiry.Id, inquiries.First().Id);

            mockedReadInquiryService.InquiryDataLayer.InquiryDataLayer
                .Verify(d => d.GetAllInquiries(), Times.Once);
        }

        [TestMethod]
        public void InquiryReadService_CanGetUnreadInquiries()
        {
            var mockedReadInquiryService = new MockedInquiryReadService();

            var inquiries = mockedReadInquiryService.InquiryReadService
                .GetUnreadInquiries();

            Assert.IsNotNull(inquiries);

            Assert.AreEqual(1, inquiries.Count);

            Assert.AreEqual(MockedInquiry.UnreadInquiry.Id, inquiries.First().Id);

            mockedReadInquiryService.InquiryDataLayer.InquiryDataLayer
                .Verify(d => d.GetUnreadInquiries(), Times.Once);
        }
    }
}
