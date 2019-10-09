//https://aprende-web.net/jspracticas/tiempo/tiempo1.php
//Funcion que coge fecha y hora
let cogerFechaHora = () => {
    //Consulta cual es la fecha y la hora
    fechaHora = new Date;
    //devuelve la fech y la hora
    return fechaHora;
}
//Funcion que configura la hora
let Hora = () => {
    //Coger la fecha y la hora
    let h = cogerFechaHora();
    //hora actual
    let hora = añadirZero(h.getHours());
    //minuto actual
    let minuto = añadirZero(h.getMinutes());
    //segundo actual
    let segundo = añadirZero(h.getSeconds());
    //Ponemos la hora todo junto
    let miReloj = hora + ":" + minuto + ":" + segundo;
    //Devolvemos la hora
    return miReloj; 
}
//Funcion que configura la fecha
let Fecha = () => {
    //Cogemos la fecha y la hora
    let f = cogerFechaHora();
    //Dia actual
    let dia = añadirZero(f.getDate());
    //Mes actual
    let mes = añadirZero(f.getMonth());
    //Año actual
    let año = f.getFullYear();
    //Ponemos la fecha todo junto
    let miFecha = dia + "/" + mes + "/" + año;
    //Devolvemos la fecha
    return miFecha
}
//Funcion que comprueba si el numero tiene dos digitos y sino le añade un 0 a la izquierda
let añadirZero = (i) => {
    if (i < 10)
        i = "0" + i;
    return i;
}
//Funcion que actualiza el temporizador
let actualizar = () => {
    //recoger hora actual
    let miHora = Hora();
    //recoger fecha actual
    let miFecha = Fecha();
    //Ponemos feha y hora todo junto
    let final = miFecha + " - " + miHora;
    //Buscar elemento reloj en el html
    let mireloj = document.getElementById("reloj"); 
    //Actualizar elemento reloj del html
    mireloj.innerHTML = final;
}
//Funcion que inicia temporizador para actualizar hora y fecha
setInterval(actualizar,1000);





