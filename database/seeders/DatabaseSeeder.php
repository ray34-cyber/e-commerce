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
        // User::create([
        //     'full_name' => 'rancha adzany',
        //     'username' => 'ray34-cyber',
        //     'email' => 'rancha.adzany1@gmail.com',
        //     'password' => 'reykece0905'
        // ]);

        User::factory(3)->create();

        Category::create([
            'name_category' => 'Clothes',
            'category_slug' => 'clothes'
        ]);

        Category::create([
            'name_category' => 'Shoes',
            'category_slug' => 'shoes'
        ]);

        Category::create([
            'name_category' => 'Pants',
            'category_slug' => 'pants'
        ]);

        Product::factory(30)->create();

    }

    
}
