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

        return [
            'nama_produk' => $this->generateProductName($faker),
            'slug' => $this->faker->slug(),
            'price' => $this->faker->randomNumber(3,false),
            'body' => implode("\n\n", $this->faker->paragraphs(rand(2, 3))),
            'category_id' => 1
        ];
    }

    private function generateProductName($faker)
    {
        $categories = ['Sepatu', 'Baju', 'Celana'];
        

        $category = $faker->randomElement($categories);
        

        return "$category";
    }
}
