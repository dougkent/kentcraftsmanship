using KCS.Core.Interfaces;
using KCS.Core.Models;
using KCS.DataLayer;
using Microsoft.AspNetCore.Mvc;
using System;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

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
        [Route("/api/inquiry/submit")]
        public IActionResult SubmitInquiry([FromBody]InquirySubmission inquirySubmission)
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
                _inquiryWriteService.SubmitInquiry(inquirySubmission);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
