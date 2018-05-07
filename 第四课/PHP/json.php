<?php 
header("Content-type: application/json;  charset=UTF-8");
$username= $_GET["username"];
$pwd=$_GET["pwd"];

       $a['success']=true;
	   $a['message']="申请成功,请等待审核结果!";
	   $a['username']=$username;
	   $a['password']=$pwd;
	   $cars=array("Volvo","BMW","SAAB");
	   $a['cars']=$cars;
	 
     echo json_encode($a);
	
?>