<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <title>Reto0/Actores</title>
    <link rel="stylesheet" href="css/Actores.css">
    <?php $fechaPHP = date('Y/m/d - H:i:s');?>
    <script src="js/js.js"></script>
</head>
<body>
    <div id="container">
        <header>
            <div id="reloj" class="reloj">Cargando Fecha y hora...</div>
        </header>
        <nav>
            <ul>
                <li><a href="Desc.php">Descripcion</a></li>
                <li><a href="Temp.php">Temporadas</a></li>
                <li><a href="Act.php" id="active">Actores</a></li>
                <li><a href="Merch.php">Merchandising</a></li>
                <li><a href="Mult.php">Multimedia</a></li>
                <li style="float:right"><a href="Index.php">Inicio</a></li>
            </ul>
        </nav>
        <section>
            <table>
                <tr id="tr1">
                    <td class="AP"><h3>Actor y Personaje</h3></td>
                    <td><h3>Descripcion</h3></td>
                    <td><h3>Imagen</h3></td>
                </tr>
                <tr>
                    <td class="AP"><b>George Peppard</b></td>
                    <td class="info">Encarna al coronel John "Hannibal" Smith el cual es el cerebro del equipo. Este veterano de la guerra de Vietnam recibe su apodo en honor del famoso general cartaginés. Además Smith es un destacado estudioso de la guerra y siempre está listo para actuar. Su frase más conocida es «Me encanta que los planes salgan bien». Es muy aficionado a disfrazarse y en su tiempo libre solía ejercer como actor.</td>
                    <td class="image"><img src="img/george-peppard.jpg"></td>
                </tr>
                <tr>
                    <td class="AP"><b>Dwight Schultz</b></td>
                    <td class="info">Hace de El capitán H. M. Howling Mad Murdock o Loco Murdock el cual se hace pasar por un enfermo mental siendo un experto piloto de aviones de guerra y helicópteros, que realizó misiones en Vietnam y suele discutir con su compañero Baracus. Está internado en un hospital psiquiátrico pero a la hora de las misiones, sus compañeros lo suelen ayudar a escapar.</td>
                    <td class="image"><img src="img/Dwight%20Schultz.jpg"></td>
                </tr>
                <tr>
                    <td class="AP"><b>Dirk Benedict</b></td>
                    <td class="info">Encarna al teniente Templeton Peck Faceman, un sex symbol que se encarga de proveer al equipo de material difícil de conseguir mediante el uso del timo. En el primer capítulo de la primera temporada (El pueblo de San Río Blanco), el actor que encarnaba al personaje era Tim Dunigan pero fue inmediatamente sustituido por Dirk Benedict puesto que los productores pensaban que Dunigan era demasiado joven para encarnar a un veterano de la guerra de Vietnam.</td>
                    <td class="image"><img src="img/Dirk%20Benedict.jfif"></td>
                </tr>
                <tr>
                    <td class="AP"><b>Mr. T</b></td>
                    <td class="info">Hace del sargento Bosco Albert B. A. Baracus, Mario Baracus o M.A. el cual es un experto mecánico y conductor, a pesar de su enorme fuerza y mal carácter, tiene miedo a volar, lo que ocasiona problemas al resto del equipo. No se lleva bien con Murdock, del que desconfía siempre e insta normalmente a trasladarse en avión para según qué misiones. Solía conducir la furgoneta GMC, asustándose cuando otro lo hacía, y llevar colgantes de oro.</td>
                    <td class="image"><img src="img/mr%20t.jfif"></td>
                </tr>
            </table>
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
