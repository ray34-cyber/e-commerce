<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;


class RegisterController extends Controller
{
    public function index()
    {
        return Inertia::render('register/index');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'full_name' => 'required|max:255',
            'username' => ['required', 'min:3', 'max:255', 'unique:users'],
            'email' => 'required|email|unique:users',
            'password' => 'required|min:5|max:255'
        ]);

        User::create($validatedData);

        Session::flash('success', 'Registrasi berhasil! silahkan login!');
    }
}