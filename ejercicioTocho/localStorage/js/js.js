/*Comprobamos si existe la localStorage del idioma 
 *si existe lo pone con el idioma seleccionado la ultima vez
 *sino ponemos la pagina en español
 */
if (localStorage.lng) {
    var translator = $('body').translate({
        lang: localStorage.getItem('lng'),
        t: dict
    });
} else {
    var translator = $('body').translate({
        lang: 'es',
        t: dict
    });
}

/*Cuando clickemos en un boton cambiaremos el idioma
 *y crearemos o actualizaremos la localStorage
 */
function cambiarIdioma(idioma) {
    localStorage.setItem("lng", idioma)
    var translator = $('body').translate({
        lang: localStorage.getItem('lng'),
        t: dict
    });
}