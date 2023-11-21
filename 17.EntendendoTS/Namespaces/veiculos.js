"use strict";
/// <reference path="auto.ts" />
/// <reference path="moto.ts" />
class Veiculos {
    constructor() {
        this._veiculos = new Automovel.Carros();
        this._motos = new Motocicletas.Moto();
    }
    createMoto(moto) {
        this._motos.set(moto);
    }
    getMoto() {
        return this._motos.get();
    }
    ;
    createCarro(carro) {
        this._veiculos.set(carro);
    }
    getCarro() {
        return this._veiculos.get();
    }
    ;
}
const comprarVeiculo = new Veiculos();
comprarVeiculo.createCarro(['Fiat Uno', 'Cobalt']);
