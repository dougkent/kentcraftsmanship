using KCS.Core.Interfaces;
using KCS.Core.Models;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System.Net;
using System.Threading.Tasks;

namespace KCS.Services
{
    public class ReCaptchaValidationService : IReCaptchaValidationService
    {
        private const string VALIDATION_URL = "https://www.google.com/recaptcha/api/siteverify?secret={0}&response={1}";
        private readonly IOptions<ConfigSettings> _config;

        public ReCaptchaValidationService(IOptions<ConfigSettings> config)
        {
            _config = config;
        }

        public async Task<ReCaptchaResponse> Validate(string token)
        {
            using (var client = new WebClient())
            {
                var response = await client.DownloadStringTaskAsync(string.Format(VALIDATION_URL, _config.Value.ReCaptchaKey, token));

                var captchaResponse = JsonConvert.DeserializeObject<ReCaptchaResponse>(response);

                return captchaResponse;
            }
        }
    }
}
