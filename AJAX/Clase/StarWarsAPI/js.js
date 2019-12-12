$(document).ready(function () {
    $('#getJquery').click(function () {
        let numero = document.getElementById('numero').value;
        let tipos = document.getElementById("tipos");
        let tipo = tipos.options[tipos.selectedIndex].value;

        $.get("https://swapi.co/api/" + tipo + "/" + numero + "/", function (data, status) {
            if (status == "success") {
                console.log(data)
            } else {
                console.log('error')
            }
        });
    });

    $('#postJquery').click(function () {
        let numero = document.getElementById('numero').value;
        let title = document.getElementById('title').value;
        $.post("https://my-json-server.typicode.com/typicode/demo/posts", {
                id: numero,
                title: title
            },
            function (data, status) {
                if (status == "success") {
                    console.log(data)
                } else {
                    console.log('error')
                }
            });
    });
});

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
        } else {
            console.log('error')
        }
    }
    request.send();
}

let posts = [];
let idPost = 3;
let postJs = () => {
    if (posts.length === 0) {
        $.get("https://my-json-server.typicode.com/typicode/demo/posts", function (data, status) {
            if (status == "success")
                posts = data;
        });
    }
    let numero = document.getElementById('numero').value;
    let title = document.getElementById('title').value;
    if (vacio(numero))
        console.log("No puedes dejar en blanco el campo numero")
    else if (numeros(numero))
        console.log("Solo puedes escribir numeros")
    else if (numero <= 3)
        console.log("Tienes que escribir un numero mayor a 3, porque 1,2,3 ya existen")
    else if (vacio(title))
        console.log("No puedes dejar en blanco el campo titulo")
    else {
        //Preparamos la llamada
        let request = new XMLHttpRequest();
        request.open('POST', 'https://my-json-server.typicode.com/typicode/demo/posts', true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.send("id=" + numero + "&title=" + title);
        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 201) { //Normalmente el post usa 201 en vez de 200
                posts.push(JSON.parse(this.responseText));
                console.log(posts)
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