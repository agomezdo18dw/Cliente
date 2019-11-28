import { Tanque } from './Tanque.js';

$(document).ready(function () {
    let tanksArray = [];
    let tanques = '{"tanque":[{"modelo": "Tiger I", "pais": "Alemania", "tipo": "Tanque pesado", "velocidad": "20-45km/h", "artilleria": "KwK 36 L/56 de 8,8 cm", "peso": "57,8T", "longitud": "8,45m", "anchura": "3,55m", "altura": "3m", "tripulacion": "5"}, {"modelo": "T-34", "pais": "Union Sovietica", "tipo": "Tanque medio", "velocidad": "26-55km/h", "artilleria": "F-34 de 76,2 mm o ZiS-5/D-5 de 85 mm", "peso": "26-30,9T", "longitud": "6,75m", "anchura": "3,6m", "altura": "2,45m", "tripulacion": "4"}, {"modelo": "M4 Sherman", "pais": "Estados Unidos", "tipo": "Tanque medio", "velocidad": "35-48km/h", "artilleria": "Cañón M3 75 mm L/40 o Cañón M1 76 mm u obús M4 105 mm​", "peso": "30,3-38,1T", "longitud": "5,64-6-27m", "anchura": "2,62-2,99m", "altura": "2,74-2-97m", "tripulacion": "5"}]}';
    let tanks = JSON.parse(tanques);
    for (let i = 0; i < 3; i++)
        tanksArray[i] = new Tanque(tanks.tanque[i].modelo, tanks.tanque[i].pais, tanks.tanque[i].tipo, tanks.tanque[i].velocidad, tanks.tanque[i].artilleria, tanks.tanque[i].peso, tanks.tanque[i].longitud, tanks.tanque[i].anchura, tanks.tanque[i].altura, tanks.tanque[i].tripulacion);

    let insercion = document.getElementById("tabla");
    let tabla = "<table border=1>";
    tabla += "<tr>";
    tabla += "<th>Numero</th>"
    tabla += "<th>Modelo</th>";
    tabla += "<th>Pais</th>";
    tabla += "<th>Tipo</th>";
    tabla += "<th>Velocidad</th>";
    tabla += "<th>Artilleria</th>";
    tabla += "<th>Peso</th>";
    tabla += "<th>Longitud</>";
    tabla += "<th>Anchura</th>";
    tabla += "<th>Altura</th>";
    tabla += "<th>Tripulacion</th>";
    tabla += "</tr>";
    for (let i = 0; i < tanksArray.length; i++) {
        tabla += "<tr>";
        tabla += "<td>" + (i+1) + "</td>"
        tabla += "<td>" + tanksArray[i].getModelo() + "</td>";
        tabla += "<td>" + tanksArray[i].getPais() + "</td>";
        tabla += "<td>" + tanksArray[i].getTipo() + "</td>";
        tabla += "<td>" + tanksArray[i].getVelocidad() + "</td>";
        tabla += "<td>" + tanksArray[i].getArtilleria() + "</td>";
        tabla += "<td>" + tanksArray[i].getPeso() + "</td>";
        tabla += "<td>" + tanksArray[i].getLongitud() + "</td>";
        tabla += "<td>" + tanksArray[i].getAnchura() + "</td>";
        tabla += "<td>" + tanksArray[i].getAltura() + "</td>";
        tabla += "<td>" + tanksArray[i].getTripulacion() + "</td>";
        tabla += "</tr>"

    }
    tabla += "</table>"
    insercion.innerHTML = tabla;
});