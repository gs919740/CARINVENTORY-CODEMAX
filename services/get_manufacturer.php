<?php

require'../classes/Manufacturer.php';
require'../classes/DB.php';

$manufacturer = new Manufacturer();
//print_r($manufacturer->selectAll());
echo json_encode($manufacturer->selectAll());