<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Pagedetail extends CI_Controller {
public function detail(){
      $dbms='mysql';     //数据库类型
      $host='localhost'; //数据库主机名
      $dbName='ccnu_signin';    //使用的数据库
      $user='root';      //数据库连接用户名
      $pass='team3xcx';          //对应的密码
      $dsn="$dbms:host=$host;dbname=$dbName";
      $event_id=$_GET['event_id'];
 
    try {
    $dbh = new PDO($dsn, $user, $pass); //初始化一个PDO对象
    $dbh->exec('set names utf8');
   $STH=$dbh->prepare('SELECT* from conferences WHERE c_id='.$event_id);
   $STH->execute();
      $STH->setFetchMode(PDO::FETCH_ASSOC);
      $row=$STH->fetch();
      echo json_encode($row);
} catch (PDOException $e) {
    die ("Error!: " . $e->getMessage() . "<br/>");
}
      
}



}