using KCS.Core.Models;
using System.Threading.Tasks;

namespace KCS.Core.Interfaces
{
    public interface IReCaptchaValidationService
    {
        Task<ReCaptchaResponse> Validate(string token);
    }
}
