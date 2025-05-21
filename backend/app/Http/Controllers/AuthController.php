<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{


    public function Register(Request $r)
    {
        $validated  = Validator::make($r->all(), [
            'name' => "required",
            'password' => "required|",
            'email' => "required|unique"

        ]);
        if ($validated->fails()) {
            return response()->json(["error" => $validated->errors()], 500);
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

    // public function Login()
    // {
    //     return response()->json([

    //         "success" => "hellThere"
    //     ], 200);
    // }
}
