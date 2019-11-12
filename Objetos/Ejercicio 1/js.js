let biblioteca = [
    {
        autor: 'Manuel Vilas',
        titulo: 'Alegria',
        genero: 'Novela contemporanea'
    },
    {
        autor: 'Fernando Aramburu',
        titulo: 'Patria',
        genero: 'Novela literaria'
    },
    {
        autor: 'Luis Landero',
        titulo: 'Lluvia fina',
        genero: 'Novela literaria'
    },
    {
        autor: 'Annette Hess',
        titulo: 'La casa alemana',
        genero: 'Novela histórica'
    },
    {
        autor: 'Confesiones del segundo piloto',
        titulo: 'El diario de Eliseo. Caballo de Troya',
        genero: 'Novela histórica'
    }
];
for (i = 0; i < biblioteca.length; i++) {
    let infoLibros = "Libro " + i + ":\n";
    infoLibros += "Titulo: " + biblioteca[i].titulo + "\n";
    infoLibros += "Autor: " + biblioteca[i].autor + "\n";
    infoLibros += "Genero: " + biblioteca[i].genero + "\n";
    console.log(infoLibros);
}