/*Crea una función que recibirá por parámetro tu nombre y  apellido y sacará por consola lo siguiente:
 *Hola nombre apellido, vas a tener X hijos y vivirás en la ciudad de Y 
 *Tanto X e Y serán variables. El ejercicio deberá de ejecutar tres veces la función...
 */

//Funcion que comprueba si hay numeros en el texto que le introduzcamos
let tieneNumeros = (texto) => {
    //Creamos un string con los numeros
    const numeros = "0123456789";
    //Bucle que comprueba si en el texto hay numeros al leer letra con letra con el estring de antes
    for(i=0; i < texto.length; i++){
        if (numeros.indexOf(texto.charAt(i),0) != -1){
            return true;
        }
    }
    return false;
}

//Funcion que comprueba si hay simbolos en el texto que le introduzcamos
let tieneSimbolos = (texto) => {
    //Creamos un string con los simbolos
    const numeros = "!=?¿.,/&%$'-_;:<>[]{}";
    //Bucle que comprueba si en el texto hay simbolos al leer letra con letra con el estring de antes
    for(i=0; i < texto.length; i++){
        if (numeros.indexOf(texto.charAt(i),0) != -1){
            return true;
        }
    }
    return false;
} 

//Pedimos el nombre
let nombre = prompt("¿Cual es tu nombre?");
//Condicion que hace comprobacion de si el nombre tiene solo letras
if(tieneNumeros(nombre) || tieneSimbolos(nombre))
    //Bucle que se repite hasta que solo haya letras en el nombre
    while (tieneNumeros(nombre) || tieneSimbolos(nombre))
        nombre = prompt("Los nombres solo tienen letras, ¿Cual es tu nombre?");

//Pedimos el apellido
let apellido = prompt("¿Cual es tu apellido?");
//Condicion que hace comprobacion de si el apellido tiene solo letras
if(tieneNumeros(apellido) || tieneSimbolos(apellido))
    //Bucle que se repitehasta que solo haya letras en el apellido
    while (tieneNumeros(apellido) || tieneSimbolos(apellido))
        apellido = prompt("Los apellidos no tienen numeros, ¿Cual es tu apellido?");

//Creamos array con unas ciudades
const ciudades = ["Donostia", "Madrid", "Barcelona", "Bilbao", "New York", "Los Angeles", "Londres", "Paris", "Amsterdam", "Sevilla"];
/*Funcion que calculara ciudad y numero de hijos aleatoriamente y luego escribirlos.
 *Ponemos valores por defecto al nombre y apellido por siacaso.
 */
let Datos = (nombre = "Federico", apellido = "Marques") => {
    let nHijos = parseInt(Math.random() * (10 - 0) + 0);
    let nCiudad = parseInt(Math.random() * (10 - 0) + 0);
    let ciudad = ciudades[nCiudad];
    console.log("Hola " + nombre + " " + apellido + ", vas a tener " + nHijos + " hijos y viviras en la ciudad de " + ciudad);
}

//Bucle que repite la respuesta 3 veces
for (let i = 1; i <= 3; i++)
    Datos(nombre, apellido);