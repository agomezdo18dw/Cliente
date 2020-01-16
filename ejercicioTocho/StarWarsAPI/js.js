$(document).ready(function () {
    $('#errorNum').hide();
    $('#errorTit').hide();
    $('table').hide();
    $('#error').hide();
    $('#advertencia').hide();

    $('#getJquery').click(function () {
        $('table').hide();
        $('#trPe').text('');
        $('#trPl').text('');
        $('#trSt').text('');
        $('#error').hide();
        $('#post').hide();
        $('#tipo').hide();
        $('#advertencia').hide();
        $('#errorNum').hide();
        $('#errorTit').hide();
        let numero = document.getElementById('numero').value;
        let tipos = document.getElementById("tipos");
        let tipo = tipos.options[tipos.selectedIndex].value;
        if (vacio(numero)) {
            $('#errorNum').text('El campo no puede estar vacio y solo puede contener numeros');
            $('#errorNum').show();
        }
        else {
            $.get("https://swapi.co/api/" + tipo + "/" + numero + "/", function (data, status) {
                if (status == "success") {
                    if (tipo === "people") {
                        $('#getPersona').show();
                        $('#tipo').text('Get JQuery - Personas');
                        $('#tipo').show();
                        $('#advertencia').show();
                        $('#trPe').text('');
                        $('#trPe').append('<td scope="row">' + data.name + '</td>');
                        $('#trPe').append('<td>' + data.height + '-' + data.mass + '</td>');
                        $('#trPe').append('<td>' + data.hair_color + '-' + data.skin_color + '-' + data.eye_color + '</td>');
                        $('#trPe').append('<td>' + data.birtd_year + '</td>');
                        $('#trPe').append('<td>' + data.gender + '</td>');
                        $('#trPe').append('<td id="residencia"><label class="text-primary">Cargando...</label></td>');
                        $('#trPe').append('<td id="films"><label class="text-primary">Cargando...</label></td>');
                        $('#trPe').append('<td id="especie"><label class="text-primary">Cargando...</label></td>');
                        $('#trPe').append('<td id="vehiculos"><label class="text-primary">Cargando...</label></td>');
                        $('#trPe').append('<td id="naves"><label class="text-primary">Cargando...</label></td>');
                        $('#trPe').append('<td>' + data.url + '</td>');
                        homeworld(data.homeworld);
                        films(data.films);
                        especie(data.species);
                        vehiculos(data.vehicles);
                        naves(data.starships);
                    } else if (tipo === "planets") {
                        $('#getPlaneta').show();
                        $('#tipo').text('Get JQuery - Planetas');
                        $('#tipo').show();
                        $('#advertencia').show();
                        $('#trPl').text('');
                        $('#trPl').append('<td scope="row">' + data.name + '</td>');
                        $('#trPl').append('<td>' + data.rotation_period + '-' + data.orbital_period + '</td>');
                        $('#trPl').append('<td>' + data.diameter + '</td>');
                        $('#trPl').append('<td>' + data.climate + '</td>');
                        $('#trPl').append('<td>' + data.gravity + '</td>');
                        $('#trPl').append('<td>' + data.terrain + '</td>');
                        $('#trPl').append('<td>' + data.surface_water + '</td>');
                        $('#trPl').append('<td>' + data.population + '</td>');
                        $('#trPl').append('<td id="residentes"><label class="text-primary">Cargando...</label></td>');
                        $('#trPl').append('<td id="films"><label class="text-primary">Cargando...</label></td>');
                        $('#trPl').append('<td>' + data.url + '</td>');
                        residentes(data.residents);
                        films(data.films);
                    } else if (tipo === "starships") {
                        $('#getNave').show();
                        $('#tipo').text('Get JQuery - Naves');
                        $('#tipo').show();
                        $('#advertencia').show();
                        $('#trSt').text('');
                        $('#trSt').append('<td scope="row">' + data.name + '</td>');
                        $('#trSt').append('<td>' + data.model + '</td>');
                        $('#trSt').append('<td>' + data.manufacturer + '</td>');
                        $('#trSt').append('<td>' + data.cost_in_credits + '</td>');
                        $('#trSt').append('<td>' + data.length + '</td>');
                        $('#trSt').append('<td>' + data.max_atmosphering_speed + '</td>');
                        $('#trSt').append('<td>' + data.crew + '-' + data.passengers + '</td>');
                        $('#trSt').append('<td>' + data.cargo_capacity + '</td>');
                        $('#trSt').append('<td>' + data.consumables + '</td>');
                        $('#trSt').append('<td>' + data.hyperdrive_rating + '</td>');
                        $('#trSt').append('<td>' + data.MGLT + '</td>');
                        $('#trSt').append('<td id="pilotos"><label class="text-primary">Cargando...</label></td>');
                        $('#trSt').append('<td id="films"><label class="text-primary">Cargando...</label></td>');
                        $('#trSt').append('<td>' + data.url + '</td>');
                        pilotos(data.pilots);
                        films(data.films);
                    }
                }
            }).fail(function () {
                if (tipo === "people")
                    $('#tipo').text('Get JQuery - Personas');
                else if (tipo === "planets")
                    $('#tipo').text('Get JQuery - Planetas');
                else if (tipo === "starships")
                    $('#tipo').text('Get JQuery - Naves');
                $('#tipo').show()
                $('#error').show();
            });
        };
    });

    $('#postJquery').click(function () {
        $('table').hide();
        $('#tipo').hide();
        $('#advertencia').hide();
        $('#error').hide();
        let numero = document.getElementById('numero').value;
        let title = document.getElementById('titulo').value;
        if (vacio(numero)) {
            $('#errorNum').text("El campo no puede estar vacio y solo puede contener numeros");
            $('#errorNum').show();
        } else if (numeros(numero)) {
            $('#errorNum').text("Solo puedes escribir numeros");
            $('#errorNum').show();
        } else if (numero <= 3) {
            $('#errorNum').text("Tienes que escribir un numero mayor a 3, porque 1, 2 y 3 ya existen");
            $('#errorNum').show();
        } else if (vacio(title)) {
            $('#errorNum').hide();
            $('#errorTit').text("No puedes dejar en blanco el campo titulo");
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
                        $('#tipo').text('Post JQuery');
                        $('#tipo').show();
                        $('#postTr').text('');
                        $('#postTr').append('<td scope="row">' + data.id + '</td>');
                        $('#postTr').append('<td>' + data.title + '</td>');
                        $('#post').show();
                    } else
                        $('#error').show();
                });
        };
    });
});

