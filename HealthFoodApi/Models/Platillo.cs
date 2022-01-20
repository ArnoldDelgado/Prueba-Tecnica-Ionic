using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HealthFoodApi.Models
{
    public class Platillo
    {
        public string nombre { get; set; }
        public string categoria { get; set; }
        public string detalle { get; set; }
        public decimal precio { get; set; }
        public byte promocion { get; set; }
        public decimal descuento { get; set; }
        public string imagen { get; set; }
    }
}
