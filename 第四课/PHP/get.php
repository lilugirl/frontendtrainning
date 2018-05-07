<?php 
header("Content-type: text/html;  charset=UTF-8");
$username= $_GET["username"];
$pwd=$_GET["pwd"];
echo "用户名是:".$username."  密码是：".$pwd;

?>