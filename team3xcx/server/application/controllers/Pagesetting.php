<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Pagesetting extends CI_Controller {
public function setting(){
      $dbms='mysql';     //数据库类型
      $host='localhost'; //数据库主机名
      $dbName='ccnu_signin';    //使用的数据库
      $user='root';      //数据库连接用户名
      $pass='team3xcx';          //对应的密码
      $dsn="$dbms:host=$host;dbname=$dbName";
       $u_name=$_POST['u_name'];
       $openid=$_POST['openid'];
        
    try {
    $dbh = new PDO($dsn, $user, $pass); //初始化一个PDO对象
    $dbh->exec('set names utf8');//设置编码  

   $sql = "UPDATE users SET u_name='$u_name' where u_id='$openid'";
    $dbh->exec($sql); 
} catch (PDOException $e) {
    die ("Error!: ".$e->getMessage() . "<br/>");
}

}

}