<?php

class Inventory {
    
    public function select($id) {
        $sql = "SELECT m.modelid AS id, m.name AS model_name, 
                        mf.name AS manufacturer_name, m.color AS color, m.year,
                        m.registration_number, m.note, m.image_url_1, m.image_url_2,
                        m.count AS count 
                        FROM manufacturer mf LEFT JOIN model m ON mf.manufacturerid = m.manufacturer_id 
                        WHERE m.modelid = $id";
        $result = DB::select_sql($sql);
        return $result;
    }

    public function selectAll(){
        $sql = "SELECT m.modelid AS id, m.name AS model_name, 
                        mf.name AS manufacturer_name, 
                        IF(m.count = NULL OR m.count = '0', 'Sold Out', m.count) AS count 
                        FROM model m INNER JOIN manufacturer mf ON mf.manufacturerid = m.manufacturer_id";
        $result = DB::select_sql($sql);
        return $result;
    }

    public function insert($columns = []) {

        $result = DB::insert($this->table, $columns);
        if($result) {
            return "success";
        } else {
            return "failure";
        }
    }
}