using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using UniversityAPI.Data;

namespace UniversityAPI
{
    public class RepositoryContextFactory : IDesignTimeDbContextFactory<DataContext>
    {
        public DataContext CreateDbContext(string[] args)
        {
            var conf = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();
            var builder = new DbContextOptionsBuilder<DataContext>()
                .UseSqlServer(conf.GetConnectionString("DefaultConnection"));

            return new DataContext(builder.Options);
        }
    }
}