let getJS = () => {
    $('table').hide();
    $('#trPe').text('');
    $('#trPl').text('');
    $('#trSt').text('');
    $('#error').hide();
    $('#post').hide();
    $('#tipo').hide();
    $('#advertencia').hide();
    $('#errorNum').hide();
    $('#errorTit').hide();
    let numero = document.getElementById('numero').value;
    let tipos = document.getElementById("tipos");
    if (vacio(numero)) {
        $('#errorNum').text('El campo no puede estar vacio y solo puede contener numeros');
        $('#errorNum').show();
    }
    else {
        let tipo = tipos.options[tipos.selectedIndex].value;
        //Preparamos la llamada
        let request = new XMLHttpRequest();
        //Definimos el tipo de peticion asi com la url
        request.open('GET', 'https://swapi.co/api/' + tipo + '/' + numero + '/', true);
        request.onload = function () {
            //almacenamos JSON
            let data = JSON.parse(this.response);
            if (request.status >= 200 && request.status < 400) {
                if (tipo === "people") {
                    $('#getPersona').show();
                    $('#tipo').text('Get JS - Personas');
                    $('#tipo').show();
                    $('#advertencia').show();
                    $('#trPe').text('');
                    $('#trPe').append('<td scope="row">' + data.name + '</td>');
                    $('#trPe').append('<td>' + data.height + '-' + data.mass + '</td>');
                    $('#trPe').append('<td>' + data.hair_color + '-' + data.skin_color + '-' + data.eye_color + '</td>');
                    $('#trPe').append('<td>' + data.birtd_year + '</td>');
                    $('#trPe').append('<td>' + data.gender + '</td>');
                    $('#trPe').append('<td id="residencia"><label class="text-primary">Cargando...</label></td>');
                    $('#trPe').append('<td id="films"><label class="text-primary">Cargando...</label></td>');
                    $('#trPe').append('<td id="especie"><label class="text-primary">Cargando...</label></td>');
                    $('#trPe').append('<td id="vehiculos"><label class="text-primary">Cargando...</label></td>');
                    $('#trPe').append('<td id="naves"><label class="text-primary">Cargando...</label></td>');
                    $('#trPe').append('<td>' + data.url + '</td>');
                    homeworld(data.homeworld);
                    films(data.films);
                    especie(data.species);
                    vehiculos(data.vehicles);
                    naves(data.starships);
                } else if (tipo === "planets") {
                    $('#getPlaneta').show();
                    $('#tipo').text('Get JS - Planetas');
                    $('#tipo').show();
                    $('#advertencia').show();
                    $('#trPl').text('');
                    $('#trPl').append('<td scope="row">' + data.name + '</td>');
                    $('#trPl').append('<td>' + data.rotation_period + '-' + data.orbital_period + '</td>');
                    $('#trPl').append('<td>' + data.diameter + '</td>');
                    $('#trPl').append('<td>' + data.climate + '</td>');
                    $('#trPl').append('<td>' + data.gravity + '</td>');
                    $('#trPl').append('<td>' + data.terrain + '</td>');
                    $('#trPl').append('<td>' + data.surface_water + '</td>');
                    $('#trPl').append('<td>' + data.population + '</td>');
                    $('#trPl').append('<td id="residentes"><label class="text-primary">Cargando...</label></td>');
                    $('#trPl').append('<td id="films"><label class="text-primary">Cargando...</label></td>');
                    $('#trPl').append('<td>' + data.url + '</td>');
                    residentes(data.residents);
                    films(data.films);
                } else if (tipo === "starships") {
                    $('#getNave').show();
                    $('#tipo').text('Get JS - Naves');
                    $('#tipo').show();
                    $('#advertencia').show();
                    $('#trSt').text('');
                    $('#trSt').append('<td scope="row">' + data.name + '</td>');
                    $('#trSt').append('<td>' + data.model + '</td>');
                    $('#trSt').append('<td>' + data.manufacturer + '</td>');
                    $('#trSt').append('<td>' + data.cost_in_credits + '</td>');
                    $('#trSt').append('<td>' + data.length + '</td>');
                    $('#trSt').append('<td>' + data.max_atmosphering_speed + '</td>');
                    $('#trSt').append('<td>' + data.crew + '-' + data.passengers + '</td>');
                    $('#trSt').append('<td>' + data.cargo_capacity + '</td>');
                    $('#trSt').append('<td>' + data.consumables + '</td>');
                    $('#trSt').append('<td>' + data.hyperdrive_rating + '</td>');
                    $('#trSt').append('<td>' + data.MGLT + '</td>');
                    $('#trSt').append('<td id="pilotos"><label class="text-primary">Cargando...</label></td>');
                    $('#trSt').append('<td id="films"><label class="text-primary">Cargando...</label></td>');
                    $('#trSt').append('<td>' + data.url + '</td>');
                    pilotos(data.pilots);
                    films(data.films);
                }
            } else {
                if (tipo === "people")
                    $('#tipo').text('Get JS - Personas');
                else if (tipo === "planets")
                    $('#tipo').text('Get JS - Planetas');
                else if (tipo === "starships")
                    $('#tipo').text('Get JS - Naves');
                $('#tipo').show()
                $('#error').show();
            };
        };
        request.send();
    };
};

