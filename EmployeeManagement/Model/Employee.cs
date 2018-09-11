using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeManagement.Model
{
    public class Employee
    {        
        public int Id { get; set; }
        public string Name { get; set; }
        public Gender Gender { get; set; }
        public double Salary { get; set; }
        public string ProfilePic { get; set; }
        public virtual Department Department { get; set; }
    }
}
