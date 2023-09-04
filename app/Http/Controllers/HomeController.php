<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Inertia\Inertia;
use Inertia\Controller;


class HomeController extends Controller
{
    public function index() {

        return Inertia::render('home/index', [
            'products' => Product::latest()->filter(request(['search','category']))->paginate(6)->withQueryString(),
            'categories' => Category::all()
        ]);
    }
}
