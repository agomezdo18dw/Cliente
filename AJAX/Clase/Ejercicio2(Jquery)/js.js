$(document).ready(function () {
    $.get("https://datos.aramendi.eu/datos.json", function (data, status) {
        if (status == "success") {
            for (let i = 0; i < data.length; i++) {
                let fila = '<tr>';
                fila += '<td>' + data[i].id + '</td>';
                fila += '<td>' + data[i].first_name + '</td>';
                fila += '<td>' + data[i].last_name + '</td>';
                fila += '<td>' + data[i].email + '</td>';
                fila += '<td>' + data[i].gender + '</td>';
                fila += '</tr>';
                $('#tabla').append(fila);
            }
        } else {
            console.log('error')
        }
    });
});
