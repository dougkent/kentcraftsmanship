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

        public IActionResult Index()
        {
            var dataLayerTest = new InquiryDataLayer();

            dataLayerTest.GetAllInquiries();

            return File("~/index.html", "text/html");
        }

        [HttpPost]
        [Route("/api/inquiry/submit")]
        public IActionResult SubmitInquiry([FromBody]InquirySubmission inquirySubmission)
        {
            if (inquirySubmission == null) return BadRequest("An inquiry submission is required");

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
