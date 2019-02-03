using KCS.Core.Models;
using KCS.Web.Controllers;
using KCS.Web.Tests.TestData;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System;
using System.Threading.Tasks;

namespace KCS.Web.Tests
{
    [TestClass]
    public class HomeControllerTests
    {
        private class MockedHomeController
        {
            private readonly MockedInquiryWriteService _mockedInquiryWriteService;

            internal MockedInquiryWriteService MockedInquiryWriteService
            {
                get
                {
                    return _mockedInquiryWriteService;
                }
            }

            private readonly HomeController _homeController;

            internal HomeController HomeController
            {
                get
                {
                    return _homeController;
                }
            }

            internal MockedHomeController()
            {
                _mockedInquiryWriteService = new MockedInquiryWriteService();

                _homeController = new HomeController(_mockedInquiryWriteService.InquiryWriteService.Object, null);
            }
        }

        [TestMethod]
        public void HomeController_CanGetIndexHtml()
        {
            var mockedHomeController = new MockedHomeController();

            var result = mockedHomeController.HomeController
                .Index();

            Assert.IsNotNull(result);

            Assert.IsTrue(result is VirtualFileResult);

            var fileResult = result as VirtualFileResult;

            Assert.AreEqual("~/index.html", fileResult.FileName);
            Assert.AreEqual("text/html", fileResult.ContentType);
        }

        [TestMethod]
        public async Task HomeController_SubmitInquiryRequiresModel()
        {
            var mockedHomeController = new MockedHomeController();

            var result = await mockedHomeController.HomeController
                .SubmitInquiry(null);

            Assert.IsNotNull(result);

            Assert.IsTrue(result is BadRequestObjectResult);

            var badRequestResult = (BadRequestObjectResult)result;

            Assert.AreEqual("An inquiry submission is required.", badRequestResult.Value);
            Assert.AreEqual(422, badRequestResult.StatusCode);
        }

        [TestMethod]
        public async Task HomeController_SubmitInquiryUnhandledException()
        {
            var mockedHomeController = new MockedHomeController();

            mockedHomeController.MockedInquiryWriteService.InquiryWriteService
                .Setup(s => s.SubmitInquiryAsync(It.IsAny<InquirySubmission>()))
                .Throws<Exception>();

            var inquirySubmission = new InquirySubmission
            {
                Email = "Test Submission Email",
                Subject = "Test Submission Subject",
                Body = "Test Submission Body",
            };

            var result = await mockedHomeController.HomeController
                .SubmitInquiry(inquirySubmission);

            Assert.IsNotNull(result);

            Assert.IsTrue(result is BadRequestObjectResult);

            var badRequestResult = (BadRequestObjectResult)result;

            Assert.AreEqual(400, badRequestResult.StatusCode);
        }

        [TestMethod]
        public async Task HomeController_CanSubmitInquiry()
        {
            var mockedHomeController = new MockedHomeController();

            var inquirySubmission = new InquirySubmission
            {
                Email = "Test Submission Email",
                Subject = "Test Submission Subject",
                Body = "Test Submission Body",
            };

            var result = await mockedHomeController.HomeController
                .SubmitInquiry(inquirySubmission);

            Assert.IsNotNull(result);

            Assert.IsTrue(result is OkResult);

            mockedHomeController.MockedInquiryWriteService.InquiryWriteService
                .Verify(s => s.SubmitInquiryAsync(inquirySubmission), Times.Once);
        }
    }
}
