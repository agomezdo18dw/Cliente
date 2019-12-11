$(document).ready(function () {
    //Preparamos la llamada
    let request = new XMLHttpRequest();
    //Definimos el tipo de peticion asi com la url
    request.open('GET', 'https://datos.aramendi.eu/datos.json', true);
    request.onload = function () {
        //almacenamos JSON
        let data = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
            for (let i = 0; i < data.length; i++) {
                let fila = '<tr>';
                fila += '<td>'+data[i].id+'</td>';
                fila += '<td>'+data[i].first_name+'</td>';
                fila += '<td>'+data[i].last_name+'</td>';
                                fila += '<td>'+data[i].email+'</td>';
                fila += '<td>'+data[i].gender+'</td>';
                fila += '</tr>';
                $('#tabla').append(fila);
            }
        } else {
            console.log('error')
        }
    }
    request.send();
});
