<?php

require'../classes/Model.php';
require'../classes/DB.php';
$model = new Model();
$image1='';
$image2='';

if(isset($_FILES['image_file1'])){
$image1 = explode('.', $_FILES['image_file1']['name']);
$image1 = $image1[0] . "_" . time() . "." . end($image1);
if ( $_FILES['image_file1']['error'] > 0 ){
        echo 'Error: ' . $_FILES['image_file1']['error'] . '<br>';
} else {
    if(move_uploaded_file($_FILES['image_file1']['tmp_name'], '../images/' . $image1)) {
        //echo "File Uploaded Successfully";
    }
}

}
if(isset($_FILES['image_file2'])){
$image2 = explode('.', $_FILES['image_file2']['name']);
$image2 = $image2[0] . "_" . time() . "." .end($image2);
if ( $_FILES['image_file2']['error'] > 0 ){
    echo 'Error: ' . $_FILES['image_file2']['error'] . '<br>';
} else {
    if(move_uploaded_file($_FILES['image_file2']['tmp_name'], '../images/' . $image2)) {
        //echo "File Uploaded Successfully";
    }
}

}



$data = [
            "manufacturer_id" => $_REQUEST["manufacturer_id"],
            "name" => $_REQUEST["model-name"],
            "color" => $_REQUEST["model-color"],
            "year" => $_REQUEST["model-year"],
            "registration_number" => $_REQUEST["model-reg-no"],
            "note" => $_REQUEST["model-note"],
            "count" => $_REQUEST["model-count"],
            "image_url_1" => $image1,
            "image_url_2" => $image2
        ];

echo $model->insert($data);