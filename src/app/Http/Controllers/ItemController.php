<?php namespace App\Http\Controllers;

use App\Item;

class ItemController extends Controller {

    public function getIndex() {
        return Item::get();
    }    

    public function postIndex() {

        return Item::create([
            'name' => \Input::get('name')
        ]);
    }
  
}
