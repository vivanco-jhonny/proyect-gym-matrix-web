<!DOCTYPE html>
<html lang="es"> 
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Contacto</title>
    <link rel="stylesheet" href="inicio.css">
</head>
<body>
    <h2>¡Mensaje enviado!</h2>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nombre = $_POST["nombre"];
        $correo = $_POST["correo"];
        $celular = $_POST["celular"];
        $dni = $_POST["dni"];
        $mensaje = $_POST["mensaje"];

        // Carpeta donde se guardarán los comentarios
        $carpeta_comentarios = "comentarios/";

        // Crea la carpeta si no existe
        if (!is_dir($carpeta_comentarios)) {
            mkdir($carpeta_comentarios, 0777, true);
        }
        
        // Nombre del archivo
        $archivo = $carpeta_comentarios . "datos_formulario.txt";

        // Código para guardar los datos en un archivo de texto
        $datos_a_guardar = "Nombre: $nombre\nCorreo: $correo\nCelular: $celular\nDNI: $dni\nMensaje: $mensaje\n\n";
        $gestor = fopen($archivo, "a");
        fwrite($gestor, $datos_a_guardar);
        fclose($gestor);
        
        echo "<div class='mensaje-exito'>Gracias por contactarnos, $nombre. Te responderemos a tu correo $correo.</div>";
    }
    ?>

</body>
</html>