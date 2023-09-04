<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use App\Models\User;

class LoginController extends Controller
{
    public function index()
    {
      return Inertia::render('login/index');
    }

    public function authenticate(Request $request)
    {
       $credentials = $request->validate([
            'email' => 'required',
            'password' => 'required'
        ]);

        if (User::where('email', $credentials['email'])->whereNotNull('provider')->exists()) {
            return redirect('/login')->withErrors(['emailOAuth' => 'Email ini sudah digunakan untuk login dengan metode yang lain! Silahkan coba login kembali dengan metode yang berbeda!']);
        }

        if(Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return redirect()->intended('/dashboard');
        }

        return back()->with('loginFailed', 'Login gagal!');
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        Session::regenerateToken();

        return redirect('/');
    }
}
