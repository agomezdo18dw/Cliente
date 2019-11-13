let persona = {
    nombre: '',
    apellido: '',
    email: '',
    dni: '',
    asignar_datos: function (obj) {
        this.nombre = obj.name;
        this.apellido = obj.surname;
        this.email = obj.mail;
        this.dni = obj.dni;
    }
};
let datos = JSON.parse('{"alien":[{"name":"paul", "surname":"x", "mail":"alien@gmail.com","dni":"XXXXXXXX"}]}');

persona.asignar_datos(datos.alien[0]);

console.log("PERSONA 1: \n Nombre: " + persona.nombre + "\n Apellido: " + persona.apellido + "\n Email: " + persona.email + "\n DNI: " + persona.dni);

let persona2 = {
    nombre: '',
    apellido: '',
    email: '',
    dni: '',
    set ponerDatos(obj) {
        this.nombre = obj.name;
        this.apellido = obj.surname;
        this.email = obj.mail;
        this.dni = obj.dni;
    },
    get cogerDatos() {
        let datos = "PERSONA 2: \n";
        datos += " Nombre: " + this.nombre;
        datos += "\n Apellido: " + this.apellido;
        datos += "\n Email: " + this.email;
        datos += "\n DNI: " + this.dni;
        return datos;
    }
};
let datos2 = JSON.parse('{"alien":[{"name":"ete", "surname":"x", "mail":"alien2@gmail.com","dni":"YYYYYYYY"}]}');

persona2.ponerDatos = datos2.alien[0];

console.log(persona2.cogerDatos);
