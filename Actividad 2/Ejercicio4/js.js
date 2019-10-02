/*Función que convierte los grados de  Celsius a Fahrenheit o viceversa. El usuario 
 *introducirá la temperatura junto con el tipo de cambio que quiere realizar.
 *Nota: tendréis que investigar como es la conversión y únicamente se podrá emplear una función para las dos conversiones.
 *El ejercicio deberá de ejecutar tres veces la función...
 */

//Funcion que calcula los Celsius en Fahrenheit y viceversa 
let temperatura = (temp, tipoTemp) =>{ 
    //Comprueba si es en celsius o en fahrenheit y los calcula segun cual sea
    if (tipoTemp == "c" || tipoTemp == "C"){
        let tempFinal = (temp * 9 / 5) + 32
        document.write("La temperatura " + temp + "ºC son: " + tempFinal + "ºF<br>");
    }
    else if (tipoTemp == "f" || tipoTemp == "F"){
        let tempFinal = (temp - 32) * 5 / 9;
        document.write("La temperatura " + temp + "ºF son: " + tempFinal + "ºC<br>");
    }
}

//Bucle que repite el ejercicio 3 veces
for (let i = 0; i < 3; i++){
    let temp = parseInt(prompt("¿Que temperatura hace?"));
    let tipoTemp = prompt("¿En que tipo de temperatura lo has dicho?(C o F)");
    //Intento de validacion pero no va y nose porque
    /*if (tipoTemp == "C" || tipoTemp == "c" || tipoTemp == "F" || tipoTemp == "f")
        while (tipoTemp !== "C" || tipoTemp !== "c" || tipoTemp !== "F" || tipoTemp !== "f")
            tipoTemp = prompt("Solo se puede poner C o F, ¿En que tipo de temperatura lo has dicho?");*/
    temperatura(temp, tipoTemp);
}