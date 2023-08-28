<?php
$url='https://jsonplaceholder.typicode.com/users';

/*curl_setopt($response,CURLOPT_RETURNTRANSFER,true);
//echo '<br>'.$response;
$result=curl_exec($response);
$info=curl_getinfo($response,CURLINFO_HTTP_CODE);*/
/*echo '<prer>';
var_dump($result);
echo '</pre>';

echo '<br>'.$info;
curl_close($response);*/



$user=[
    'Name'=>'Manohar',
    'Age'=>20,
    'Email'=>'123@gmail.com'
];

$response=curl_init();
curl_setopt_array($response,[
    CURLOPT_URL=>$url,
    CURLOPT_RETURNTRANSFER=>true,
    CURLOPT_POST=>true,
    CURLOPT_HTTPHEADER=>['content-type:application/json'],
    CURLOPT_POSTFIELDS=>json_encode($user)

]);
$result=curl_exec($response);
curl_close($response);
echo '<br>'.$result;


