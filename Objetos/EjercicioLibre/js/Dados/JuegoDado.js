//Importamos la clase Dado
import { Dado } from './Dado.js';

//Dejamos que cargue el documento entero
$(document).ready(function () {
    //Inicializamos el array donde se guardaran los dados
    let dados = [];
    //Creamos una variable para las tiradas
    let nTiradas = 1;
    //Escondemos y enseñamos los divs necesarios
    $("#juego").hide();
    $("#divReiniciar").hide();
    $("#ganador").hide();
    $("#perdedor").hide();
    //Comprobamos el valor de los input para que el boton salga de primeras disbled o abled segun si ya tiene unos valores validos
    let nDados = document.getElementById("nDados").value;
    let nLados = document.getElementById("nLados").value;
    if (nDados < '2' || nDados > '4')
        $("#jugar").attr("disabled", true);
    else if (nLados < '3' || nLados > '8')
        $("#jugar").attr("disabled", true);
    else
        $("#jugar").attr("disabled", false);

    //Creamos la validacion para que compruebe cada vez que se presione una tecla en los input
    $('input').keyup(function () {
        //Recogemos el valor de los input para comprobarlo a la hora de validar
        let nDados = document.getElementById("nDados").value;
        let nLados = document.getElementById("nLados").value;

        //Validacion de los input para que solo si es valida el boton se ponga en anbilitado
        if (nDados < '2' || nDados > '4')
            $("#jugar").attr("disabled", true);
        else if (nLados < '3' || nLados > '8')
            $("#jugar").attr("disabled", true);
        else
            $("#jugar").attr("disabled", false);
    });

    //Al pulsar en el boton de jugar
    $('#jugar').click(function () {
        //Recogemos los valores
        let nDados = document.getElementById("nDados").value;
        let nLados = document.getElementById("nLados").value;

        //Creo los dados con los lados dichos por el usuario y lo metemos en el array
        for (let i = 0; i < nDados; i++) {
            dados[i] = new Dado(nLados);
        }

        //Enseñamos y esocondemos los divs que queremos
        $("#inicio").hide();
        $("#divReiniciar").show();
        $("#juego").show();

        //Añadimos la informacion para que la vea el usuario y creamos la tabla donde se guardaran las tiradas con la cantidad de dados dicha
        $("#h3NDados").append(nDados);
        $("#h3NLados").append(nLados);

        let tabla = '<table border=1 id="tabla">';
        tabla += "<tr>";
        tabla += "<th>Tirada</th>"
        for (let i = 0; i < nDados; i++) {
            tabla += "<th>Dado " + (i + 1) + "</th>";
        }
        tabla += "<tr>";
        tabla += "</table>";

        document.getElementById("tiradas").innerHTML = tabla;
    });

    //Cada vez que se pulse el boton de tirar
    $('#tirar').click(function () {
        //Creamos un array donde guardar los numeros de las tiradas
        let numeros = [];
        //Echamos los dados y lo guardamos en el array
        for (let i = 0; i < dados.length; i++)
            numeros[i] = dados[i].getRandom();

        //Creamos una fila en la tabla con los valores de las tiradas
        let fila = "<tr>";
        fila += "<td><b>" + nTiradas + "</b></td>";
        for (let i = 0; i < numeros.length; i++)
            fila += "<td>" + numeros[i] + "</td>";
        fila += "</tr>";
        //Metemos la nueva fila en la tabla
        $('#tabla').append(fila);

        //PARA COMPROBAR SI LOS NUMEROS SON IGUALES
        //Metemos el array de tiradas en un array en el que se añadiran los numeros sin repetirse
        //EJ: numeros = [1,1,1,1] -> distinctNumeros = [1] ; numeros = [1,1,2,2,3] -> distinctNumeros = [1,2,3]
        let distinctNumeros = [...new Set(numeros)];

        //Si el nuevo array tiene un solo valor las tiradas tienen el mismo numero
        if (distinctNumeros.length === 1) {
            //Ponemos tirada en desabilitado para que no se pueda seguir tirando
            $("#tirada").prop('disabled', true);
            //Escondemos la informacion
            $("#juego").hide();
            //Creamos una variable para añadir las tiradas necesarias para ganar/perder
            let ganador = '';
            //Si hemos tirado solo una vez guardara la informacion en singular, sino en plural
            if (nTiradas === 1)
                ganador = "<h3>Has necesitado " + nTiradas + " tirada para ganar</h3><p>Dale al boton de <i>Volver a empezar</i> para reiniciar</p>";
            else
                ganador = "<h3>Has necesitado " + nTiradas + " tiradas para ganar</h3><p>Dale al boton de <i>Volver a empezar</i> para reiniciar</p>";
            //Metemos la informacion en el div y lo enseñamos
            $('#ganador').append(ganador);
            $("#ganador").show();
        }
        else if (nTiradas === 6) {
            //Si hemos echo mas de 6 tiradas se pone el bonton de tirar en disabled
            $("#tirar").prop('disabled', true);
            //Escondemos los datos de los dados
            $("#juego").hide();
            //Metemos en el div de perdedor la informacion y lo enseñamos
            let perdedor = "<h3>Tras 6 tiradas no has sido capaz de sacar los mismo numeros</h3><p>Dale al boton de <i>Volver a empezar</i> para reiniciar</p>"
            $('#perdedor').append(perdedor);
            $("#perdedor").show();
        }
        //Sumamos una tirada
        nTiradas++;
    });

    //Cuando pulsemos en reiniciar
    $('#reiniciar').click(function () {
        //Recargamos la pagina
        location.reload();
    });
});