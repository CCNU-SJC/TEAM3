<?php
defined('BASEPATH') OR exit('No direct script access allowed');
 
class Pageedit extends CI_Controller {
  public function create(){
      $dbms='mysql';     //数据库类型
      $host='localhost'; //数据库主机名
      $dbName='ccnu_signin';    //使用的数据库
      $user='root';      //数据库连接用户名
      $pass='team3xcx';          //对应的密码
      $dsn="$dbms:host=$host;dbname=$dbName";
      $c_name=$_POST['c_name'];
      $c_date=$_POST['c_date'];
      $c_time=$_POST['c_time'];
     $c_open=$_POST['c_open'];
     $c_close=$_POST['c_close'];
      $c_remark=$_POST['c_remark'];
      $openid=$_POST['openid'];
      //exit($openid);
  
    try {
    $dbh = new PDO($dsn, $user, $pass); //初始化一个PDO对象
    $dbh->exec('set names utf8');//设置编码  
    $sql = "INSERT INTO conferences (c_name,c_date,c_time,c_open,c_close,c_remark,founder_id) VALUES ('$c_name','$c_date','$c_time','$c_open','$c_close','$c_remark','$openid')"; 
    $dbh->exec($sql); 
} catch (PDOException $e) {
    die ("Error!: " . $e->getMessage() . "<br/>");
}
}

public function editget(){
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
   $STH=$dbh->prepare('SELECT * from conferences WHERE c_id='.$event_id);
   $STH->execute();
      $STH->setFetchMode(PDO::FETCH_ASSOC);
      $row=$STH->fetch();
      echo json_encode($row);
} catch (PDOException $e) {
    die ("Error!: " . $e->getMessage() . "<br/>");
}
      
}

public function editpost(){
      $dbms='mysql';     //数据库类型
      $host='localhost'; //数据库主机名
      $dbName='ccnu_signin';    //使用的数据库
      $user='root';      //数据库连接用户名
      $pass='team3xcx';          //对应的密码
      $dsn="$dbms:host=$host;dbname=$dbName";
      $c_name=$_POST['c_name'];
      $c_date=$_POST['c_date'];
      $c_time=$_POST['c_time'];
       $c_open=$_POST['c_open'];
      $c_close=$_POST['c_close'];
      $c_remark=$_POST['c_remark'];
      $event_id=$_POST['event_id'];
     
    
    try {
    $dbh = new PDO($dsn, $user, $pass); //初始化一个PDO对象
    $dbh->exec('set names utf8');//设置编码  

   $sql ="UPDATE conferences SET c_name='$c_name',c_date='$c_date',c_time='$c_time',c_open='$c_open',c_close='$c_close',c_remark='$c_remark' WHERE c_id=".$event_id;
   $stmt= $dbh->prepare($sql);
    if ($stmt->execute()){
    return true;
    }else{
      return false;
    }; 

} catch (PDOException $e) {
    die ("Error!: " . $e->getMessage() . "<br/>");
}
}


}