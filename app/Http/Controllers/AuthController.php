<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validatedData = $request->validate([
            'login' => 'string|max:255|unique:users',
            'nom' => 'string|max:255',
            'role' => 'integer',
            'email' => 'string|email|max:255|unique:users',
            'password' => 'string|min:6|confirmed',
        ]);

        $validatedData['password'] = bcrypt($request->password);

        $user = User::create($validatedData);

        auth()->login($user);

        return response()->json(['message' => 'User registered successfully'], 201);
    }

    public function login(Request $request)
    {
        $loginData = $request->validate([
            'email' => 'email|required',
            'password' => 'required'
        ]);

        if (!Auth::attempt($loginData)) {
            return response()->json(['message' => 'Invalid Credentials'], 401);
        }
        $user = User::where('email', $loginData['email'])->first();
        $token = Auth::user()->createToken('authToken')->plainTextToken;
        return response()->json(['user' => $user, 'token' => $token], 201);
    }
}