let postJs = () => {
    $('table').hide();
    $('#tipo').hide();
    $('#advertencia').hide();
    $('#error').hide();
    let numero = document.getElementById('numero').value;
    let title = document.getElementById('titulo').value;
    if (vacio(numero)) {
        $('#errorNum').text("El campo no puede estar vacio y solo puede contener numeros");
        $('#errorNum').show();
    } else if (numeros(numero)) {
        $('#errorNum').text("Solo puedes escribir numeros");
        $('#errorNum').show();
    } else if (numero <= 3) {
        $('#errorNum').text("Tienes que escribir un numero mayor a 3, porque 1, 2 y 3 ya existen");
        $('#errorNum').show();
    } else if (vacio(title)) {
        $('#errorNum').hide();
        $('#errorTit').text("No puedes dejar en blanco el campo titulo");
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
                $('#tipo').text('Post JS');
                $('#tipo').show();
                $('#postTr').text('');
                $('#postTr').append('<td scope="row">' + post.id + '</td>');
                $('#postTr').append('<td>' + post.title + '</td>');
                $('#post').show();
            }
            /*Si pongo esto me da error primero y luego me dice si se ha posteado correctamente
             *else
             *  $('#error').show();
             */
        };
    };

};

//Funcion que valida si un campo esta vacio
let vacio = (dato) => {
    if (dato == "")
        return true;
    else
        return false;
};

//Funcion que valida si un campo tiene solo numeros
let numeros = (dato) => {
    if (dato.match(/[0-9]/m))
        return false;
    else
        return true;
};

