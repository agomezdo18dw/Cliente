import { Dado } from './Dado.js';

$(document).ready(function () {
    var dados = [];
    $('#guardar').click(function () {
        let nDados = document.getElementById("nDados").value;
        let nLados = document.getElementById("nLados").value;
        for (let i = 0; i < nDados; i++){
            dados[i] = new Dado(nLados)
        }
        for (let i = 0; i < dados.length; i++){
            console.log("Lados del dado "+i+": "+dados[i].getLados())
        }
    });
});