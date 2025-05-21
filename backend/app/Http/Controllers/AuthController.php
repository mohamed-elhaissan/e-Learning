<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{


    public function Register(Request $r)
    {
        $validated  = Validator::make($r->all(), [
            'name' => "required",
            'password' => 'required|min:6',
            'email' => "required|email|unique:users"

        ]);
        if ($validated->fails()) {
            return response()->json(["error" => $validated->errors()], 422);
        }

        $validatedData = $validated->validated();

        $user = new User();
        $user->name = $validatedData['name'];
        $user->email = $validatedData['email'];
        $user->password = Hash::make($validatedData['password']);

        $user->save();

        return response()->json([
            "success",
            "name" => $user->name,
            "email" => $user->email,
        ]);
    }

    public function Login(Request $r)
    {
        $validator = Validator::make($r->all(), [
            "email" => "required",
            "password" => "required",
        ]);
        if ($validator->fails()) {
            return response()->json(["error" => $validator->errors()], 422);
        }
        $credentials = $validator->validated();
        if (!Auth::attempt($credentials)) {
            return response()->json(["error" => "Invalid credentials"], 401);
        }

        $user  = Auth::user();
        $token = $user->createToken('user_' . Auth::user()->email)->plainTextToken;


        return response()->json([
            "success",
            "name" => $user->name,
            "email" => $user->email,
        ]);
    }
}
