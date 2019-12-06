using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace cableeservices.Data
{
    public class SQLContext : DbContext
    {
        //public DbSet<AspNetUsers> AspNetUsers { get; set; }
        
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            try
            {
                string dbConn = "Data Source=sql5041.site4now.net;Initial Catalog=DB_A4AF65_ecableservices;User ID=DB_A4AF65_ecableservices_admin;Password=S1sr4m*.;MultipleActiveResultSets=true";
                optionsBuilder.UseSqlServer(@dbConn);
            } catch(Exception ex)
            {
                string sError = ex.Message;

            }

            
        }
    }
}
