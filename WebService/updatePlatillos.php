<?php
include_once "config.php";

$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();



$nombre = $data['nombre'];
$categoria = $data['categoria'];
$detalles = $data['detalles'];
$precio = $data['precio'];
$promocion = $data['promocion'];
$descuento = $data['descuento'];
$imagen = $data['imagen'];

$id = $_GET['id'];



$q = mysqli_query($con, "UPDATE `tbplatillo` SET 
`nombre`='$nombre', 
`categoria`='$categoria',
`detalle`='$detalles', 
`precio`='$precio',
`promocion`='$promocion' ,
`descuento`='$descuento' ,
`imagen`='$imagen'
WHERE idPlatillo='$id'");


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