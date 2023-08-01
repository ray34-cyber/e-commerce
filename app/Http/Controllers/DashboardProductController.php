<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;
use \Cviebrock\EloquentSluggable\Services\SlugService;
use Illuminate\Support\Str;



class DashboardProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('dashboard/products/index', [
            'products' => Product::where('user_id', auth()->user()->id)->latest()->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('dashboard/products/Create', [
            'categories' => Category::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nama_produk' => 'required|max:255',
            'slug' => 'required|unique:products',
            'category_id' => 'required',
            'body' => 'required',
            'price' => 'required|integer'
        ]);

        $validatedData['user_id'] = auth()->user()->id;

        Product::create($validatedData);

    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        return Inertia::render('dashboard/products/Edit', [
            'product' => $product,
            'categories' => Category::all()
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        $rules = [
            'nama_produk' => 'required|max:255',
            'category_id' => 'required',
            'body' => 'required',
            'price' => 'required|integer'
        ];

        if($request->slug != $product->slug) {
            $rules['slug'] = 'required|unique:products';
        }

        $validatedData = $request->validate($rules);

        $validatedData['user_id'] = auth()->user()->id;

        Product::where('id', $product->id)
                    ->update($validatedData);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {   
        Product::destroy($product->id);
    }

    public function checkSlug(Request $request)
    {
        
        $namaProduk = $request->nama_produk;
        $namaProduk = Str::replace(' ', '-', $namaProduk);
    
        $slug = SlugService::createSlug(Product::class, 'slug', $namaProduk);
    
        return response()->json(['slug' => $slug]);
    }
}
