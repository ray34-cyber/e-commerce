<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Session;


class RegisterController extends Controller
{
    public function index()
    {
        return Inertia::render('register/index');
    }

    public function store()
    {
        $data = request()->all();
        $data['_token'] = Session::token();

        return $data;
    }
}
