using KCS.Core.Interfaces;
using KCS.Core.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace KCS.Web.Controllers
{
    public class HomeController : Controller
    {
        private readonly IInquiryWriteService _inquiryWriteService;
        private readonly IReCaptchaValidationService _reCaptchaValidationService;

        public HomeController(IInquiryWriteService inquiryWriteService, IReCaptchaValidationService reCaptchaValidationService)
        {
            _inquiryWriteService = inquiryWriteService;
            _reCaptchaValidationService = reCaptchaValidationService;
        }

        public IActionResult Index()
        {
            return File("~/index.html", "text/html");
        }

        [HttpPost]
        [Route("/api/inquiries")]
        public async Task<IActionResult> SubmitInquiry([FromBody]InquirySubmission inquirySubmission)
        {
            if (inquirySubmission == null)
            {
                return new BadRequestObjectResult("An inquiry submission is required.")
                {
                    StatusCode = 422,
                };
            }

            try
            {
                var response = await _reCaptchaValidationService.Validate(inquirySubmission.Captcha);

                if(response.Success)
                {
                    await _inquiryWriteService.SubmitInquiryAsync(inquirySubmission);

                    return Ok();
                }
                else
                {
                    var responseErrors = string.Join(",", response.ErrorCodes);
                    Console.WriteLine("Recaptcha Errors: " + responseErrors);
                    return BadRequest(responseErrors);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Unexpected Error: " + ex.ToString());
                return BadRequest(ex.Message);
            }
        }
    }
}
