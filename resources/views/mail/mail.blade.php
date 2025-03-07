<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>

<body>

    <!-- ------------- Email Template ------------- -->

    <h1>CODEON PACK</h1>
    <br />

    <p>
        Guida Gratuita
        <br />
        Da una migliore gestione dell'inventario a strategie di marketing personalizzate,
        i codici univoci possono rivoluzionare la tua azienda. Ecco una guida su come trarre
        il massimo beneficio dall'adozione di questa tecnologia.
        <br />
        Grazie per aver creduto in noi.
    </p>

    <br /><br /><br />
    <a href="http://127.0.0.1:8000/"><img src="{{ $message->embed(public_path() . '/img/header/group-27.svg') }}" alt="Imagen"></a>
    <br /><br />

    <span>Tel: +39 123456789</span>
    <br />
    <span>Email: codeonpack@example.com</span>

</body>

</html>