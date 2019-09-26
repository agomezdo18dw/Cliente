//Creamos un array con los meses del año
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
//Pedimos que mes se quiere visualizar
let numero_mes = prompt("Introduce el numero del mes que quieres visualizar");
//Comprobamos que no se mete mas de 12
if (numero_mes > 12){
    //Si pone mas de 12 el navegador vuelve a pedir un valor
    do {
        numero_mes = prompt("El año solo tiene 12 meses, introduce el numero del mes que quieres visualizar");
    } while (numero_mes > 12);
}
//Le restamos al numero dado 1 para que cuadre con el array
let mesArray = numero_mes - 1;
//Enseñamos el mes solicitado
document.write(meses[mesArray]+"<br>");
//Metemos algo nuevo en el array
let nuevoElemento = meses.push("Adrian");
//Calculamos nuevo tamaño del array
let tamañoArray = meses.length;
//Mostramos nuevo tamaño del array
document.write("Tras añadir algo al arra, el tamaño del array ahora es: " + tamañoArray + "<br>");
//Eliminamos el ultimo valor del array
let borrarUltimoElemento = meses.splice(12,1);
//Calculamos nuevo valor
let nuevoTamaño = meses.length;
//Mostramos nuevo valor
document.write("Tras eliminar el ultimo valor, el nuevo valor es: " + nuevoTamaño);