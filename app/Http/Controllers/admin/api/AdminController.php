<?php

namespace App\Http\Controllers\admin\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class AdminController extends Controller
{
     public function index()
     {
         $users = User::orderBy("created_at","desc")->paginate(10);
          return response()->json([
            "users"=> $users,
          ],200);
     }
}
