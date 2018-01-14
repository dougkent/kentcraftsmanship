using Microsoft.VisualStudio.TestTools.UnitTesting;
using KCS.DataLayer;
using KCS.DataLayer.Tests.TestData;

namespace KCS.DataLayer.Tests
{
    [TestClass]
    public class InquiryDataLayerTests
    {
        private class MockedInquiryDataLayer
        {
            private readonly MockedDseContextFactory _mockedDseContextFactory;

            internal MockedDseContextFactory MockedDseContextFactory { get { return _mockedDseContextFactory; } }

            private readonly InquiryDataLayer _inquiryDataLayer;

            internal InquiryDataLayer InquiryDataLayer { get { return _inquiryDataLayer; } }

            internal MockedInquiryDataLayer()
            {
                _mockedDseContextFactory = new MockedDseContextFactory();

                _inquiryDataLayer = new InquiryDataLayer(_mockedDseContextFactory.DseContextFactory.Object);
            }
        }

        [TestMethod]
        public void InquiryDataLayer_CanGetAllInquiries()
        {
            var mockedInquiryDataLayer = new MockedInquiryDataLayer();

            var results = mockedInquiryDataLayer.InquiryDataLayer
				.GetAllInquiries();
        }
    }
}
