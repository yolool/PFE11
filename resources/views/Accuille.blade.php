<!DOCTYPE html>
    <html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">

            <title>Laravel</title>

            <!-- Fonts -->
            <link rel="preconnect" href="https://fonts.bunny.net">
            <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />

            @vitereactrefresh
            @vite(['resources/js/app.js','resources/sass/app.scss'])

            <style>
                /* Add custom styles here */
            </style>
        </head>
        <body >
            <div id="acc"></div>
        </body>
    </html>
