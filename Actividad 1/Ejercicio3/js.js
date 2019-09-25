/*Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.*/
/*Pedimos dos numeros a los usuarios*/
let num1 = prompt("Introduce un numero", "0");
let num2 = prompt("Introduce otro numero", "0");
/*Pasamos los String a int*/
int1 = parseInt(num1);
int2 = parseInt(num2);
/*Calculamos que numero es mas grande y lo mostramos*/
if (int1 > int2)
    document.write("El primer numero es mayor")
else if (int2 > int1)
    document.write("El segundo numero es mayor")
else
    document.write("Los numeros son iguales")