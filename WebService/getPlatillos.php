<?php
header('Content-Type: charset=utf-8');
include"config.php";

$data = array();

$q = mysqli_query($con,"SELECT * FROM tbplatillo ORDER BY idPlatillo DESC");

$i = 0;
while($row = mysqli_fetch_assoc($q)){
    $data[$i]['idPlatillo'] = $row['idPlatillo'];
    $data[$i]['nombre'] = $row['nombre'];
    $data[$i]['categoria'] = $row['categoria'];
    $data[$i]['detalle'] = $row['detalle'];
    $data[$i]['precio'] = $row['precio'];
    $data[$i]['promocion'] = $row['promocion'];
    $data[$i]['descuento'] = $row['descuento'];
    $data[$i]['imagen'] = $row['imagen'];
    $i++;
}

echo json_encode($data, JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE);
echo mysqli_error($con);
 
?>