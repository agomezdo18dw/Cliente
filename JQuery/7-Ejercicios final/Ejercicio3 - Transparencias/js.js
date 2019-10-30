//Esperamos a que la pagina se cargue entera
$(document).ready(function () {
    let primero = document.getElementById('primero')
    let segundo = document.getElementById('segundo');
    let tercero = document.getElementById('tercero');
    let val = document.getElementById('val');
    $(segundo).hide();
    $(tercero).hide();

    $('#1').click(function () {
        let opacidad = document.getElementById('opacidad');
        if (validarSiNumero(opacidad.value))
            val.innerHTML = "La opacidad tiene que ser un numero";
        else if (opacidad.value < 0)
            val.innerHTML = "La opacidad no puede ser menor a 0";
        else if (opacidad.value > 1)
            val.innerHTML = "La opacidad no puede ser mayor a 1";
        else {
            val.innerHTML = '';
            $(segundo).css("opacity", 0);
            $(tercero).css("opacity", 0);
            $(primero).css("opacity", opacidad.value);
        }
    });
    $('#2').click(function () {
        let opacidad = document.getElementById('opacidad');
        if (validarSiNumero(opacidad.value))
            val.innerHTML = "La opacidad tiene que ser un numero";
        else if (opacidad.value < 0)
            val.innerHTML = "La opacidad no puede ser menor a 0";
        else if (opacidad.value > 1)
            val.innerHTML = "La opacidad no puede ser mayor a 1";
        else {
            val.innerHTML = '';
            $(segundo).show();
            $(primero).css("opacity", 0);
            $(tercero).css("opacity", 0);
            $(segundo).css("opacity", opacidad.value);
        }
    });
    $('#3').click(function () {
        let opacidad = document.getElementById('opacidad');
        if (validarSiNumero(opacidad.value))
            val.innerHTML = "La opacidad tiene que ser un numero";
        else if (opacidad.value < 0)
            val.innerHTML = "La opacidad no puede ser menor a 0";
        else if (opacidad.value > 1)
            val.innerHTML = "La opacidad no puede ser mayor a 1";
        else {
            val.innerHTML = '';
            $(tercero).show();
            $(primero).css("opacity", 0);
            $(segundo).css("opacity", 0);
            $(tercero).css("opacity", opacidad.value);
        }
    });

    let validarSiNumero = (numero) => {
        let numeroDecimal = /^\d*\.?\d*$/;
        if (numeroDecimal.test(numero))
            return false;
        else
            return true;
    }
});
