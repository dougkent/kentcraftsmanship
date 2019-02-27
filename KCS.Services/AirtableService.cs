using AirtableApiClient;
using KCS.Core.Interfaces;
using KCS.Core.Models;
using Microsoft.Extensions.Options;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace KCS.Services
{
    public class AirtableService : IAirtableService
    {
        private readonly IOptions<ConfigSettings> _config;

        public AirtableService(IOptions<ConfigSettings> config)
        {
            _config = config;
        }

        public async Task<AirtableResponse> SubmitRequest(AirtableRequest request)
        {
            using (AirtableBase airtableBase = new AirtableBase(_config.Value.AirtableApiKey, _config.Value.AirtableBaseId))
            {
                var fields = new Fields();
                fields.AddField("Email", request.Email);

                fields.AddField("Summary", request.Summary);

                fields.AddField("Description", request.Description);

                var response = await airtableBase.CreateRecord(
                    tableName: "Inquiries",
                    fields: fields,
                    typecast: true
                );

                return new AirtableResponse()
                {
                    Success = response.Success,
                    ErrorMessage = response.AirtableApiError is AirtableApiException ? response.AirtableApiError.ErrorMessage : "Unknown error",
                };
            }
        }
    }
}