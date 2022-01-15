<?php


header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: token, Content-Type, Access-Control-Allow-Headers, X-Requested-With X-API-KEY, Origin, X-Requested-With, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
header('Access-Control-Allow-Methods: *');
header('Access-Control-Max-Age: 1728000');
header('Content-Type: text/plain; charset=utf-8');

$method = $_SERVER['REQUEST_METHOD'];
if ($method == "OPTIONS") {
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
header("HTTP/1.1 200 OK");

}

$con = mysqli_connect("localhost", "root", "", "dbplatillos")or die("No se establecio conexion");
?>