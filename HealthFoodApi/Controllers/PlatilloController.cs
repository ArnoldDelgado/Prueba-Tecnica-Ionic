using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace HealthFoodApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlatilloController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public PlatilloController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"select * from tbplatillo";

            DataTable table = new DataTable();

            string sqlDataSource = _configuration.GetConnectionString("HealthFoodConnection");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    mycon.Close();
                }
            }

            return new JsonResult(table);
        }
        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
            string query = @"SELECT * FROM tbplatillo WHERE `idPlatillo`='" + id + "'";

            DataTable table = new DataTable();

            string sqlDataSource = _configuration.GetConnectionString("HealthFoodConnection");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    mycon.Close();
                }
            }

            return new JsonResult(table);
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"DELETE FROM tbplatillo WHERE `idPlatillo`='" + id + "'";

            DataTable table = new DataTable();

            string sqlDataSource = _configuration.GetConnectionString("HealthFoodConnection");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    mycon.Close();
                }
            }

            return new JsonResult("Eliminación Exitosa!!!");
        }


        [HttpPost]
        public JsonResult Post([FromBody] Models.Platillo platillo)
        {
            string query = @"INSERT INTO `tbplatillo` (`nombre`, `categoria`, `detalle`, `precio`, `promocion`, `descuento`, `imagen`) 
            VALUES ('" + platillo.nombre + "','" + platillo.categoria + "', '" + platillo.detalle + "','" + platillo.precio + "','" + platillo.promocion + "','" + platillo.descuento + "','" + platillo.imagen + "')";

            DataTable table = new DataTable();

            string sqlDataSource = _configuration.GetConnectionString("HealthFoodConnection");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    mycon.Close();
                }
            }

            return new JsonResult("Agregado Exitosamente!!!");
        }

        [HttpPut("{id}")]
        public JsonResult Put(int id, [FromBody] Models.Platillo platillo)
        {
            string query = @"UPDATE `tbplatillo` SET
            `nombre`='"+ platillo.nombre + "'," +
            "`categoria`='"+ platillo.categoria + "'," +
            "`detalle`='" + platillo.detalle +"'," +
            "`precio`='" +platillo.precio+"'," +
            "`promocion`='" +platillo.promocion+"'," +
            "`descuento`='" +platillo.descuento+"'," +
            "`imagen`='" +platillo.imagen+ "' WHERE idPlatillo='"+ id + "'";

            DataTable table = new DataTable();

            string sqlDataSource = _configuration.GetConnectionString("HealthFoodConnection");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    mycon.Close();
                }
            }

            return new JsonResult("Actualizado Exitosamente!!!");
        }


    }
}
