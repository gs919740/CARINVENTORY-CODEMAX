<?php

class Manufacturer {
    private $table = 'manufacturer';

    public function select() {

    }
    public function selectAll(){
	
        $result = DB::select($this->table, ["manufacturerid", "name"]);
        return $result;
    }

    public function insert($columns = []) {
//return $this->table;
        $result = DB::select($this->table, ["name"], "name = '$columns[name]'");
        //return $result;
        if(count($result) > 0) {
            return "duplicate";
        }

        $result = DB::insert($this->table, $columns);
		//return $result;
        if($result) {
            return "success";
        } else {
            return "failure";
        }
    }
}