let homeworld = (link) => {
    if (link == '')
        document.getElementById("residencia").innerHTML = 'No se sabe';
    else {
        //Preparamos la llamada
        let request = new XMLHttpRequest();
        //Definimos el tipo de peticion asi com la url
        request.open('GET', link, true);
        request.onload = function () {
            //almacenamos JSON  
            let data = JSON.parse(this.response);
            if (request.status >= 200 && request.status < 400)
                document.getElementById("residencia").innerHTML = data.name;
            else
                document.getElementById("residencia").innerHTML = "<label class='text-danger'>Error</label>";
        }
        request.send();
    };
};

let films = (link) => {
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
                if (i + 1 == link.length)
                    pelis += data.title + ".";
                else
                    pelis += data.title + ", ";
            } else
                pelis = "<label class='text-danger'>Error</label>";
        }
        request.send();
    };
    if (pelis == '')
        document.getElementById("films").innerHTML = "No sale en pelis";
    else
        document.getElementById("films").innerHTML = pelis;
};

let especie = (link) => {
    if (link == '')
        document.getElementById("especie").innerHTML = 'No se sabe';
    else {
        //Preparamos la llamada
        let request = new XMLHttpRequest();
        //Definimos el tipo de peticion asi com la url
        request.open('GET', link, true);
        request.onload = function () {
            //almacenamos JSON  
            let data = JSON.parse(this.response);
            if (request.status >= 200 && request.status < 400)
                document.getElementById("especie").innerHTML = data.name;
            else
                document.getElementById("especie").innerHTML = "<label class='text-danger'>Error</label>";

        }
        request.send();
    };
};

let vehiculos = (link) => {
    let vehiculos = '';
    for (i = 0; i < link.length; i++) {
        //Preparamos la llamada
        let request = new XMLHttpRequest();
        //Definimos el tipo de peticion asi com la url
        request.open('GET', link[i], false);
        request.onload = function () {
            //almacenamos JSON  
            let data = JSON.parse(this.response);
            if (request.status >= 200 && request.status < 400) {
                if (i + 1 == link.length)
                    vehiculos += data.name + ".";
                else
                    vehiculos += data.name + ", ";
            } else
                vehiculos = "<label class='text-danger'>Error</label>";
        }
        request.send();
    }
    if (vehiculos == '')
        document.getElementById("vehiculos").innerHTML = "No tiene vehiculos";
    else
        document.getElementById("vehiculos").innerHTML = vehiculos;
};

let naves = (link) => {
    let naves = '';
    for (i = 0; i < link.length; i++) {
        //Preparamos la llamada
        let request = new XMLHttpRequest();
        //Definimos el tipo de peticion asi com la url
        request.open('GET', link[i], false);
        request.onload = function () {
            //almacenamos JSON  
            let data = JSON.parse(this.response);
            if (request.status >= 200 && request.status < 400) {
                if (i + 1 == link.length)
                    naves += data.name + ".";
                else
                    naves += data.name + ", ";
            } else
                naves = "<label class='text-danger'>Error</label>";
        }
        request.send();
    }
    if (naves == '')
        document.getElementById("naves").innerHTML = "No tiene naves";
    else
        document.getElementById("naves").innerHTML = naves;
};

let residentes = (link) => {
    let residentes = '';
    for (i = 0; i < link.length; i++) {
        //Preparamos la llamada
        let request = new XMLHttpRequest();
        //Definimos el tipo de peticion asi com la url
        request.open('GET', link[i], false);
        request.onload = function () {
            //almacenamos JSON  
            let data = JSON.parse(this.response);
            if (request.status >= 200 && request.status < 400) {
                if (i + 1 == link.length)
                    residentes += data.name + ".";
                else
                    residentes += data.name + ", ";
            } else
                residentes = "<label class='text-danger'>Error</label>";
        }
        request.send();
    }
    if (residentes == '')
        document.getElementById("residentes").innerHTML = "No hay residentes";
    else
        document.getElementById("residentes").innerHTML = residentes;
};

let pilotos = (link) => {
    let pilotos = '';
    for (i = 0; i < link.length; i++) {
        //Preparamos la llamada
        let request = new XMLHttpRequest();
        //Definimos el tipo de peticion asi com la url
        request.open('GET', link[i], false);
        request.onload = function () {
            //almacenamos JSON  
            let data = JSON.parse(this.response);
            if (request.status >= 200 && request.status < 400) {
                if (i + 1 == link.length)
                    pilotos += data.name + ".";
                else
                    pilotos += data.name + ", ";
            } else
                pilotos = "<label class='text-danger'>Error</label>";
        }
        request.send();
    }
    if (pilotos == '')
        document.getElementById("pilotos").innerHTML = "No hay pilotos";
    else
        document.getElementById("pilotos").innerHTML = pilotos;
};