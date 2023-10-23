<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="inicio.css">
</head>
<body>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nombre = $_POST["nombre"];
        $apellido = $_POST["apellido"];
        $edad = $_POST["edad"];
        $celular = $_POST["celular"];
        $correo = $_POST["correo"];
        $direccion = $_POST["direccion"];
        $dni = $_POST["dni"];
        $contraseña = password_hash($_POST["contraseña"], PASSWORD_DEFAULT);

        $usuario = [
            'nombre' => $nombre,
            'apellido' => $apellido,
            'edad' => $edad,
            'celular' => $celular,
            'correo' => $correo,
            'direccion' => $direccion,
            'dni' => $dni,
            'contraseña' => $contraseña,
        ];

        // Guardar en un archivo de texto
        file_put_contents("usuarios/{$correo}.txt", json_encode($usuario));

        echo "<div class='mensaje-exito'>Usuario registrado exitosamente. Ahora puedes iniciar sesión.</div>";
    }
    ?>

</body>
</html>