$(document).ready(function () {
    $('#errorNum').hide();
    $('#errorTit').hide();
    $('#Post').hide();
    $('#get').hide();

    $('#getJquery').click(function () {
        $('#Post').hide();
        let numero = document.getElementById('numero').value;
        let tipos = document.getElementById("tipos");
        let tipo = tipos.options[tipos.selectedIndex].value;

        $.get("https://swapi.co/api/" + tipo + "/" + numero + "/", function (data, status) {
            if (status == "success") {
                console.log(data)
                if (tipo === "people") {
                    $('#Get').text('');
                    $('#Get').append('<p><b>Get <span class="info" id="tipo">JQuery - People</span></b></p>');
                    $('#Get').append('<p><b>Nombre: </b><span class="info">' + data.name + '</span></p>')
                    $('#Get').append('<p><b>Altura: </b><span class="info">' + data.height + '</span></p>')
                    $('#Get').append('<p><b>Peso: </b><span class="info">' + data.mass + '</span></p>')
                    $('#Get').append('<p><b>Color de pelo: </b><span class="info">' + data.hair_color + '</span></p>')
                    $('#Get').append('<p><b>Color de piel: </b><span class="info">' + data.skin_color + '</span></p>')
                    $('#Get').append('<p><b>Color de ojos: </b><span class="info">' + data.eye_color + '</span></p>')
                    $('#Get').append('<p><b>Año de nacimiento: </b><span class="info">' + data.birth_year + '</span></p>')
                    $('#Get').append('<p><b>Genero: </b><span class="info">' + data.gender + '</span></p>')
                    $('#Get').append('<p><b>Residencia: </b><span class="info" id="residencia">Cargando...</span></p>')
                    $('#Get').append('<p><b>Pelis: </b><span class="info" id="films">Cargando...</span></p>')
                    $('#Get').append('<p><b>Especie: </b><span class="info" id="especie">Cargando...</span></p>')
                    $('#Get').append('<p><b>Vehiculos: </b><span class="info" id="vehiculos">Cargando...</span></p>')
                    $('#Get').append('<p><b>Naves: </b><span class="info" id="naves">Cargando...</span></p>')
                    $('#Get').append('<p><b>URL: </b><span class="info">' + data.url + '</span></p>')
                    $('#Get').show();
                    homeworld(data.homeworld)
                    films(data.films)
                    especie(data.species)
                    vehiculos(data.vehicles)
                    naves(data.starships)
                } else if (tipo === "planets") {
                    $('#Get').text('');
                    $('#Get').append('<p><b>Get <span class="info" id="tipo">JQuery - Planets</span></b></p>');
                    $('#Get').append('<p><b>Nombre: </b><span class="info">' + data.name + '</span></p>')
                    $('#Get').append('<p><b>Periodo de rotacion: </b><span class="info">' + data.rotation_period + '</span></p>')
                    $('#Get').append('<p><b>Periodo orbital: </b><span class="info">' + data.orbital_period + '</span></p>')
                    $('#Get').append('<p><b>Diametro: </b><span class="info">' + data.diameter + '</span></p>')
                    $('#Get').append('<p><b>Clima: </b><span class="info">' + data.climate + '</span></p>')
                    $('#Get').append('<p><b>Gravedad: </b><span class="info">' + data.gravity + '</span></p>')
                    $('#Get').append('<p><b>Terreno: </b><span class="info">' + data.terrain + '</span></p>')
                    $('#Get').append('<p><b>Superficie del agua: </b><span class="info">' + data.surface_water + '</span></p>')
                    $('#Get').append('<p><b>Poblacion: </b><span class="info">' + data.population + '</span></p>')
                    $('#Get').append('<p><b>Residentes: </b><span class="info" id="residentes">Cargando...</span></p>')
                    $('#Get').append('<p><b>Pelis: </b><span class="info" id="films">Cargando...</span></p>')
                    $('#Get').append('<p><b>URL: </b><span class="info">' + data.url + '</span></p>')
                    $('#Get').show();
                    residentes(data.residents)
                    films(data.films)
                } else if (tipo === "starships") {
                    $('#Get').text('');
                    $('#Get').append('<p><b>Get <span class="info" id="tipo">JQuery - Starships</span></b></p>');
                    $('#Get').append('<p><b>Nombre: </b><span class="info">' + data.name + '</span></p>')
                    $('#Get').append('<p><b>Modelo: </b><span class="info">' + data.model + '</span></p>')
                    $('#Get').append('<p><b>Manufacturador: </b><span class="info">' + data.manufacturer + '</span></p>')
                    $('#Get').append('<p><b>Coste: </b><span class="info">' + data.cost_in_credits + '</span></p>')
                    $('#Get').append('<p><b>Largo: </b><span class="info">' + data.length + '</span></p>')
                    $('#Get').append('<p><b>Velocidad maxima: </b><span class="info">' + data.max_atmosphering_speed + '</span></p>')
                    $('#Get').append('<p><b>Personal: </b><span class="info">' + data.crew + '</span></p>')
                    $('#Get').append('<p><b>Pasajeros: </b><span class="info">' + data.passengers + '</span></p>')
                    $('#Get').append('<p><b>Capacidad de carga: </b><span class="info">' + data.cargo_capacity + '</span></p>')
                    $('#Get').append('<p><b>Consumibles: </b><span class="info">' + data.consumables + '</span></p>')
                    $('#Get').append('<p><b>Calificacion de hiper conduccion: </b><span class="info">' + data.hyperdrive_rating + '</span></p>')
                    $('#Get').append('<p><b>MGLT: </b><span class="info">' + data.MGLT + '</span></p>')
                    $('#Get').append('<p><b>Clase: </b><span class="info">' + data.starship_class + '</span></p>')
                    $('#Get').append('<p><b>Pilotos: </b><span class="info" id="pilotos">Cargando...</span></p>')
                    $('#Get').append('<p><b>Pelis: </b><span class="info" id="films">Cargando...</span></p>')
                    $('#Get').append('<p><b>URL: </b><span class="info">' + data.url + '</span></p>')
                    $('#Get').show();
                    pilotos(data.pilots)
                    films(data.films)
                }
            } else {
                console.log('error')
            }
        });
    });

    $('#postJquery').click(function () {
        $('#Get').hide();

        let numero = document.getElementById('numero').value;
        let title = document.getElementById('title').value;
        if (vacio(numero)) {
            $('#errorNum').text(" → No puedes dejar en blanco el campo numero");
            $('#errorNum').show();
        } else if (numeros(numero)) {
            $('#errorNum').text(" → Solo puedes escribir numeros");
            $('#errorNum').show();
        } else if (numero <= 3) {
            $('#errorNum').text(" → Tienes que escribir un numero mayor a 3, porque 1, 2 y 3 ya existen")
            $('#errorNum').show();
        } else if (vacio(title)) {
            $('#errorNum').hide();
            $('#errorTit').text(" → No puedes dejar en blanco el campo titulo")
            $('#errorTit').show();
        } else {
            $('#errorNum').hide();
            $('#errorTit').hide();
            $.post("https://my-json-server.typicode.com/typicode/demo/posts", {
                    id: numero,
                    title: title
                },
                function (data, status) {
                    if (status == "success") {
                        $('#tipo').text('Jquery');
                        $('#id').text(data.id);
                        $('#titulo').text(data.title);
                        $('#Post').show();
                    } else {
                        console.log('error')
                    }
                });
        }
    });
});

