/// <reference path="auto.ts" />
/// <reference path="moto.ts" />

class Veiculos {
    private _veiculos = new Automovel.Carros();
    private _motos = new Motocicletas.Moto();


    createMoto(moto: string | string[]): void {
        this._motos.set(moto);
    }
    getMoto(): string [] {
        return this._motos.get();
    };

    createCarro(carro: string | string[]): void {
        this._veiculos.set(carro);
    }
    getCarro(): string [] {
        return this._veiculos.get();
    };
}

const comprarVeiculo = new Veiculos();


comprarVeiculo.createCarro(['Fiat Uno', 'Cobalt']);