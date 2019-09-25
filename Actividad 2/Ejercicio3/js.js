/*Calcula el numero de cafés, coca colas y hamburguesas que vas a tomar el resto de tu vida:
 *La función recibirá el número de los productos descritos previamente, así como tu edad.
 *Posteriormente calcularás que vas a vivir entre 90 o 100 años “este dato cambiará por cada ejecución”.
 *Finalmente, calcularás los años que te quedan y sacarás el computo de productos que vas a consumir.
 *El ejercicio deberá de ejecutar tres veces la función...
 */
let calcularProd = (edad, nProd) =>{ 
    let esperanzaVida = parseInt(Math.random() * (50 - 95) + 95);
    document.write("Se espera que vivas entre " + esperanzaVida + " o " + (esperanzaVida+10) + " años.<br>");
    if (edad > esperanzaVida) 
        document.write("Ya has pasado esa edad<br>");
    else{
        let vida = esperanzaVida - edad;
        let cuantosProd = parseInt(nProd * vida);
        document.write("Habiendo tomado " + nProd + " en " + edad + " años se calcula que comeras/beberas " + cuantosProd + " Cafes, Cocacolas o hamburguesas.<br><br>")
    }
}
for (let i = 0; i < 3; i++){
    let edad = parseInt(prompt("¿Que edad tienes?"));
    let nProd = parseInt(prompt("¿Que cantidad de productos has tomado (Cafe, Cocacola y Hamburguesas)?"));
    calcularProd(edad, nProd);
}