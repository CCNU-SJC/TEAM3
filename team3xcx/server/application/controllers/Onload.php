<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Onload extends CI_Controller {
//o9YK05KhmnnkGSqG3Y_c20Akiw-0
public function getname(){
        $code = $_GET['code'];
       
        $url = 'https://api.weixin.qq.com/sns/jscode2session?appid=wx788d626043c1b7f6&secret=c7ec6e17d62725707ad6af674841bf50&js_code='.$code.'&grant_type=authorization_code';  
        //yourAppid为开发者appid.appSecret为开发者的appsecret,都可以从微信公众平台获取；  
        $info = file_get_contents($url);//发送HTTPs请求并获取返回的数据，推荐使用curl  
        $json = json_decode($info);//对json数据解码  
        $arr = get_object_vars($json);
        $array=array();
        $array["result"]=$arr;
        $row=json_encode($array);

      $openid=$arr['openid'];
      $dbms='mysql';     //数据库类型
      $host='localhost'; //数据库主机名
      $dbName='ccnu_signin';    //使用的数据库
      $user='root';      //数据库连接用户名
      $pass='team3xcx';          //对应的密码
      $dsn="$dbms:host=$host;dbname=$dbName";
     
   try {
    $dbh = new PDO($dsn, $user, $pass); //初始化一个PDO对象
    $dbh->exec('set names utf8');//设置编码  
    $STH=$dbh->prepare("SELECT* from users where u_id='$openid'");
    $STH->execute(); 
    $STH->setFetchMode(PDO::FETCH_ASSOC);
    $row=$STH->fetch();
    if(!$row['u_name']){
      $row['u_name']="未设置";
    }else{
    }
    $result=json_encode($row);
    echo $result;
} catch (PDOException $e) {
    die ("Error!: " . $e->getMessage() . "<br/>");
}
}

public function getopenid(){
        $code = $_GET['code'];
        $nickName=$_GET['nickName'];
        $avatarUrl=$_GET['avatarUrl'];
        $url = 'https://api.weixin.qq.com/sns/jscode2session?appid=wx788d626043c1b7f6&secret=c7ec6e17d62725707ad6af674841bf50&js_code='.$code.'&grant_type=authorization_code';  
        //yourAppid为开发者appid.appSecret为开发者的appsecret,都可以从微信公众平台获取；  
        $info = file_get_contents($url);//发送HTTPs请求并获取返回的数据，推荐使用curl  
        $json = json_decode($info);//对json数据解码  
        $arr = get_object_vars($json);
        $array=array();
        $array["result"]=$arr;
        $row=json_encode($array);
        echo $row;

       $openid=$arr['openid'];

      $dbms='mysql';     //数据库类型
      $host='localhost'; //数据库主机名
      $dbName='ccnu_signin';    //使用的数据库
      $user='root';      //数据库连接用户名
      $pass='team3xcx';          //对应的密码
      $dsn="$dbms:host=$host;dbname=$dbName";
     
    try {
    $dbh = new PDO($dsn, $user, $pass); //初始化一个PDO对象
    $dbh->exec('set names utf8');//设置编码  
    $STH=$dbh->prepare("SELECT* from users where u_id='$openid'"); 
    $STH->execute(); 
    $STH->setFetchMode(PDO::FETCH_ASSOC);
    $result=$STH->fetch();
    if(!$result){
      $STH=$dbh->prepare("insert into users (u_id,u_name,u_nickname,u_image) values ('$openid','','$nickName','$avatarUrl')"); 
      $STH->execute();
    }
    else{
      $STH=$dbh->prepare("UPDATE users SET u_nickname='$nickName',u_image='$avatarUrl' where u_id='$openid'"); 
      $STH->execute();
    }
} catch (PDOException $e) {
    die ("Error!: " . $e->getMessage() . "<br/>");
}
}
}