//Esperamos a que la pagina se cargue entera
$(document).ready(function () {
    //Recogemos los datos necesarios
    let primero = document.getElementById('primero');
    let segundo = document.getElementById('segundo');
    let tercero = document.getElementById('tercero');
    let val = document.getElementById('val');
    //Ocultamos los divs que no sean el primero
    $(segundo).hide();
    $(tercero).hide();

    //Al clicar en el primero boton
    $('#1').click(function () {
        //Recoge la opacidad
        let opacidad = document.getElementById('opacidad');
        //Realiza validaciones
        if (validarSiNumero(opacidad.value))
            val.innerHTML = 'La opacidad tiene que ser un numero decimal, con un punto "."';
        else if (opacidad.value < 0)
            val.innerHTML = "La opacidad no puede ser menor a 0";
        else if (opacidad.value > 1)
            val.innerHTML = "La opacidad no puede ser mayor a 1";
        //Si todo es correcto muestra el div con la opacidad dicha por el usuario y los otros los baja a 0
        else {
            val.innerHTML = '';
            $(segundo).fadeTo("slow", 0);
            $(tercero).fadeTo("slow", 0);
            $(primero).fadeTo("slow", opacidad.value);
        }
    });

    //Al clicar en el segundo boton
    $('#2').click(function () {
        //Recoge la opacidad
        let opacidad = document.getElementById('opacidad');
        //Realiza validaciones
        if (validarSiNumero(opacidad.value))
            val.innerHTML = 'La opacidad tiene que ser un numero decimal, con un punto "."';
        else if (opacidad.value < 0)
            val.innerHTML = "La opacidad no puede ser menor a 0";
        else if (opacidad.value > 1)
            val.innerHTML = "La opacidad no puede ser mayor a 1";
        else {
            //Si todo es correcto muestra el div con la opacidad dicha por el usuario y los otros los baja a 0
            val.innerHTML = '';
            $(primero).fadeTo("slow", 0);
            $(tercero).fadeTo("slow", 0);
            $(segundo).fadeTo("slow", opacidad.value);
        }
    });

    //Al clicar en el segundo boton
    $('#3').click(function () {
        //Recoge la opacidad
        let opacidad = document.getElementById('opacidad');
        if (validarSiNumero(opacidad.value))
            val.innerHTML = 'La opacidad tiene que ser un numero decimal, con un punto "."';
        else if (opacidad.value < 0)
            val.innerHTML = "La opacidad no puede ser menor a 0";
        else if (opacidad.value > 1)
            val.innerHTML = "La opacidad no puede ser mayor a 1";
        else {
            //Si todo es correcto muestra el div con la opacidad dicha por el usuario y los otros los baja a 0
            val.innerHTML = '';
            $(primero).fadeTo("slow", 0);
            $(segundo).fadeTo("slow", 0);
            $(tercero).fadeTo("slow", opacidad.value);
        }
    });

    //Funcion para validar si un numero es realmente un numero
    let validarSiNumero = (numero) => {
        let numeroDecimal = /^\d*\.?\d*$/;
        //Comparacion entre el numero y si es decimal, si es diremos false para que no se meta en el if
        if (numeroDecimal.test(numero))
            return false;
        else
            return true;
    }
});
