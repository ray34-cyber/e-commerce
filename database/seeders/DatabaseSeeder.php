<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Product;
use Illuminate\Database\Seeder;
use App\Models\Category;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(3)->create();

        Category::create([
            'name_category' => 'Clothes',
            'slug' => 'clothes'
        ]);

        Category::create([
            'name_category' => 'Shoes',
            'slug' => 'shoes'
        ]);

        Category::create([
            'name_category' => 'Pants',
            'slug' => 'pants'
        ]);

        Product::factory(20)->create();

    }

    
}
