using KCS.Core.Exceptions;
using KCS.Core.Models;
using KCS.Services.Tests.TestData;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace KCS.Services.Tests
{
    [TestClass]
    public class InquiryWriteServiceTests
    {
        private class MockedInquiryWriteService
        {
            private readonly MockedReCaptchaValidationService _reCaptchaService;

            internal MockedReCaptchaValidationService ReCaptchaValidationService
            {
                get
                {
                    return _reCaptchaService;
                }
            }

            private readonly MockedAirtableService _airtableService;

            internal MockedAirtableService AirtableService
            {
                get
                {
                    return _airtableService;
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
                _airtableService = new MockedAirtableService();
                _reCaptchaService = new MockedReCaptchaValidationService();
                _inquiryWriteService = new InquiryWriteService(_reCaptchaService.ReCaptchaValidationService.Object, _airtableService.AirtableService.Object);
            }
        }

        [TestMethod]
        public async Task InquiryWriteService_SubmitInquiryRequiresModel()
        {
            var mockedWriteInquiryService = new MockedInquiryWriteService();

            await Assert.ThrowsExceptionAsync<ArgumentException>(() => mockedWriteInquiryService.InquiryWriteService
                .SubmitInquiryAsync(null));
        }

        [TestMethod]
        public async Task InquiryWriteService_SubmitInquiryReCaptchaValidation()
        {
            var mockedWriteInquiryService = new MockedInquiryWriteService();

            mockedWriteInquiryService.ReCaptchaValidationService.ReCaptchaValidationService
                .Setup(r => r.Validate(It.IsAny<string>()))
                .Returns(Task.FromResult(new ReCaptchaResponse
                {
                    Success = false,
                    ErrorCodes = new List<string>() { "Error Code 1", "Error Code 2" },
                }));

            var inquirySubmission = new InquirySubmission
            {
                Email = "Test Submission Email",
                Name = "Test Submission Name",
                Message = "Test Submission Message",
                Captcha = "token",
            };

            await Assert.ThrowsExceptionAsync<ReCaptchaException>(() => mockedWriteInquiryService.InquiryWriteService
              .SubmitInquiryAsync(inquirySubmission), "Error Code 1,Error Code 2");

            mockedWriteInquiryService.ReCaptchaValidationService.ReCaptchaValidationService
                .Verify(r => r.Validate(It.IsAny<string>()), Times.Once);

            mockedWriteInquiryService.AirtableService.AirtableService
                .Verify(d => d.SubmitRequest(It.IsAny<AirtableRequest>()), Times.Never);
        }

        [TestMethod]
        public async Task InquiryWriteService_SubmitInquiryAirtableException()
        {
            var mockedWriteInquiryService = new MockedInquiryWriteService();

            mockedWriteInquiryService.AirtableService.AirtableService
                .Setup(a => a.SubmitRequest(It.IsAny<AirtableRequest>()))
                .Returns(Task.FromResult(new AirtableResponse
                {
                    Success = false,
                    ErrorMessage = "Error Message",
                }));

            var inquirySubmission = new InquirySubmission
            {
                Email = "Test Submission Email",
                Name = "Test Submission Name",
                Message = "Test Submission Message",
                Captcha = "token",
            };

            await Assert.ThrowsExceptionAsync<AirtableException>(() => mockedWriteInquiryService.InquiryWriteService
                .SubmitInquiryAsync(inquirySubmission), "Error Message");

            mockedWriteInquiryService.ReCaptchaValidationService.ReCaptchaValidationService
                .Verify(r => r.Validate(It.IsAny<string>()), Times.Once);

            mockedWriteInquiryService.AirtableService.AirtableService
                .Verify(d => d.SubmitRequest(It.IsAny<AirtableRequest>()), Times.Once);
        }

        [TestMethod]
        public async Task InquiryWriteService_CanSubmitInquiry()
        {
            var mockedWriteInquiryService = new MockedInquiryWriteService();

            var inquirySubmission = new InquirySubmission
            {
                Email = "Test Submission Email",
                Name = "Test Submission Name",
                Message = "Test Submission Message",
                Captcha = "token",
            };

            await mockedWriteInquiryService.InquiryWriteService
                .SubmitInquiryAsync(inquirySubmission);

            mockedWriteInquiryService.ReCaptchaValidationService.ReCaptchaValidationService
                .Verify(r => r.Validate(It.IsAny<string>()), Times.Once);

            mockedWriteInquiryService.AirtableService.AirtableService
                .Verify(d => d.SubmitRequest(It.IsAny<AirtableRequest>()), Times.Once);
        }
    }
}
