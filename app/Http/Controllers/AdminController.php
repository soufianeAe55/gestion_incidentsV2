<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
Use Auth;
class AdminController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:admin');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $n=Auth::user()->name;
        return view('admin')->with('n',$n);
    }
}
