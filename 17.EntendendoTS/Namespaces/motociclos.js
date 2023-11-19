"use strict";
var Automovel;
(function (Automovel) {
    class Carro {
        constructor() {
            this._automveis = [];
        }
        ;
        set(veiculo) {
            if (Array.isArray(veiculo)) {
                for (let item in veiculo) {
                    this._automveis.push(item);
                }
                this._automveis.push(String(veiculo));
            }
        }
        get() {
            return this._automveis;
        }
    }
    Automovel.Carro = Carro;
})(Automovel || (Automovel = {}));