let num = 1;
let getJS = () => {
    let numero = document.getElementById('numero').value;
    let tipos = document.getElementById("tipos");
    let tipo = tipos.options[tipos.selectedIndex].value;
    //Preparamos la llamada
    let request = new XMLHttpRequest();
    //Definimos el tipo de peticion asi com la url
    request.open('GET', 'https://swapi.co/api/' + tipo + '/' + numero + '/', true);
    request.onload = function () {
        //almacenamos JSON
        let data = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
            console.log(data)
            if (tipo === "people") {
                $('#tipo').text('Get JS - Personas');
                $('#get').show();
                $('tbody').append('<tr>');
                $('tbody').append('<th scope="row">' + data.name + '</th>')
                $('tbody').append('<th>' + data.height + '/' + data.mass + '</th>')
                $('tbody').append('<th>' + data.hair_color + '/' + data.skin_color + '/' + data.eye_color + '</th>')
                $('tbody').append('<th>' + data.birth_year + '</th>')
                $('tbody').append('<th>' + data.gender + '</th>')
                $('tbody').append('<th id="residencia' + num + '">Cargando...</th>')
                $('tbody').append('<th id="films' + num + '">Cargando...</th>')
                $('tbody').append('<th id="especie' + num + '">Cargando...</th>')
                $('tbody').append('<th id="vehiculos' + num + '">Cargando...</th>')
                $('tbody').append('<th id="naves' + num + '">Cargando...</th>')
                $('tbody').append('<th>' + data.url + '</th>')
                $('tbody').append('</tr>')
                $('tbody').show();
                homeworld(data.homeworld, num)
                films(data.films, num)
                especie(data.species, num)
                vehiculos(data.vehicles, num)
                naves(data.starships, num)
                num++;
            } else if (tipo === "planets") {
                $('#Get').text('');
                $('#Get').append('<p><b>Get <span class="info" id="tipo">JS - Planets</span></b></p>');
                $('#Get').append('<p><b>Nombre: </b><span class="info">' + data.name + '</span></p>')
                $('#Get').append('<p><b>Periodo de rotacion: </b><span class="info">' + data.rotation_period + '</span></p>')
                $('#Get').append('<p><b>Periodo orbital: </b><span class="info">' + data.orbital_period + '</span></p>')
                $('#Get').append('<p><b>Diametro: </b><span class="info">' + data.diameter + '</span></p>')
                $('#Get').append('<p><b>Clima: </b><span class="info">' + data.climate + '</span></p>')
                $('#Get').append('<p><b>Gravedad: </b><span class="info">' + data.gravity + '</span></p>')
                $('#Get').append('<p><b>Terreno: </b><span class="info">' + data.terrain + '</span></p>')
                $('#Get').append('<p><b>Superficie del agua: </b><span class="info">' + data.surface_water + '</span></p>')
                $('#Get').append('<p><b>Poblacion: </b><span class="info">' + data.population + '</span></p>')
                $('#Get').append('<p><b>Residentes: </b><span class="info" id="residentes">Cargando...</span></p>')
                $('#Get').append('<p><b>Pelis: </b><span class="info" id="films">Cargando...</span></p>')
                $('#Get').append('<p><b>URL: </b><span class="info">' + data.url + '</span></p>')
                $('#Get').show();
                residentes(data.residents)
                films(data.films)
            } else if (tipo === "starships") {
                $('#Get').text('');
                $('#Get').append('<p><b>Get <span class="info" id="tipo">JS - Starships</span></b></p>');
                $('#Get').append('<p><b>Nombre: </b><span class="info">' + data.name + '</span></p>')
                $('#Get').append('<p><b>Modelo: </b><span class="info">' + data.model + '</span></p>')
                $('#Get').append('<p><b>Manufacturador: </b><span class="info">' + data.manufacturer + '</span></p>')
                $('#Get').append('<p><b>Coste: </b><span class="info">' + data.cost_in_credits + '</span></p>')
                $('#Get').append('<p><b>Largo: </b><span class="info">' + data.length + '</span></p>')
                $('#Get').append('<p><b>Velocidad maxima: </b><span class="info">' + data.max_atmosphering_speed + '</span></p>')
                $('#Get').append('<p><b>Personal: </b><span class="info">' + data.crew + '</span></p>')
                $('#Get').append('<p><b>Pasajeros: </b><span class="info">' + data.passengers + '</span></p>')
                $('#Get').append('<p><b>Capacidad de carga: </b><span class="info">' + data.cargo_capacity + '</span></p>')
                $('#Get').append('<p><b>Consumibles: </b><span class="info">' + data.consumables + '</span></p>')
                $('#Get').append('<p><b>Calificacion de hiper conduccion: </b><span class="info">' + data.hyperdrive_rating + '</span></p>')
                $('#Get').append('<p><b>MGLT: </b><span class="info">' + data.MGLT + '</span></p>')
                $('#Get').append('<p><b>Clase: </b><span class="info">' + data.starship_class + '</span></p>')
                $('#Get').append('<p><b>Pilotos: </b><span class="info" id="pilotos">Cargando...</span></p>')
                $('#Get').append('<p><b>Pelis: </b><span class="info" id="films">Cargando...</span></p>')
                $('#Get').append('<p><b>URL: </b><span class="info">' + data.url + '</span></p>')
                $('#Get').show();
                pilotos(data.pilots)
                films(data.films)
            }
        } else {
            console.log('error')
        }
    }
    request.send();
}

