/*Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad)*/
/*Pedimos un numero a los usuarios*/
let num1 = prompt("Introduce un numero", "0");
/*Comprobamos si el numero es primo*/
let contador = 0;
for (let i = 1; i <= num1; i++)
    if (num1 % i == 0)
        contador ++;
/*Si el numero es primo lo decimos, sino decimos que no lo es*/
if (contador == 2)
    document.write("El numero " + num1 + " es primo");
else
    document.write("El numero " + num1 + " no es primo");