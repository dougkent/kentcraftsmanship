using System.Threading.Tasks;
using KCS.Core.Interfaces;
using KCS.Core.Models;
using Moq;

namespace KCS.Services.Tests.TestData
{
    internal class MockedAirtableService
    {
        private readonly Mock<IAirtableService> _airtableService;

        internal Mock<IAirtableService> AirtableService { get { return _airtableService; } }

        internal MockedAirtableService()
        {
            _airtableService = new Mock<IAirtableService>();

            _airtableService.Setup(a => a.SubmitRequest(It.IsAny<AirtableRequest>()))
                .Returns(Task.FromResult(new AirtableResponse
                {
                    Success = true,
                }));
        }
    }
}