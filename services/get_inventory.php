<?php

header('Access-Control-Allow-Origin: *');  
require'../classes/Inventory.php';
require'../classes/model.php';
require'../classes/DB.php';
$model = new Model();

$inventory = new Inventory();
//echo $_REQUEST['id']; exit;
if(isset($_REQUEST['id']) && $_REQUEST['id'] != '') {
    echo json_encode($inventory->select($_REQUEST['id']));
} else {
    echo json_encode($inventory->selectAll());
}