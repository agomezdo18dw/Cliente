class Tanque {
    constructor(modelo, pais, tipo, velocidad, artilleria, peso, longitud, anchura, altura, tripulacion) {
        this.modelo = modelo;
        this.pais = pais;
        this.tipo = tipo;
        this.velocidad = velocidad;
        this.artilleria = artilleria;
        this.peso = peso;
        this.longitud = longitud;
        this.anchura = anchura;
        this.altura = altura;
        this.tripulacion = tripulacion;
    };

    setModelo(modelo) {
        this.modelo = modelo;
    }

    getModelo() {
        return this.modelo;
    }

    setPais(pais) {
        this.pais = pais;
    }

    getPais() {
        return this.pais;
    }

    setTipo(tipo) {
        this.tipo = tipo;
    }

    getTipo() {
        return this.tipo;
    }

    setVelocidad(velocidad) {
        this.velocidad = velocidad;
    }

    getVelocidad() {
        return this.velocidad;
    }

    setArtilleria(artilleria) {
        this.artilleria = artilleria;
    }

    getArtilleria() {
        return this.artilleria;
    }

    setPeso(peso) {
        this.peso = peso;
    }

    getPeso() {
        return this.peso;
    }

    setLongitud(longitud) {
        this.longitud = longitud;
    }

    getLongitud() {
        return this.longitud;
    }

    setAnchura(anchura) {
        this.anchura = anchura;
    }

    getAnchura() {
        return this.anchura;
    }

    setAltura(altura) {
        this.altura = altura;
    }

    getAltura() {
        return this.altura;
    }

    setTripulacion(tripulacion) {
        this.tripulacion = tripulacion;
    }

    getTripulacion() {
        return this.tripulacion;
    }
};
export { Tanque };
