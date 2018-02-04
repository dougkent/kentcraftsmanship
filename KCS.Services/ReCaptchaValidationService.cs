using KCS.Core.Interfaces;
using KCS.Core.Models;
using Newtonsoft.Json;
using System.Net;
using System.Threading.Tasks;

namespace KCS.Services
{
    public class ReCaptchaValidationService : IReCaptchaValidationService
    {
        private const string PRIVATE_KEY = "6Lcc5UIUAAAAAB-mdNsp_I-2TZB1ghcDQkjszbbB";
        private const string VALIDATION_URL = "https://www.google.com/recaptcha/api/siteverify?secret={0}&response={1}";

        public async Task<ReCaptchaResponse> Validate(string token)
        {
            using (var client = new WebClient())
            {
                var response = await client.DownloadStringTaskAsync(string.Format(VALIDATION_URL, PRIVATE_KEY, token));

                var captchaResponse = JsonConvert.DeserializeObject<ReCaptchaResponse>(response);

                return captchaResponse;
            }
        }
    }
}
