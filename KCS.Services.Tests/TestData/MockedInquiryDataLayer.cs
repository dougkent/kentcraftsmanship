using KCS.Core.Interfaces;
using KCS.Core.Models;
using Moq;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace KCS.Services.Tests.TestData
{
    internal class MockedInquiryDataLayer
    {
        private readonly Mock<IInquiryDataLayer> _inquiryDataLayer;

        internal Mock<IInquiryDataLayer> InquiryDataLayer { get { return _inquiryDataLayer; } }

        internal MockedInquiryDataLayer()
        {
            _inquiryDataLayer = new Mock<IInquiryDataLayer>();

            _inquiryDataLayer.Setup(d => d.GetAllInquiriesAsync()).Returns(Task.FromResult<ICollection<Inquiry>>(new List<Inquiry>()
                    {
                        MockedInquiry.ReadInquiry,
                        MockedInquiry.UnreadInquiry,
                    }));

            _inquiryDataLayer.Setup(d => d.GetUnreadInquiriesAsync()).Returns(Task.FromResult<ICollection<Inquiry>>(new List<Inquiry>()
                    {
                        MockedInquiry.UnreadInquiry,
                    }));
        }
    }
}
