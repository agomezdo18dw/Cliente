/*Calculo de la edad de tu perro o gato.
 *Crea una función que calcule la edad de tu perro o tu gato.
 *La función recibirá la edad de tu mascota y realizará la *conversión:
 *1 año humano = 7 años de un perro</i>
 *El ejercicio deberá de ejecutar tres veces la función...
 */
let calcularEdad = () => {
    let animal = prompt("¿Que mascota tienes?");
    let edad = parseInt(prompt("¿Que edad tiene esa mascota?"));
    if (animal == "perro"){
        let edadP = edad * 7;
        document.write("Tu perro tiene "+edad+" en años humanos, en años de perros tiene "+edadP+" años<br>");
    }
    else {
        switch(edad){
            case 1:
                document.write("Tu gato tiene "+edad+" en años humanos, en años de gatos tiene 15 años<br>");
                break;
            case 2:
                document.write("Tu gato tiene "+edad+" en años humanos, en años de gatos tiene 24 años<br>");
                break;
            case 3:
                document.write("Tu gato tiene "+edad+" en años humanos, en años de gatos tiene 28 años<br>");
                break;
            case 4:
                document.write("Tu gato tiene "+edad+" en años humanos, en años de gatos tiene 32 años<br>");
                break;
            case 5:
                document.write("Tu gato tiene "+edad+" en años humanos, en años de gatos tiene 36 años<br>");
                break;
            case 6:
                document.write("Tu gato tiene "+edad+" en años humanos, en años de gatos tiene 40 años<br>");
                break;
            case 7:
                document.write("Tu gato tiene "+edad+" en años humanos, en años de gatos tiene 44 años<br>");
                break;
            case 8:
                document.write("Tu gato tiene "+edad+" en años humanos, en años de gatos tiene 48 años<br>");
                break;
            case 9:
                document.write("Tu gato tiene "+edad+" en años humanos, en años de gatos tiene 52 años<br>");
                break;
            case 10:
                document.write("Tu gato tiene "+edad+" en años humanos, en años de gatos tiene 56 años<br>");
                break;
            case 12:
                document.write("Tu gato tiene "+edad+" en años humanos, en años de gatos tiene 60 años<br>");
                break;
            case 13:
                document.write("Tu gato tiene "+edad+" en años humanos, en años de gatos tiene 64 años<br>");
                break;
            case 14:
                document.write("Tu gato tiene "+edad+" en años humanos, en años de gatos tiene 68 años<br>");
                break;
            case 15:
                document.write("Tu gato tiene "+edad+" en años humanos, en años de gatos tiene 72 años<br>");
                break;
            case 176:
                document.write("Tu gato tiene "+edad+" en años humanos, en años de gatos tiene 76 años<br>");
                break;
            case 17:
                document.write("Tu gato tiene "+edad+" en años humanos, en años de gatos tiene 80 años<br>");
                break;
            case 18:
                document.write("Tu gato tiene "+edad+" en años humanos, en años de gatos tiene 84 años<br>");
                break;
            case 19:
                document.write("Tu gato tiene "+edad+" en años humanos, en años de gatos tiene 88 años<br><br>");
                break;
            case 20:
                document.write("Tu gato tiene "+edad+" en años humanos, en años de gatos tiene 92 años<br>");
                break;
            default:
                document.write("Tu gato esta muerto<br>");
            break;
        }
    }
}
for(let i = 0; i < 3; i++){
    calcularEdad();
}
