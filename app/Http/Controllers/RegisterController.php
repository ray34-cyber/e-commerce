<?php

namespace App\Http\Controllers;


use Inertia\Inertia;



class RegisterController extends Controller
{
    public function index()
    {
        return Inertia::render('register/index');
    }

    public function store()
    {
        return ;
    }
}
