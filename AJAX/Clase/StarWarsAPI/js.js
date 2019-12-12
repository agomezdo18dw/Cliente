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
        let datos = document.getElementById('datos').value;
        $.post("https://my-json-server.typicode.com/typicode/demo/posts", {
                id: numero,
                datos: datos
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
    let numero = document.getElementById('numero').value;
    let datos = document.getElementById('datos').value;
    //Preparamos la llamada
    let request = new XMLHttpRequest();
    
    request.open('POST', 'https://my-json-server.typicode.com/typicode/demo/posts', true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200)
            console.log(this.responseText);
        else 
            console.log("error")
    };
    request.send("id="+numero+"&datos="+datos);
}
