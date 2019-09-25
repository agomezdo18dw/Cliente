/*Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.*/
/*Pedimos tres numeros al usuario*/
let num1 = prompt("Introduce un numero", "0");
let num2 = prompt("Introduce otro numero", "0");
let num3 = prompt("Introduce un ultimo numero", "0");
/*Convertimos los string a int*/
int1 = parseInt(num1);
int2 = parseInt(num2);
int3 = parseInt(num3);
/*Calculamos que numero es mas grande y lo decimos*/
if (int1 > int2 && int1 > int3)
    document.write("El primer numero es el mayor");
else if (int2 > int1 && int2 > int3)
    document.write("El segundo numero es el mayor");
else if (int3 > int1 && int3 > int2)
    document.write("El tercer numero es el mayor");
else
    document.write("Los numeros son iguales");