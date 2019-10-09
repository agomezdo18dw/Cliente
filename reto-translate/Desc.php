<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <title>Reto0/Descripcion</title>
    <link rel="stylesheet" href="css/Descripcion.css">
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
                <li><a href="Desc.php" id="active">Descripcion</a></li>
                <li><a href="Temp.php">Temporadas</a></li>
                <li><a href="Act.php">Actores</a></li>
                <li><a href="Merch.php">Merchandising</a></li>
                <li><a href="Mult.php">Multimedia</a></li>
                <li style="float:right"><a href="Index.php">Inicio</a></li>
            </ul>
        </nav>
        <section>
            <h3>Descripcion</h3>
            <p>Oficialmente se dice que durante la guerra de Vietnam, el coronel Samuel Morrison 
                ordena al A-Team que ataque el Banco de Hanoi para ayudar a la finalización de la guerra. 
                El A-Team completa la misión con éxito, pero al volver a la base estadounidense cuatro 
                días después del fin de la guerra, la encuentran en ruinas por un ataque del Viet Cong y 
                todos los soldados muertos, también el coronel Samuel Morrison. Como no se pudo demostrar 
                que cumplían órdenes de un superior, ya que no quedaron pruebas de la misión, 
                fueron encarcelados en Fort Bragg por el ataque al banco, pero no tardaron en fugarse. 
                En la versión para cine es modificada por un hecho similar desarrollado en Irak.
            </p>
            <img src="img/equipoA2.jpg">
                
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
