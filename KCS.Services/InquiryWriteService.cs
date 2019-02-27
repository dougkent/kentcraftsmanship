using KCS.Core.Exceptions;
using KCS.Core.Extensions;
using KCS.Core.Interfaces;
using KCS.Core.Models;
using System;
using System.Threading.Tasks;

namespace KCS.Services
{
    public class InquiryWriteService : IInquiryWriteService
    {
        private readonly IAirtableService _airtableService;
        private readonly IReCaptchaValidationService _reCaptchaValidationService;

        public InquiryWriteService(IReCaptchaValidationService reCaptchaValidationService, IAirtableService airtableService)
        {
            _reCaptchaValidationService = reCaptchaValidationService;
            _airtableService = airtableService;
        }

        public async Task SubmitInquiryAsync(InquirySubmission inquirySubmission)
        {
            if (inquirySubmission == null) throw new ArgumentException("Inquiry Submission is required.");

            var captchaResponse = await _reCaptchaValidationService.Validate(inquirySubmission.Captcha);

            if (captchaResponse.Success)
            {
                var airtableRequest = inquirySubmission.ToAirtableRequest();

                var airtableResponse = await _airtableService.SubmitRequest(airtableRequest);

                if (!airtableResponse.Success)
                {
                    throw new AirtableException(airtableResponse.ErrorMessage);
                }
            }
            else
            {
                throw new ReCaptchaException(captchaResponse.ErrorCodes);
            }
        }
    }
}
