$(document).ready(function () {
    /*let aliens = '{"alien":[{"name": "paul","surname": "x","mail": "alien@gmail.com","dni": "XXXXXXXX"},{"name": "ete","surname": "x","mail": "alien2@gmail.com","dni": "YYYYYYYY"}]}';
    aliens = JSON.parse(aliens)
    console.log(aliens)*/
    
    import {Car, Model} from './modulos.js';

    let mycar = new Model("Ford", "Mustang");
    
    document.getElementById("demo").innerHTML = mycar.show();
});
