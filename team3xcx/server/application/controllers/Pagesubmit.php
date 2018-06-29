<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Pagesubmit extends CI_Controller {
public function submit(){
      $dbms='mysql';     //数据库类型
      $host='localhost'; //数据库主机名
      $dbName='ccnu_signin';    //使用的数据库
      $user='root';      //数据库连接用户名
      $pass='team3xcx';          //对应的密码
      $dsn="$dbms:host=$host;dbname=$dbName";
      $a_attend=$_POST['a_attend'];
      $a_remark=$_POST['a_remark'];
      $event_id=$_POST['event_id'];
      $openid=$_POST['openid'];
    try {
    $dbh = new PDO($dsn, $user, $pass); //初始化一个PDO对象
    $dbh->exec('set names utf8');//设置编码  
    $sql = "INSERT INTO attendence (c_id,u_id,a_attend,a_remark) VALUES ('$event_id','$openid','$a_attend','$a_remark')"; 
    //$sql = " INSERT INTO attendence (c_id,u_id,a_attend,a_remark) VALUES ('3','o9YK05KhmnnkGSqG3Y_c20Akiw-0','can','ninainai')"; 
    $dbh->exec($sql); 
} catch (PDOException $e) {
    die ("Error!: ".$e->getMessage() . "<br/>");
}

}

}