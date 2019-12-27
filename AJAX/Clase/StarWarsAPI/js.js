$(document).ready(function () {
    $('#errorNum').hide();
    $('#errorTit').hide();
    $('#Post').hide();

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

let postJs = () => {
    $('#Post').hide();
    let numero = document.getElementById('numero').value;
    let title = document.getElementById('title').value;
    if (vacio(numero)){
        $('#errorNum').text(" → No puedes dejar en blanco el campo numero");
        $('#errorNum').show();
    }
    else if (numeros(numero)){
        $('#errorNum').text(" → Solo puedes escribir numeros");
        $('#errorNum').show();
    }
    else if (numero <= 3){
        $('#errorNum').text(" → Tienes que escribir un numero mayor a 3, porque 1, 2 y 3 ya existen")
        $('#errorNum').show();
    }
    else if (vacio(title)){
        $('#errorNum').hide();
        $('#errorTit').text(" → No puedes dejar en blanco el campo titulo")
        $('#errorTit').show();
    }
    else {
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