<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Model::unguard();

		\App\Item::create([
			'name' => 'Hello'
		]);

		\App\Item::create([
			'name' => 'World'
		]);

		\App\Item::create([
			'name' => 'How'
		]);

		\App\Item::create([
			'name' => 'Are'
		]);

		\App\Item::create([
			'name' => 'You?'
		]);

		// $this->call('UserTableSeeder');
	}

}
