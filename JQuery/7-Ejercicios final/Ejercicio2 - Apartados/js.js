//Esperamos a que la pagina se cargue entera
$(document).ready(function () {
    //Cogemos las variables necesarias
    let primero = document.getElementById('primero');
    let segundo = document.getElementById('segundo');
    let tercero = document.getElementById('tercero');
    //Ocultamos el segundo y el tercer div
    $(segundo).hide();
    $(tercero).hide();

    //Al pulsar el primer boton
    $('#1').click(function () {
        //Mostramos el div correspondiente y ocultamos el resto
        $(segundo).hide();
        $(tercero).hide();
        $(primero).show();
    });

    //Al pulsar el segundo boton
    $('#2').click(function () {
        //Mostramos el div correspondiente y ocultamos el resto
        $(segundo).show();
        $(primero).hide();
        $(tercero).hide();
    });

    //Al pulsar el tercer boton
    $('#3').click(function () {
        //Mostramos el div correspondiente y ocultamos el resto
        $(tercero).show();
        $(primero).hide();
        $(segundo).hide();
    });
});
