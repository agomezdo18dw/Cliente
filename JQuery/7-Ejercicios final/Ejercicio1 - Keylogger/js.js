//Esperamos a que la pagina se cargue entera
$(document).ready(function () {
    //Cada vez que se pulsa una tecla hace lo siguiente y se pasa la informacion de esta a la funcion
    $(document).keydown(function (e) {
        //Cogemos los valores que necesitamos
        let nuevaLetra = e.key;
        let letras = document.getElementById('letras');
        let siguienteLinea = '<br>'
        //Comprobamos que en el p haya algo y no sea undefined
        if (typeof (letras.value) === 'undefined')
            //Añadimos el valor de la tecla que hemos pulsado
            letras.value = nuevaLetra + siguienteLinea;
        else
            //Añadimos lo que ya teniamos en el p mas la nueva tecla
            letras.value = letras.value + nuevaLetra + siguienteLinea;
        //Escribimos en el p los nuevos valores
        letras.innerHTML = letras.value;
        
        //Si pulsamos el boton limpiar
        $('#limpiar').click(function(){
            //Convertimos el p en vacio
            letras.value = '';
            //Lo mostramos
            letras.innerHTML = letras.value;
        });
    });
    
});
