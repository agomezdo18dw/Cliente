/*Función que convierte los grados de  Celsius a Fahrenheit o viceversa. El usuario 
 *introducirá la temperatura junto con el tipo de cambio que quiere realizar.
 *Nota: tendréis que investigar como es la conversión y únicamente se podrá emplear una función para las dos conversiones.
 *El ejercicio deberá de ejecutar tres veces la función...
 */
let temperatura = (temp, tipoTemp) =>{ 
    if (tipoTemp == "c"){
        let tempFinal = (temp * 9 / 5) + 32
        document.write("La temperatura " + temp + "ºC son: " + tempFinal + "ºF<br>");
    }
    else {
        let tempFinal = (temp - 32) * 5 / 9;
        document.write("La temperatura " + temp + "ºF son: " + tempFinal + "ºC<br>");
    }
}
for (let i = 0; i < 3; i++){
    let temp = parseInt(prompt("¿Que temperatura hace?"));
    let tipoTemp = prompt("¿En que tipo de temperatura lo has dicho?(C o F)");
    temperatura(temp, tipoTemp);
}