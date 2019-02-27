using System.Threading.Tasks;
using KCS.Core.Interfaces;
using KCS.Core.Models;
using Moq;

namespace KCS.Services.Tests.TestData
{
    internal class MockedReCaptchaValidationService
    {
        private readonly Mock<IReCaptchaValidationService> _recaptchaValidationService;

        internal Mock<IReCaptchaValidationService> ReCaptchaValidationService
        {
            get
            {
                return _recaptchaValidationService;
            }
        }

        internal MockedReCaptchaValidationService()
        {
            _recaptchaValidationService = new Mock<IReCaptchaValidationService>();

            _recaptchaValidationService.Setup(r => r.Validate(It.IsAny<string>()))
                .Returns(Task.FromResult(new ReCaptchaResponse
                {
                    Success = true,
                }));
        }
    }
}