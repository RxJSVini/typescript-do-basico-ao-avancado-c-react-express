/*
    Agora, imagine que você queira usar essas classes em outro arquivo sem ter que digitar todo o caminho do namespace toda vez. Você pode fazer um import de namespace da seguinte maneira a seguir.
*/

import Carro = Automovel.Carros;

class ImportedCar {
    private _carro =  new Carro();

    getCar(): string [] {
        return this._carro.get() as string[];
    }
};