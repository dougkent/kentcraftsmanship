using KCS.Core.Interfaces;
using KCS.Core.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

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
                await _inquiryWriteService.SubmitInquiryAsync(inquirySubmission);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("/api/inquiries/validate-captcha")]
        public async Task<IActionResult> ValidateCaptcha(string token)
        {
            var response = await _reCaptchaValidationService.Validate(token);

            return Json(response);
        }
    }
}
