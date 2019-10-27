using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ngWithJwt.Models
{
    public class User
    {
        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string Password { get; set; }
        public string UserType { get; set; }
    }
}
