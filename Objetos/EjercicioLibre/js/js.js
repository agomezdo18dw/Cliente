import { Tanque } from 'js/Tanque.js';

$(document).ready(function () {
    let tanques = '{"tanque":[{"modelo": "Tiger I", "fabricante": "Henschel", "pais": "Alemania", "tipo": "Tanque pesado", "velocidad": "20-45km/h", "artilleria": "KwK 36 L/56 de 8,8 cm", "peso": "57,8T", "longitud": "8,45m", "anchura": "3,55m", "altura": "3m", "tripulacion": "5"}, {"modelo": "T-34", "fabricante": "Fabrica Diesel Nº 75, Fábrica Kirov Nº 185, Fábrica Dinamo de Moscú, KhPZ Nº 183, Fábrica de Tractores de Stalingrado (STZ) y Fábrica Krasnoye Sormovo No. 112", "pais": "Union Sovietica", "tipo": "Tanque medio", "velocidad": "26-55km/h", "artilleria": "F-34 de 76,2 mm o ZiS-5/D-5 de 85 mm", "peso": "26-30,9T", "longitud": "6,75m", "anchura": "3,6m", "altura": "2,45m", "tripulacion": "4"}, {"modelo": "M4 Sherman", "fabricante": "Pressed Steel Car Company, Baldwin Locomotive Works, American Locomotive Co., Pullman-Standard Car Company y Detroit Tank Arsenal ", "pais": "Estados Unidos", "tipo": "Tanque medio", "velocidad": "35-48km/h", "artilleria": "Cañón M3 75 mm L/40 o Cañón M1 76 mm u obús M4 105 mm​", "peso": "30,3-38,1T", "longitud": "5,64-6-27m", "anchura": "2,62-2,99m", "altura": "2,74-2-97m", "tripulacion": "5"}]}';
    tanks = JSON.parse(tanques);
    for (let tanque in tanks.tanque){
        let nuevoTanque = new Tanque(tanks.tanque[tanque].modelo, tanks.tanque[tanque].fabricante, tanks.tanque[tanque].pais, tanks.tanque[tanque].tipo, tanks.tanque[tanque].velocidad, tanks.tanque[tanque].artilleria, tanks.tanque[tanque].peso, tanks.tanque[tanque].longitud, tanks.tanque[tanque].anchura, tanks.tanque[tanque].altura, tanks.tanque[tanque].tripulacion);
    }
});
