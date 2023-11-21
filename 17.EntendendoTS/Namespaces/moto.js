"use strict";
var Motocicletas;
(function (Motocicletas) {
    class Moto {
        constructor() {
            this._motos = [];
        }
        ;
        set(motocicleta) {
            if (Array.isArray(motocicleta)) {
                for (let item in motocicleta) {
                    this._motos.push(item);
                }
                this._motos.push(String(motocicleta));
            }
        }
        get() {
            return this._motos;
        }
    }
    Motocicletas.Moto = Moto;
})(Motocicletas || (Motocicletas = {}));
