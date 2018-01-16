using KCS.Core.Models;
using KCS.Services.Tests.TestData;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System;
using System.Threading.Tasks;

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
        public async Task InquiryWriteService_MarkInquiryAsReadRequiresInquiryId()
        {
            var mockedWriteInquiryService = new MockedInquiryWriteService();

            await Assert.ThrowsExceptionAsync<ArgumentException>(() => mockedWriteInquiryService.InquiryWriteService
                .MarkInquiryAsReadAsync(Guid.Empty));
        }

        [TestMethod]
        public async Task InquiryWriteService_CanMarkInquiryAsRead()
        {
            var mockedWriteInquiryService = new MockedInquiryWriteService();

            await mockedWriteInquiryService.InquiryWriteService
                .MarkInquiryAsReadAsync(MockedInquiry.UnreadInquiry.Id);

            mockedWriteInquiryService.InquiryDataLayer.InquiryDataLayer
                .Verify(d => d.MarkInquiryAsReadAsync(MockedInquiry.UnreadInquiry.Id), Times.Once);
        }

        [TestMethod]
        public async Task InquiryWriteService_SubmitInquiryRequiresModel()
        {
            var mockedWriteInquiryService = new MockedInquiryWriteService();

            await Assert.ThrowsExceptionAsync<ArgumentException>(() => mockedWriteInquiryService.InquiryWriteService
                .SubmitInquiryAsync(null));
        }

        [TestMethod]
        public async Task InquiryWriteService_CanSubmitInquiry()
        {
            var mockedWriteInquiryService = new MockedInquiryWriteService();

            var inquirySubmission = new InquirySubmission
            {
                Email = "Test Submission Email",
                Subject = "Test Submission Subject",
                Body = "Test Submission Body",
            };

            await mockedWriteInquiryService.InquiryWriteService
                .SubmitInquiryAsync(inquirySubmission);

            mockedWriteInquiryService.InquiryDataLayer.InquiryDataLayer
                .Verify(d => d.SubmitInquiryAsync(inquirySubmission), Times.Once);
        }

        [TestMethod]
        public async Task InquiryWriteService_DeleteInquiryRequiresInquiryId()
        {
            var mockedWriteInquiryService = new MockedInquiryWriteService();

            await Assert.ThrowsExceptionAsync<ArgumentException>(() => mockedWriteInquiryService.InquiryWriteService
                .DeleteInquiryAsync(Guid.Empty));
        }

        [TestMethod]
        public async Task InquiryWriteService_CanDeleteInquiry()
        {
            var mockedWriteInquiryService = new MockedInquiryWriteService();

            await mockedWriteInquiryService.InquiryWriteService
                .DeleteInquiryAsync(MockedInquiry.ReadInquiry.Id);

            mockedWriteInquiryService.InquiryDataLayer.InquiryDataLayer
                .Verify(d => d.DeleteInquiryAsync(MockedInquiry.ReadInquiry.Id), Times.Once);
        }
    }
}
