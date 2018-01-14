using KCS.Core.Interfaces;
using KCS.Core.Models;
using Moq;
using System.Collections.Generic;

namespace KCS.Services.Tests.TestData
{
    internal class MockedInquiryDataLayer
    {
        private readonly Mock<IInquiryDataLayer> _inquiryDataLayer;

        internal Mock<IInquiryDataLayer> InquiryDataLayer { get { return _inquiryDataLayer; } }

        internal MockedInquiryDataLayer()
        {
            _inquiryDataLayer = new Mock<IInquiryDataLayer>();

            _inquiryDataLayer.Setup(d => d.GetAllInquiries()).Returns(new List<Inquiry>()
                    {
                        MockedInquiry.ReadInquiry,
                        MockedInquiry.UnreadInquiry,
                    });

            _inquiryDataLayer.Setup(d => d.GetUnreadInquiries()).Returns(new List<Inquiry>()
                    {
                        MockedInquiry.UnreadInquiry,
                    });
        }
    }
}
