<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <title>Reto0/Actores</title>
    <link rel="stylesheet" href="css/index.css">
    <?php $fechaPHP = date('Y/m/d - H:i:s');?>
    <script src="js/js.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="jquery.translate.js"></script>
</head>
<body>
    <div id="container">
        <header>
            <div id="reloj" class="reloj" class="trn" data-trn-key="fechaHora">Cargando Fecha y hora...</div>
            <div id="idiomas">
                <div class="nose" onclick="cambiarIdioma('es')">
                    <img src="img/banderaEspa%C3%B1a.webp" onclick="cambiarIdioma('es')">
                </div>
                <div class="nose" onclick="cambiarIdioma('es')">
                    <img src="img/bandera-ingl%C3%A9s.png.webp" onclick="cambiarIdioma('en')">
                </div>
                <div class="nose" onclick="cambiarIdioma('es')">
                    <img src="img/ikurri%C3%B1a.png" onclick="cambiarIdioma('eu')">
                </div>
            </div>
        </header>
        <nav>
            <ul>
                <li><a href="Desc.php">Descripcion</a></li>
                <li><a href="Temp.php">Temporadas</a></li>
                <li><a href="Act.php">Actores</a></li>
                <li><a href="Merch.php">Merchandising</a></li>
                <li><a href="Mult.php">Multimedia</a></li>
                <li style="float:right"><a href="Index.php" id="active">Inicio</a></li>
            </ul>
        </nav>
        <section>
            
            <div id="datos">
                <h2>El equipo A</h2>
                <dl>
                    <dt><b>Duracion cap. :</b></dt><br>
                        <dd> 60 minutos</dd>
                </dl><br>
                <dl>
                    <dt><b>Genero :</b></dt><br>
                        <dd>Accion, aventura</dd>
                </dl><br>
                <dl>
                    <dt><b>Información :</b></dt><br>
                        <dd>Serie TV (1983-1987)</dd>
                </dl><br>
                <dl>
                    <dt><b>Sinopsis :</b></dt><br>
                        <dd>Narra las andanzas de un grupo de cuatro soldados desertores de la guerra de Vietnam, que trabajan como mercenarios, siempre por causas justas.</dd>
                </dl>
            </div>
            <img id="FotSin" src="img/Sinops.jpg" alt="FotError" >
        </section>
        <footer>
            <p>Adrián Gómez, Samuel Rodríguez, Iñigo Perez @ Zubiri manteo
                <script>
                    document.write('<?php echo "$fechaPHP";?>');
                </script>
            </p>
        </footer>
        <script>
            var dict = {
                "fechaHora": {
                    en: "Charging date and hour...",
                    eu: "Data eta ordua kargatzen...",
                    es: "Cargando Fecha y hora..."
                },
                "t2": {
                    en: "Im 20 years old",
                    eu: "20 urte ditut",
                    es: "Tengo 20 años"
                },
                "t3": {
                    en: "See you later",
                    eu: "Geroarte",
                    es: "Asta luego"
                },
            }
            function cambiarIdioma(idioma){
                var translator = $('body').translate({lang: idioma, t: dict});
        }
        </script>
    </div>
</body>
</html>
