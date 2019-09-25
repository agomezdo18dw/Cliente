/*Crea una función que recibirá por parámetro tu nombre y  apellido y sacará por consola lo siguiente:
Hola nombre apellido, vas a tener X hijos y vivirás en la ciudad de Y 
Tanto X e Y serán variables. El ejercicio deberá de ejecutar tres veces la función...*/
//Pedimos nombre y apellido
let nombre = prompt("¿Cual es tu nombre?");
let apellido = prompt("¿Cual es tu apellido?");
//Creamos array con unas ciudades
const ciudades = ["Donostia", "Madrid", "Barcelona", "Bilbao", "New York", "Los Angeles", "Londres", "Paris", "Amsterdam", "Sevilla"];
/*Funcion que calculara ciudad y numero de hijos y luego
 *escribirlos
 *Ponemos valores por defecto al nombre y apellido por siacaso
 */
let Datos = (nombre = "Federico", apellido = "Marques") => {
    let nHijos = parseInt(Math.random() * (10 - 0) + 0);
    let nCiudad = parseInt(Math.random() * (10 - 0) + 0);
    let ciudad = ciudades[nCiudad];
    console.log("Hola " + nombre + " " + apellido + ", vas a tener " + nHijos + " hijos y viviras en la ciudad de " + ciudad);
}
for (let i = 1; i <= 3; i++)
    Datos(nombre, apellido);