using KCS.Core.Exceptions;
using KCS.Core.Interfaces;
using KCS.Core.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System;
using System.Threading.Tasks;

namespace KCS.Web.Controllers
{
    public class HomeController : Controller
    {
        private readonly IInquiryWriteService _inquiryWriteService;

        public HomeController(IInquiryWriteService inquiryWriteService)
        {
            _inquiryWriteService = inquiryWriteService;
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
            catch (ReCaptchaException ex)
            {
                Console.WriteLine($"ReCaptcha Error: {ex.ToString()}");
                return BadRequest("There was an error validating that you are not a robot.");
            }
            catch (AirtableException ex)
            {
                Console.WriteLine($"Airtable Error: {ex.ToString()}");
                return BadRequest("There was an error trying to submit your inquiry.");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Unexpected Error: {ex.ToString()}");
                return BadRequest(ex.Message);
            }
        }
    }
}
