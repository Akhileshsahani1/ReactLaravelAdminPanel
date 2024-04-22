<?php

namespace App\Http\Controllers\admin\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class AdminController extends Controller
{
     public function index(Request $request)
     {
         $users   = User::query();
         $users  = isset($request->name) ? $users->where('name', 'LIKE', '%' . $request->name . '%') : $users;
         $users = isset($request->email) ? $users->where('email','LIKE', '%' . $request->email . '%'): $users;
         $users = $users->orderBy('created_at','desc')->paginate(10);
          return response()->json([
            "users"=> $users,
          ],200);
     }
}
