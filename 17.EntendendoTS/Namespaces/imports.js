"use strict";
/*
    Agora, imagine que você queira usar essas classes em outro arquivo sem ter que digitar todo o caminho do namespace toda vez. Você pode fazer um import de namespace da seguinte maneira a seguir.
*/
var Carro = Automovel.Carros;
class ImportedCar {
    constructor() {
        this._carro = new Carro();
    }
    getCar() {
        return this._carro.get();
    }
}
;
