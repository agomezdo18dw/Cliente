/*Calcula el numero de cafés, coca colas y hamburguesas que vas a tomar el resto de tu vida:
 *La función recibirá el número de los productos descritos previamente, así como tu edad.
 *Posteriormente calcularás que vas a vivir entre 90 o 100 años “este dato cambiará por cada ejecución”.
 *Finalmente, calcularás los años que te quedan y sacarás el computo de productos que vas a consumir.
 *El ejercicio deberá de ejecutar tres veces la función...
 */

//Funcion que calcula la cantidad de productos
let calcularProd = (edad, nProd) =>{ 
    //Calculamos la esperanza de vida aleatoriamente y la enseñamos
    let esperanzaVida = parseInt(Math.random() * (65 - 95) + 95);
    document.write("Se espera que vivas entre " + esperanzaVida + " o " + (esperanzaVida+10) + " años.<br>");
    //Si la edad es mayor a la esperanza de vida muestra que se ha pasado la edad sino hace la operacion y la enseña
    if (edad > esperanzaVida) 
        document.write("Ya has pasado esa edad<br>");
    else{
        let vida = esperanzaVida - edad;
        let cuantosProd = parseInt(nProd * vida);
        document.write("Habiendo tomado " + nProd + " en " + edad + " años se calcula que comeras/beberas " + cuantosProd + " Cafes, Cocacolas o hamburguesas.<br><br>")
    }
}

//Bucle que repite el ejercicio 3 veces
for (let i = 0; i < 3; i++){
    let edad = parseInt(prompt("¿Que edad tienes?"));
    //Si la edad es mayor a 100 o menos a 0 pide de nuevo la edad
    if (edad > 99 || edad < 0)
        while (edad > 99 || edad < 0)
            edad = parseInt(prompt("Esa edad es imposible, ¿Que edad tienes?"));
    let nProd = parseInt(prompt("¿Que cantidad de productos has tomado (Cafe, Cocacola y Hamburguesas)?"));
    //Calculamos la cantidad de productos
    calcularProd(edad, nProd);
}