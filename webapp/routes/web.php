<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect('/membership');
});

Route::get('/membership', function () {
    return view('membership', ['siteSettings' => null]);
});