let postJs = () => {
    $('#Get').hide();

    let numero = document.getElementById('numero').value;
    let title = document.getElementById('title').value;
    if (vacio(numero)) {
        $('#errorNum').text(" → No puedes dejar en blanco el campo numero");
        $('#errorNum').show();
    } else if (numeros(numero)) {
        $('#errorNum').text(" → Solo puedes escribir numeros");
        $('#errorNum').show();
    } else if (numero <= 3) {
        $('#errorNum').text(" → Tienes que escribir un numero mayor a 3, porque 1, 2 y 3 ya existen")
        $('#errorNum').show();
    } else if (vacio(title)) {
        $('#errorNum').hide();
        $('#errorTit').text(" → No puedes dejar en blanco el campo titulo")
        $('#errorTit').show();
    } else {
        $('#errorNum').hide();
        $('#errorTit').hide();
        //Preparamos la llamada
        let request = new XMLHttpRequest();
        request.open('POST', 'https://my-json-server.typicode.com/typicode/demo/posts', true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.send("id=" + numero + "&title=" + title);
        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 201) { //Normalmente el post usa 201 en vez de 200
                let post = JSON.parse(this.responseText);
                $('#tipo').text('JS');
                $('#id').text(post.id);
                $('#titulo').text(post.title);
                $('#Post').show();
            }
            /*Si pongo esto me da error primero y luego me dice si se ha posteado correctamente
             *else
             *  console.log("error")
             */
        };
    }

}

