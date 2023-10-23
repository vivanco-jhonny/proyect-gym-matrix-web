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
        $correo = $_POST["correo"];
        $contraseña = $_POST["contraseña"];

        // Leer el archivo de usuario
        $archivo = "usuarios/{$correo}.txt";

        if (file_exists($archivo)) {
            $usuario = json_decode(file_get_contents($archivo), true);

            // Verificar la contraseña
            if (password_verify($contraseña, $usuario['contraseña'])) {
                echo "<div class='mensaje-exito'>Inicio de sesión exitoso. Bienvenido, {$usuario['nombre']} {$usuario['apellido']}!</div>";
            } else {
                echo "<div class='mensaje-exito'>La contraseña es incorrecta.</div>";
            }
        } else {
            echo "<div class='mensaje-exito'>Usuario no encontrado. Por favor, registra una cuenta.</div>";
        }
    }
?>

</body>
</html>