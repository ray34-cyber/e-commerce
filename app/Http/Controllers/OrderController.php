<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class OrderController extends Controller
{
    public function orderView(Product $product)
    {
        return Inertia::render('order/Order', [
            'product' => Product::where('slug', $product->slug)->get()
        ]);
    }

    public function orderHandler(Request $request)
    {
        $nama_produk = $request->nama_produk;
        $image = $request->image;
        $request->request->add(['total_price' => $request->qty * $request->price , 'status' => 'Unpaid']);
        return Inertia::render('order/Checkout', [
            'order' => $request->all()
        ]);
    }

    public function checkout(Request $request)
    {
        $request->request->add(['order_id' => Str::random(30)]);
        $order = Order::create($request->all());

        // Set your Merchant Server Key
        \Midtrans\Config::$serverKey = config('midtrans.server_key');
        // Set to Development/Sandbox Environment (default). Set to true for Production Environment (accept real transaction).
        \Midtrans\Config::$isProduction = false;
        // Set sanitization on (default)
        \Midtrans\Config::$isSanitized = true;
        // Set 3DS transaction for credit card to true
        \Midtrans\Config::$is3ds = true;

        $params = array(
            'transaction_details' => array(
                'order_id' => $order->order_id,
                'gross_amount' => $order->total_price,
            ),
            'customer_details' => array(
                'first_name' => $request->name,
                'phone' => $request->phone,
            ),
        );

        $snapToken = \Midtrans\Snap::getSnapToken($params);
        return $snapToken;
    }

    public function callback(Request $request)
    {
        $serverKey = config('midtrans.server_key');
        $hashed = hash('sha512', $request->order_id.$request->status_code.$request->gross_amount.$serverKey);
        if ($hashed == $request->signature_key) {
            if($request->transaction_status == 'capture') {
                $order = Order::where('order_id', $request->order_id);
                $order->update(['status' => 'Paid']);
            }
        }
    }

    public function invoice(Order $order)
    {
        return Inertia::render('order/Invoice', compact('order'));
    }
}
