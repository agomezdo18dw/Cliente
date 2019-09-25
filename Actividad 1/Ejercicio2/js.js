/*Escribe un programa que pida un número, pida otro número y 
escriba el resultado desumar estos dos números.*/
/*Pedimosdos numeros al usuario*/
let num1 = prompt("Introduce un numero", "0");
let num2 = prompt("Introduce otro numero", "0");
/*Pasamos los String a int*/
int1 = parseInt(num1);
int2 = parseInt(num2);
/*Realizamos la suma de los numeros y la mostramos*/
document.write("La suma de " + num1 + " y " + num2 + " es: " + (int1 + int2));