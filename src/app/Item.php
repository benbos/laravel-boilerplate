<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Item extends Model {

    protected $guarded = array('id');

    protected $table = 'items';
}