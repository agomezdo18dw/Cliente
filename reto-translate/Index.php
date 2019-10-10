<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <title>Reto0/Actores</title>
    <link rel="stylesheet" href="css/index.css">
    <?php $fechaPHP = date('Y/m/d - H:i:s');?>
    <script src="js/js.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="js/jquery.translate.js"></script>
    <script type="text/javascript" src="js/Diccionario.js"></script>
</head>
<body>
    <div id="container">
        <header>
            <div id="reloj" class="reloj, trn" data-trn-key="fechaHora">Cargando Fecha y hora...</div>
            <div id="idiomas">
                <div class="nose" onclick="cambiarIdioma('es')">
                    <img src="img/banderaEspa%C3%B1a.webp">
                </div>
                <div class="nose" onclick="cambiarIdioma('en')">
                    <img src="img/bandera-ingl%C3%A9s.png.webp">
                </div>
                <div class="nose" onclick="cambiarIdioma('eu')">
                    <img src="img/ikurri%C3%B1a.png">
                </div> 
            </div>
        </header>
        <nav>
            <ul>
                <li><a href="Desc.php" class="trn" data-trn-key="desc"><label>Descripcion</label></a></li>
                <li><a href="Temp.php" class="trn" data-trn-key="temp">Temporadas</a></li>
                <li><a href="Act.php" class="trn" data-trn-key="act">Actores</a></li>
                <li><a href="Merch.php" class="trn" data-trn-key="merch">Merchandising</a></li>
                <li><a href="Mult.php" class="trn" data-trn-key="mult">Multimedia</a></li>
                <li style="float:right"><a href="Index.php" id="active" class="trn" data-trn-key="ini">Inicio</a></li>
            </ul>
        </nav>
        <section>
            
            <div id="datos">
                <h2 class="trn" data-trn-key="tit">El equipo A</h2>
                <dl>
                    <dt><b class="trn" data-trn-key="dur">Duracion media del cap.:</b></dt><br>
                        <dd class="trn" data-trn-key="mins"> 60 minutos</dd>
                </dl><br>
                <dl>
                    <dt><b class="trn" data-trn-key="gen">Genero:</b></dt><br>
                        <dd class="trn" data-trn-key="gen2">Accion, aventura</dd>
                </dl><br>
                <dl>
                    <dt><b class="trn" data-trn-key="inf">Información:</b></dt><br>
                        <dd class="trn" data-trn-key="inf2">Serie TV (1983-1987)</dd>
                </dl><br>
                <dl>
                    <dt><b class="trn" data-trn-key="sin">Sinopsis:</b></dt><br>
                        <dd class="trn" data-trn-key="sin2">Narra las andanzas de un grupo de cuatro soldados desertores de la guerra de Vietnam, que trabajan como mercenarios, siempre por causas justas.</dd>
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
    </div>
</body>
</html>
