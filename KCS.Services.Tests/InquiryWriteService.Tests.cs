using KCS.Core.Models;
using KCS.Services.Tests.TestData;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System;

namespace KCS.Services.Tests
{
    [TestClass]
    public class InquiryWriteServiceTests
    {
        private class MockedInquiryWriteService
        {
            private readonly MockedInquiryDataLayer _inquiryDataLayer;

            internal MockedInquiryDataLayer InquiryDataLayer
            {
                get
                {
                    return _inquiryDataLayer;
                }
            }

            private readonly InquiryWriteService _inquiryWriteService;

            internal InquiryWriteService InquiryWriteService
            {
                get
                {
                    return _inquiryWriteService;
                }
            }

            internal MockedInquiryWriteService()
            {
                _inquiryDataLayer = new MockedInquiryDataLayer();
                _inquiryWriteService = new InquiryWriteService(_inquiryDataLayer.InquiryDataLayer.Object);
            }
        }

        [TestMethod]
        public void InquiryWriteService_MarkInquiryAsReadRequiresInquiryId()
        {
            var mockedWriteInquiryService = new MockedInquiryWriteService();

            Assert.ThrowsException<ArgumentException>(() => mockedWriteInquiryService.InquiryWriteService
                .MarkInquiryAsRead(Guid.Empty));
        }

        [TestMethod]
        public void InquiryWriteService_CanMarkInquiryAsRead()
        {
            var mockedWriteInquiryService = new MockedInquiryWriteService();

            mockedWriteInquiryService.InquiryWriteService
                .MarkInquiryAsRead(MockedInquiry.UnreadInquiry.Id);

            mockedWriteInquiryService.InquiryDataLayer.InquiryDataLayer
                .Verify(d => d.MarkInquiryAsRead(MockedInquiry.UnreadInquiry.Id), Times.Once);
        }

        [TestMethod]
        public void InquiryWriteService_SubmitInquiryRequiresModel()
        {
            var mockedWriteInquiryService = new MockedInquiryWriteService();

            Assert.ThrowsException<ArgumentException>(() => mockedWriteInquiryService.InquiryWriteService
                .SubmitInquiry(null));
        }

        [TestMethod]
        public void InquiryWriteService_CanSubmitInquiry()
        {
            var mockedWriteInquiryService = new MockedInquiryWriteService();

            var inquirySubmission = new InquirySubmission
            {
                Email = "Test Submission Email",
                Subject = "Test Submission Subject",
                Body = "Test Submission Body",
            };

            mockedWriteInquiryService.InquiryWriteService
                .SubmitInquiry(inquirySubmission);

            mockedWriteInquiryService.InquiryDataLayer.InquiryDataLayer
                .Verify(d => d.SubmitInquiry(inquirySubmission), Times.Once);
        }

        [TestMethod]
        public void InquiryWriteService_DeleteInquiryRequiresInquiryId()
        {
            var mockedWriteInquiryService = new MockedInquiryWriteService();

            Assert.ThrowsException<ArgumentException>(() => mockedWriteInquiryService.InquiryWriteService
                .DeleteInquiry(Guid.Empty));
        }

        [TestMethod]
        public void InquiryWriteService_CanDeleteInquiry()
        {
            var mockedWriteInquiryService = new MockedInquiryWriteService();

            mockedWriteInquiryService.InquiryWriteService
                .DeleteInquiry(MockedInquiry.ReadInquiry.Id);

            mockedWriteInquiryService.InquiryDataLayer.InquiryDataLayer
                .Verify(d => d.DeleteInquiry(MockedInquiry.ReadInquiry.Id), Times.Once);
        }
    }
}
