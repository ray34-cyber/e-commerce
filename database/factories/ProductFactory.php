<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Factory as Faker;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $faker = Faker::create();

        $nama_produk_dan_category_id = $this->generateProductNameAndCategoryId($faker);

        $nama_produk = $nama_produk_dan_category_id[0];
        $category_id = $nama_produk_dan_category_id[1];

        return [
            'nama_produk' => $nama_produk,
            'slug' => $this->faker->slug(),
            'price' => $this->faker->randomNumber(3,false),
            'body' => $this->faker->sentence(rand(5, 8)),
            'category_id' => $category_id
        ];
    }

    private function generateProductNameAndCategoryId($faker)
    {
        $categories = [
            'Shoes' => ['Running Shoes', 'Sneakers', 'Boots'],
            'Clothes' => ['T-Shirts', 'Dresses', 'Jeans'],
            'Pants' => ['Trousers', 'Leggings', 'Shorts']
        ];
    
        $category = $faker->randomElement(array_keys($categories));
        $types = $categories[$category];
        $nama_produk = $faker->randomElement($types);
    
        $categoriesMapping = [
            'Clothes' => 1,
            'Shoes' => 2,
            'Pants' => 3
        ];
    
        $category_id = $categoriesMapping[$category] ?? null;
    
        return [$nama_produk, $category_id];
    }

}
