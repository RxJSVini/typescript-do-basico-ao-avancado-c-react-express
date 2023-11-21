"use strict";
var Automovel;
(function (Automovel) {
    class Carros {
        constructor() {
            this._carros = [];
        }
        ;
        set(carro) {
            if (Array.isArray(carro)) {
                for (let item in carro) {
                    this._carros.push(item);
                }
                this._carros.push(String(carro));
            }
        }
        get() {
            return this._carros;
        }
    }
    Automovel.Carros = Carros;
})(Automovel || (Automovel = {}));
