<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProviderController extends Controller
{
    public function redirect($provider)
    {
        return Socialite::driver($provider)->redirect();
    }

    public function callback($provider)
    {
        try {
            $SocialUser = Socialite::driver($provider)->user();
        } catch (\Exception $e) {
            return redirect('/login');
        }
        
        $user = User::where([
            'provider' => $provider,
            'provider_id' => $SocialUser->getId()
        ])->first();

        if(!$user) {
            if(User::where('email', $SocialUser->getEmail())->exists()) {
                return redirect('/login')->withErrors(['emailOAuth' => 'Email ini sudah digunakan untuk login dengan metode yang lain! Silahkan coba login kembali dengan metode yang berbeda !']);
            }

            if($provider == 'github' && !isset($SocialUser->name)) {
                $SocialUser->name = fake()->name();
            }
            
            if($provider == 'google' && !isset($SocialUser->nickname)) {
                $SocialUser->nickname = fake()->unique()->userName();
            }
            
            $user = User::Create([
            'username' => $SocialUser->nickname,
            'full_name' => $SocialUser->name,
            'email' => $SocialUser->email,
            'avatar' => $SocialUser->avatar,
            'password' => Hash::make('password'),
            'provider_token' => $SocialUser->token,
            "provider_id" => $SocialUser->id,
            "provider" => $provider
            ]);

        }

        
        
        Auth::login($user);
    
        return redirect('/dashboard');
    }
}
