class Dado {
    constructor(lados) {
        this.lados = lados;
    };

    setLados(lados) {
        this.lados = lados;
    }

    getLados() {
        return this.lados;
    }

    getRandom() {
        return Math.floor(Math.random() * this.lados) + 1;
    }
};
export { Dado };
