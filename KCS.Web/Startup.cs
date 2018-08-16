using KCS.Core.Interfaces;
using KCS.DataLayer;
using KCS.DataLayer.Interfaces;
using KCS.Services;
using KCS.Web.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using System.IO;

namespace KCS.Web
{
    public class Startup
    {
        public IConfiguration Configuration { get; set; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddOptions();

            //load configuration data into ConfigSettings object
            services.Configure<ConfigSettings>(Configuration.GetSection("configsettings"));

            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "kentcraftsmanship/dist/kentcraftsmanship";
            });

            services.AddMvc()
                .AddJsonOptions(options =>
                {
                    options.SerializerSettings.Converters.Add(new Newtonsoft.Json.Converters.StringEnumConverter(camelCaseText: true));
                    options.SerializerSettings.NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore;
                    options.SerializerSettings.DateTimeZoneHandling = DateTimeZoneHandling.Utc;
                });

            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddScoped<IInquiryDataLayer, InquiryDataLayer>();
            services.AddScoped<ICassandraContext, CassandraContext>();
            services.AddScoped<ICassandraContextFactory, CassandraContextFactory>();
            services.AddScoped<IInquiryWriteService, InquiryWriteService>();
            services.AddScoped<IReCaptchaValidationService, ReCaptchaValidationService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseHttpsRedirection();
            app.UseMvc();

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "kentcraftsmanship";

                //if (env.IsDevelopment())
                //{
                //    spa.UseAngularCliServer(npmScript: "start");
                //}
            });

            //app.Use(async (context, next) =>
            //{
            //    // Redirect index.html request to a controller that can have authorization in front of it
            //    if (context.Request.Path.Value == "/index.html")
            //    {
            //        context.Request.Path = "/";
            //    }

            //    await next();
            //    if (context.Response.StatusCode == 404 && !Path.HasExtension(context.Request.Path.Value) &&
            //        !context.Request.Path.Value.StartsWith("/api/"))
            //    {
            //        context.Request.Path = "/";
            //        await next();
            //    }
            //});

            ////default route: /api/[Controller]
            //app.UseMvcWithDefaultRoute();

            //app.UseDefaultFiles();
        }
    }
}
