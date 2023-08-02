<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;
use \Cviebrock\EloquentSluggable\Services\SlugService;
<<<<<<< HEAD
use Illuminate\Support\Facades\Storage;
use Spatie\Backtrace\File;
=======
use Illuminate\Support\Str;


>>>>>>> 2f0e18952181db31f2a25789f2d5eac2b9bf54c5

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
            'image' => 'image|file|max:1024',
            'body' => 'required',
            'price' => 'required|integer'
        ]);

        if($request->file('image')) {
            $validatedData['image'] = $request->file('image')->store('product-images');
        }

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
<<<<<<< HEAD
            'image' => 'image|file|max:255',
            'body' => 'required',
            'price' => 'required|integer',
            
        ];

        if ($request->slug != $product->slug) {
=======
            'body' => 'required',
            'price' => 'required|integer'
        ];

        if($request->slug != $product->slug) {
>>>>>>> 2f0e18952181db31f2a25789f2d5eac2b9bf54c5
            $rules['slug'] = 'required|unique:products';
        }

        $validatedData = $request->validate($rules);

<<<<<<< HEAD
        if ($request->file('image')) {
                if($request->oldImage) {
                    Storage::delete($request->oldImage);
                }
                $validatedData['image'] = $request->file('image')->store('product-images');
        }

        $validatedData['user_id'] = auth()->user()->id;

        Product::where('id', $product->id)
                ->update($validatedData);
=======
        $validatedData['user_id'] = auth()->user()->id;

        Product::where('id', $product->id)
                    ->update($validatedData);
>>>>>>> 2f0e18952181db31f2a25789f2d5eac2b9bf54c5
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {   if($product->image) {
        Storage::delete($product->image);
        }

        Product::destroy($product->id);
    }

    public function checkSlug(Request $request)
    {
<<<<<<< HEAD
    
        $slug = SlugService::createSlug(Product::class, 'slug', $request->nama_produk);
=======
        
        $namaProduk = $request->nama_produk;
        $namaProduk = Str::replace(' ', '-', $namaProduk);
    
        $slug = SlugService::createSlug(Product::class, 'slug', $namaProduk);
>>>>>>> 2f0e18952181db31f2a25789f2d5eac2b9bf54c5
    
        return response()->json(['slug' => $slug]);
    }
}
