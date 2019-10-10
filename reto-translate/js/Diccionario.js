var dict = {
    "fechaHora": {
        en: "Charging date and hour...",
        eu: "Data eta ordua kargatzen...",
        es: "Cargando Fecha y hora..."
    },
    "desc": {
        en: "Description",
        eu: "Deskripzioa",
        es: "Descripcion"
    },
    "temp": {
        en: "Seasons",
        eu: "Demboraldiak",
        es: "Temporadas"
    },
    "act": {
        en: "Actors",
        eu: "Aktoreak",
        es: "Actores"
    },
    "merch": {
        en: "Merchandising",
        eu: "Merchandisinga",
        es: "Merchandising"
    },
    "mult": {
        en: "Multimedia",
        eu: "Multimedia",
        es: "Multimedia"
    },
    "ini": {
        en: "Home",
        eu: "Hasiera",
        es: "Inicio"
    },
    "tit": {
        en: "The A team",
        eu: "A taldea",
        es: "El equipo A"
    },
    "dur": {
        en: "Average duration of the chapter:",
        eu: "Kapituluaren batez besteko iraupena:",
        es: "Duracion media del cap.:"
    },
    "mins": {
        en: "60 minutes",
        eu: "60 minutu",
        es: "60 minutos"
    },
    "gen": {
        en: "Genre:",
        eu: "Generoa:",
        es: "Genero:"
    },
    "gen2": {
        en: "Action, adventure",
        eu: "Akzioa, abentura",
        es: "Accion, aventura"
    },
    "inf": {
        en: "Information:",
        eu: "Informazioa:",
        es: "Información:"
    },
    "inf2": {
        en: "TV serie (1983-1987)",
        eu: "TB seriea (1983-tik 1987-ra)",
        es: "Serie TV (1983-1987)"
    },
    "sin": {
        en: "Synopsis:",
        eu: "Laburpena:",
        es: "Sinopsis:"
    },
    "sin2": {
        en: "It tells the adventures of a group of four deserter soldiers from the Vietnam War, who work as mercenaries, always for just causes.",
        eu: "Vietnamgo gerrako lau soldadu desertoreren talde baten abenturak kontatzen ditu, mertzenario gisa lan egiten dutenak, beti arrazoi arrazoi batzuengatik.",
        es: "Narra las andanzas de un grupo de cuatro soldados desertores de la guerra de Vietnam, que trabajan como mercenarios, siempre por causas justas."
    },
}
function cambiarIdioma(idioma){
    var translator = $('body').translate({lang: idioma, t: dict});
}