<?php
include "config.php";

$data = array();
$id = $_GET['id'];  
$q = mysqli_query($con,"SELECT * FROM `tbplatillo` WHERE `idPlatillo` = '$id'");


while($row = mysqli_fetch_object($q)){
    $data[] = $row;
}

echo json_encode($data, JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE);
echo mysqli_error($con);
?>