using KCS.Core.Models;
using System.Threading.Tasks;

namespace KCS.Core.Interfaces
{
    public interface IAirtableService
    {
        Task<AirtableResponse> SubmitRequest(AirtableRequest request);
    }
}