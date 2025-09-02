<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any}', function () {
    return view('welcome'); // Vue アプリを表示する Blade
})->where('any', '.*');
