<?php
include "config.php";

$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();



 $nombre = $data['nombre'];
 $categoria = $data['categoria'];
 $detalles = $data['detalles'];
 $precio = $data['precio'];
 $promocion = $data['promocion'];
 $descuento = $data['descuento'];
 $imagen = $data['imagen'];

 $q = mysqli_query($con,"INSERT INTO `tbplatillo` (`nombre`, `categoria`, `detalle`, `precio`, `promocion`, `descuento`, `imagen`) 
 VALUES ('$nombre','$categoria', '$detalles','$precio','$promocion',
 '$descuento','$imagen')");

    if($q){
        http_response_code(201);
        $message['status'] = "Success";
    }else{
        http_response_code(422);
        $message['status'] = "Error";
    }
    
    echo json_encode($message);
    echo mysqli_error($con);


?>