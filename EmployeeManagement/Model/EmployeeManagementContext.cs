using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace EmployeeManagement.Model
{
    public class EmployeeManagementContext : DbContext
    {
        public DbSet<Employee> Employees { get; set; }
    }
}
