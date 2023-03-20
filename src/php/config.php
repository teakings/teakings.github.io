<?php
header("Access-Control-Allow-Origin: *");
class Database {
   
 public function connect() {
 $con = mysqli_connect("localhost","id20352781_didds088","Despro4196#1988","id20352781_school") or die ("could not connect database" . mysqli_connect_error());
   return $con;
 }

//  VIEW DATA
public function view($uname) {
$conn=$this->connect();
$data=array();
$sql = "SELECT * FROM profile WHERE username='$uname' ";
$ret_data=mysqli_query($conn,$sql);
$rowcount=mysqli_num_rows($ret_data);
if ($rowcount>0) {
while ($row=mysqli_fetch_object($ret_data)){
    $data[]=$row;
    $_SESSION['uname']=$uname;
}
}
else {
  $data = "0";
}
echo json_encode($data);
}
//  VIEW2
public function view2($uname) {
$conn=$this->connect();
$sql = "SELECT * FROM profile WHERE username='$uname' ";
$ret_data=mysqli_query($conn,$sql);
$rowcount=mysqli_num_rows($ret_data);
if ($rowcount>0) {
while ($row=mysqli_fetch_object($ret_data)){
  $data = $row;
}
}
else {
  $data = "0";
}
echo json_encode($data);

}

//  VIEW ALL
public function all() {
$conn=$this->connect();
$data=array();
$sql = "SELECT * FROM profile";
$ret_data=mysqli_query($conn,$sql);
$rowcount=mysqli_num_rows($ret_data);
if ($rowcount>0) {
while ($row=mysqli_fetch_object($ret_data)){
    $data[]=$row;
}
  
}
else {
  $data = "0";
}
echo json_encode($data);
}


}

?>