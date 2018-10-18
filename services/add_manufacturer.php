<?php

require'../classes/Manufacturer.php';
require'../classes/DB.php';


$manufacturer = new Manufacturer();

 echo $output=$manufacturer->insert(["name"=>$_REQUEST["name"]]);
//echo $_REQUEST['name'];
//print_r($output);

//echo "sdf";exit;