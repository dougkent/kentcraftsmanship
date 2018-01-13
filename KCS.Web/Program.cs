using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;

namespace KCS.Web
{
    public class Program
    {
        public static void Main(string[] args)
        {
            BuildWebHost(args).Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseWebRoot("web-client")
                .UseStartup<Startup>()
                .Build();
    }
}
