﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using static MyLifeSpot.Logger;

namespace MyLifeSpot
{
    public class Program
    {
        public static void Main(string[] args)
        {
            PrintMessage((() => Info("Запускаем приложение")));

            CreateHostBuilder(args).Build().Run();
        }

        private static void Target(string str)
        {
            throw new NotImplementedException();
        }


        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}

