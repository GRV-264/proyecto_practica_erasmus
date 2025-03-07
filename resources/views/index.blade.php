<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- --- Título --- -->
    <title>Codeon Pack</title>

    <!-- ---- Icon ---- -->
    <link rel="icon" href="img/header/icon.png" sizes="16x16" type="image/png">
    <link rel="icon" href="img/header/icon.png" sizes="32x32" type="image/png">
    <link rel="icon" href="img/header/icon.png" sizes="48x48" type="image/png">

    <!-- Tipografía -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap" />

    <!-- CSS de Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" 
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

    <!--  --- Directivas --- -->
    <!-- CSS -->
    @vite("resources/css/app.css")

    <!-- JS -->
    @vite("resources/js/app.js")

</head>

<body>
    <div>
        <!-- --- Flash messages --- -->
        @include('shared.flash-message')
        @yield('content')

        <!--  --- Componenete Principal --- -->
        <div id="root"></div>
    </div>

    <!-- JavaScript de Bootstrap -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" 
    integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    </script>
</body>

</html>