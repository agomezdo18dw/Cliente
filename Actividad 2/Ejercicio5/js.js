/*Ejercico libre:
 *Programa en el que introduces una palabra y un numero que calcula aleatoriamente y 
 *les da la vuelta
 */

//Funcion que comprueba si hay numeros en el texto que le introduzcamos
let tieneNumeros = (texto) =>{
    //Creamos un string con los numeros
    const numeros = "0123456789";
    //Bucle que comprueba si en el texto hay numeros al leerlo letra por letra y compararlo con el string de antes
    for(i=0; i < texto.length; i++){
        if (numeros.indexOf(texto.charAt(i),0) != -1){
            return true;
        }
    }
    return false;
}

//Funcion que comprueba si hay simbolos en el texto que le introduzcamos
let tieneSimbolos = (texto) =>{
    //Creamos un string con los simbolos
    const numeros = "!¡=?¿.,/º&%$'-_;:<>[]{}";
    //Bucle que comprueba si en el texto hay simbolos al leerlo letra por letra y compararlo con el string de antes
    for(i=0; i < texto.length; i++){
        if (numeros.indexOf(texto.charAt(i),0) != -1){
            return true;
        }
    }
    return false;
}

//Funcion que comprueba si hay espacios en el texto que le introduzcamos
let tieneBlanco = (texto) =>{
    //Creamos un string con el espacio
    const espacio = " ";
    //Bucle que comprueba si en el texto hay espacios al leerlo letra por letra y compararlo con el string de antes
    for(i=0; i < texto.length; i++){
        if (espacio.indexOf(texto.charAt(i),0) != -1){
            return true;
        }
    }
    return false;
} 

//Funcion que recoge los datos que necesitamos
let recogerDatos = () =>{ 
    //Creamos array para meter los datos
    let datos = [];
    //Pedimos la palabra por teclado
    let palabra = prompt("Escribe una palabra:\n(Valor por defecto federico)");
    //Si no se introduce nada se añade un texto por defecto
    if (palabra == "")
        palabra = "federico";
    //Comprobamos que la palabra no tiene numeros, simbolos o espacios
    if(tieneNumeros(palabra) || tieneSimbolos(palabra) || tieneBlanco(palabra))
        //Bucle que se repite hasta que solo haya letras en el nombre
        while (tieneNumeros(palabra) || tieneSimbolos(palabra) || tieneBlanco(palabra))
            palabra = prompt("Las palabras solo tienen letras, ¿Que palabra quieres?\n(No puedes escribir ni numeros, ni simbolos, ni dejar espacios en blanco)\n(Valor por defecto federico)");
    //Generamos un numero al azar entree 9999 y 10
    let numero = parseInt(Math.random() * (9999 - 10));
    //Metemos al array los dos datos
    datos.push(palabra, numero);
    //Devolvemos el array
    return datos;
}

//Funcion que da la vuelta a los dato que tenemos
let darVuelta = (palabra, numero) =>{ 
    //Creamos variables necesarias
    let x = palabra.length;
    let palabraInvertida = "";
    let resto = numero;
    let numeroInvertido = 0;
    let inversion = [];
    //Bucle que invierte la palabra
    while (x >= 0) {
        palabraInvertida = palabraInvertida + palabra.charAt(x);
        x--;
    }
    //Bucle que invierte el numero
    while (resto > 0) {
        numeroInvertido = numeroInvertido * 10 + (resto % 10)
        resto = Math.floor(resto / 10)
    } 
    //Metemos los datos en un array y los devolvemos
    inversion.push(palabraInvertida, numeroInvertido);
    return inversion;
}
//Bucle que repite el programa 3 veces
for (let i = 0; i < 3; i++){
    //Cogemoos los datos y los introducimos en variables
    let datos = recogerDatos();
    for (let j = 0; j < datos.length; j++){
        if (j == 0)
            var palabra = datos[j];
        else
            var numero = datos[j];
    }
    //Escribimos los datos
    document.write("<b>La palabra es: </b>" + palabra + "<br>");
    document.write("<b>El numero es: </b>" + numero + "<br>");
    //Le damos la vuelta a los datos y los introducimos en variables
    let datosVolteados = darVuelta(palabra, numero);
    for (let j = 0; j < datos.length; j++){
        if (j == 0)
            var palabraInvertida = datosVolteados[j];
        else
            var numeroInvertido = datosVolteados[j];
    }
    //Escribimos los datos invertidos
    document.write("La palabra invertida es: " + palabraInvertida + "<br>");
    document.write("El numero invertido es: " + numeroInvertido + "<br><br>");
}