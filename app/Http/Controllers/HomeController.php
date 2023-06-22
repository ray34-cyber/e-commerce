<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Controller;


class HomeController extends Controller
{
    public function index() {
        return Inertia::render('home/index', []);
    }
}
