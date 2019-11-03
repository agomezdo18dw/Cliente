//Esperamos a que la pagina se cargue entera
$(document).ready(function () {
    //Recogemos los datos necesarios
    let primero = $('#primero');
    let segundo = $('#segundo');
    let tercero = $('#tercero');

    //Al clicar en añadir
    $('#Añadir').click(function () {
        //Cogemos el texto de los datos cogidos anteriormente
        let primeroAñadir = primero.text();
        let segundoAñadir = segundo.text();
        let terceroAñadir = tercero.text();
        //Cogemos algun dato extra que necesitamos como el texto que queremos añadir y el label de la validacion
        let contenido = document.getElementById('contenido').value;
        let val = document.getElementById('val');
        //Comprobamos que se ha seleccionado un parrafo
        if (parrafo() === '0'){
            val.innerHTML = "Tienes que seleccionar un parrafo";
        }
        //Añadimos al parrafo que queremos lo que hemos escrito
        else if (parrafo() === '1') {
            primeroAñadir = primeroAñadir + ' ' + contenido;
            $(primero).text(primeroAñadir);
            val.innerHTML = "";
        } 
        else if (parrafo() === '2') {
            segundoAñadir = segundoAñadir + ' ' + contenido;
            $(segundo).text(segundoAñadir);
            val.innerHTML = "";
        } 
        else if (parrafo() === '3') {
            terceroAñadir = terceroAñadir + ' ' + contenido;
            $(tercero).text(terceroAñadir);
            val.innerHTML = "";
        }
    });
    
    //Al clicar en Negrita
    $('#Negrita').click(function () {
        //Comprobamos que se ha seleccionado un parrafo
        if (parrafo() === '0'){
            val.innerHTML = "Tienes que seleccionar un parrafo";
        }
        //Ponemos en negrita el parrafo que queremos y los demas los ponemos en normal
        else if (parrafo() === '1') {
            $(primero).css("font-weight", "bold");
            $(segundo).css("font-weight", "normal");
            $(tercero).css("font-weight", "normal");
            val.innerHTML = "";
        } 
        else if (parrafo() === '2') {
            $(primero).css("font-weight", "normal");
            $(segundo).css("font-weight", "bold");
            $(tercero).css("font-weight", "normal");
            val.innerHTML = "";
        } 
        else if (parrafo() === '3') {
            $(primero).css("font-weight", "normal");
            $(segundo).css("font-weight", "normal");
            $(tercero).css("font-weight", "bold");
            val.innerHTML = "";
        }
    });

    //Al clicar en Reset
    $('#Reset').click(function () {
        //Recargamos la pagina
        location.reload();
        /* ---------------------------------------- Metodo que he usado en un principio, luego cambie a recargar la pagina.. no se cual esta mejor ----------------------------------------
         *Metemos el texto inicial en una variable
         *let principio = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley  of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
         *Ponemos el texto de la variable anterior en los parrafos y quitamos estilos de negrita
         *$(primero).text(principio);
         *$(segundo).text(principio);
         *$(tercero).text(principio);
         *$(primero).css("font-weight", "normal");
         *$(segundo).css("font-weight", "normal");
         *$(tercero).css("font-weight", "normal");
         */
    });
    
    //Funcion que devuelve el valor del parrafo seleccionado
    let parrafo = () => {
        let parrafo = $('#parrafo').val();
        return parrafo
    }
});
