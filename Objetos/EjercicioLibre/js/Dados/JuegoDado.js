import { Dado } from './Dado.js';

$(document).ready(function () {
    let dados = [];
    let nTiradas = 1;
    $("#juego").hide();
    $("#divReiniciar").hide();

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

        for (let i = 0; i < dados.length; i++) {
            console.log("Lados del dado " + (i + 1) + ": " + dados[i].getRandom())
        }

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

    $('#tirada').click(function () {
        let fila = "<tr>";
        fila += "<td><b>" + nTiradas + "</b></td>"
        for (let i = 0; i < dados.length; i++) 
            fila += "<td>" + dados[i].getRandom() + "</td>";
        
        fila += "</tr>";
        $('#tabla').append(fila);

        if (nTiradas === 6)
            $("#tirada").prop('disabled', true);

        nTiradas++;
    });


    $('#reiniciar').click(function () {
        location.reload();
    });


});