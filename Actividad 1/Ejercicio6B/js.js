/*Escribir un programa en el que se cree un array de 5 numeros (entre el 1 y el 1000) aleatoriamente y nos diga cuales son primos*/
/*Creamos el array*/
let numeros = [];
/*Generamos un bucle para autocompletar el array con numeros aleatorios*/
for (let i = 0; i < 5; i++) {
    let j = parseInt(Math.random() * (1000 - 1));
    numeros.push(j);
    }
/*Mostramos el array con los numeros que ha generado para saber cuales son*/
document.write("Tenemos los siguientes numeros: " + numeros + "<br>")

let contador = 0;
/*Recorremos el array*/
for (let i = 0; i < numeros.length; i++) {
    /*Comprobamos si el numero es primo o no*/
    for (let j = numeros[i]; j >= 0; j--)
        if (numeros[i] % j == 0)
            contador++;
    /*Si finalmente es primo lo escribimos y sino decimos que no lo es*/
    if (contador == 2)
        document.write("<br> El numero " + numeros[i] + " es primo");
    else
        document.write("<br> El numero " + numeros[i] + " no  es primo");
}