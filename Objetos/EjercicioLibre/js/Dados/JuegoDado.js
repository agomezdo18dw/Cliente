import { Dado } from './Dado.js';

$(document).ready(function () {
    let dados = [];
    let nTiradas = 1;
    $("#juego").hide();
    $("#divReiniciar").hide();
    $("#ganador").hide();
    $("#perdedor").hide();

    //Al pulsar en el boton de jugar
    $('#jugar').click(function () {
        //Recogemos los valores
        let nDados = document.getElementById("nDados").value;
        let nLados = document.getElementById("nLados").value;

        //Creo los dados con los lados dichos por el usuario
        for (let i = 0; i < nDados; i++) {
            dados[i] = new Dado(nLados)
        }

        //Enseñamos y esocondemos los divs que queremos
        $("#inicio").hide();
        $("#divReiniciar").show();
        $("#juego").show();

        //Añadimos la informacion para que la vea el usuario
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

    $('#tirar').click(function () {
        let numeros = [];
        for (let i = 0; i < dados.length; i++) 
            numeros[i] = dados[i].getRandom();
        
        let fila = "<tr>";
        fila += "<td><b>" + nTiradas + "</b></td>"
        for (let i = 0; i < numeros.length; i++) 
            fila += "<td>" + numeros[i] + "</td>";
        fila += "</tr>";
        $('#tabla').append(fila);
        
        let distinctNumeros = [...new Set(numeros)]

        if (distinctNumeros.length === 1){
            $("#tirada").prop('disabled', true);
            $("#juego").hide();
            let ganador = ''
            if (nTiradas === 1)
                ganador = "<h3>Has necesitado "+ nTiradas +" tirada para ganar</h3><p>Dale al boton de <i>Volver a empezar</i> para reiniciar</p>"
            else
                ganador = "<h3>Has necesitado "+ nTiradas +" tiradas para ganar</h3><p>Dale al boton de <i>Volver a empezar</i> para reiniciar</p>"
            $('#ganador').append(ganador);
            $("#ganador").show();
        }
        else if (nTiradas === 6) {
            $("#tirar").prop('disabled', true);
            $("#juego").hide();
            $("#perdedor").show();
            let perdedor = "<h3>Tras 6 tiradas no has sido capaz de sacar los mismo numeros</h3><p>Dale al boton de <i>Volver a empezar</i> para reiniciar</p>"
            $('#perdedor').append(perdedor);
        }
            
        nTiradas++;
    });


    $('#reiniciar').click(function () {
        location.reload();
    });


});