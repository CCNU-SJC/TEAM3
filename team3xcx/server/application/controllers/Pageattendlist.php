<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Pageattendlist extends CI_Controller {
 
public function attendList(){
      $dbms='mysql';     //数据库类型
      $host='localhost'; //数据库主机名
      $dbName='ccnu_signin';    //使用的数据库
      $user='root';      //数据库连接用户名
      $pass='team3xcx';          //对应的密码
      $dsn="$dbms:host=$host;dbname=$dbName";
      
      $openid=$_GET['openid'];
      $array=array();
  try {
    $dbh = new PDO($dsn, $user, $pass); //初始化一个PDO对象
    $dbh->exec('set names utf8');
    foreach ($dbh->query("SELECT c.*from conferences c INNER JOIN attendence a where c.c_id=a.c_id and u_id='$openid' ORDER BY c_id DESC") as $row) {
        $array[] = $row;/*你还可以进行一次搜索操作//你可以用 echo($GLOBAL); 来看到这些值}*/
    }
    $array_1=array();
    $array_1["result"]=$array;
    echo json_encode($array_1);
} catch (PDOException $e) {
    die ("Error!: " . $e->getMessage() . "<br/>");
}
    }


}