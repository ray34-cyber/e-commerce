<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Product;
use Illuminate\Database\Seeder;
use App\Models\Category;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        Category::create([
            'name' => 'Clothes',
            'slug' => 'clothes'
        ]);

        Category::create([
            'name' => 'Shoes',
            'slug' => 'shoes'
        ]);

        Category::create([
            'name' => 'Pants',
            'slug' => 'pants'
        ]);

        Product::factory(20)->create();

    }

    
}