//Funcion que valida si un campo esta vacio
let vacio = (dato) => {
    if (dato === "")
        return true
    else
        return false
}

//Funcion que valida si un campo tiene solo numeros
let numeros = (dato) => {
    if (dato.match(/[0-9]/gm))
        return false
    else
        return true
}

let homeworld = (link, num) => {
    //Preparamos la llamada
    let request = new XMLHttpRequest();
    //Definimos el tipo de peticion asi com la url
    request.open('GET', link, true);
    request.onload = function () {
        //almacenamos JSON  
        let data = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
            document.getElementById("residencia" + num).innerHTML = data.name;
        } else {
            console.log("error extraInfo")
        }
    }
    request.send();
}

let films = (link, num) => {
    let pelis = '';
    for (i = 0; i < link.length; i++) {
        //Preparamos la llamada
        let request = new XMLHttpRequest();
        //Definimos el tipo de peticion asi com la url
        request.open('GET', link[i], false);
        request.onload = function () {
            //almacenamos JSON  
            let data = JSON.parse(this.response)
            if (request.status >= 200 && request.status < 400) {
                pelis += data.title + ", "
            } else {
                console.log("error extraInfo")
            }
        }
        request.send();
    }
    if (pelis == '')
        document.getElementById("films" + num).innerHTML = "No sale en pelis";
    else
        document.getElementById("films" + num).innerHTML = pelis;
}

let especie = (link, num) => {
    //Preparamos la llamada
    let request = new XMLHttpRequest();
    //Definimos el tipo de peticion asi com la url
    request.open('GET', link, true);
    request.onload = function () {
        //almacenamos JSON  
        let data = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
            document.getElementById("especie" + num).innerHTML = data.name;
        } else {
            console.log("error extraInfo")
        }
    }
    request.send();
}

let vehiculos = (link, num) => {
    let vehiculos = '';
    for (i = 0; i < link.length; i++) {
        //Preparamos la llamada
        let request = new XMLHttpRequest();
        //Definimos el tipo de peticion asi com la url
        request.open('GET', link[i], false);
        request.onload = function () {
            //almacenamos JSON  
            let data = JSON.parse(this.response)
            if (request.status >= 200 && request.status < 400) {
                vehiculos += data.name + ", "
            } else {
                console.log("error extraInfo")
            }
        }
        request.send();
    }
    if (vehiculos == '')
        document.getElementById("vehiculos" + num).innerHTML = "No tiene vehiculos";
    else
        document.getElementById("vehiculos" + num).innerHTML = vehiculos;
}

let naves = (link, i) => {
    let naves = '';
    for (i = 0; i < link.length; i++) {
        //Preparamos la llamada
        let request = new XMLHttpRequest();
        //Definimos el tipo de peticion asi com la url
        request.open('GET', link[i], false);
        request.onload = function () {
            //almacenamos JSON  
            let data = JSON.parse(this.response)
            if (request.status >= 200 && request.status < 400) {
                naves += data.name + ", "
            } else {
                console.log("error extraInfo")
            }
        }
        request.send();
    }
    if (naves == '')
        document.getElementById("naves" + num).innerHTML = "No tiene naves";
    else
        document.getElementById("naves" + num).innerHTML = naves;
}

let residentes = (link, i) => {
    let residentes = '';
    for (i = 0; i < link.length; i++) {
        //Preparamos la llamada
        let request = new XMLHttpRequest();
        //Definimos el tipo de peticion asi com la url
        request.open('GET', link[i], false);
        request.onload = function () {
            //almacenamos JSON  
            let data = JSON.parse(this.response)
            if (request.status >= 200 && request.status < 400) {
                residentes += data.name + ", "
            } else {
                console.log("error extraInfo")
            }
        }
        request.send();
    }
    if (residentes == '')
        document.getElementById("residentes" + num).innerHTML = "No hay residentes";
    else
        document.getElementById("residentes" + num).innerHTML = residentes;
}

let pilotos = (link, i) => {
    let pilotos = '';
    for (i = 0; i < link.length; i++) {
        //Preparamos la llamada
        let request = new XMLHttpRequest();
        //Definimos el tipo de peticion asi com la url
        request.open('GET', link[i], false);
        request.onload = function () {
            //almacenamos JSON  
            let data = JSON.parse(this.response)
            if (request.status >= 200 && request.status < 400) {
                pilotos += data.name + ", "
            } else {
                console.log("error extraInfo")
            }
        }
        request.send();
    }
    if (pilotos == '')
        document.getElementById("pilotos" + num).innerHTML = "No tiene pilotos";
    else
        document.getElementById("pilotos" + num).innerHTML = pilotos;
}