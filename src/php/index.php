<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
require "config.php";


$raw_data = file_get_contents('php://input');
$Posts = json_decode($raw_data);
$mode = $Posts -> type;
$dbObj = new Database();

if ($mode=="view") {
    $username = $Posts -> uname;
    $dbObj->view($username);
}
else if ($mode=="all") {
    $dbObj->all();
}


?>