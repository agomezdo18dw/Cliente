/*Escribir un programa que escriba en pantalla los divisores de un número dado*/
/*Pedimos un numero a los usuarios*/
let num1 = parseInt(prompt("Introduce un numero", "0"));
/*Calculamos los divisores del numero*/
for (let i = 1; i <= num1; i++) {
    if (num1 % i == 0)
        document.write(i + "<br>");
}