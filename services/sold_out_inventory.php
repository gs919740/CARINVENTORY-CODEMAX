<?php

require'../classes/Inventory.php';
require'../classes/model.php';
require'../classes/DB.php';
$model = new Model();

echo $model->soldOut($_REQUEST['id']);