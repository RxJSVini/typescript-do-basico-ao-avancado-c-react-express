namespace Automovel {
    export class Carros {
        constructor(){};
        
        private _carros: string[] = [];
        public set(carro: string | string[]): void {
            if(Array.isArray(carro)){
                for(let item in carro){
                    this._carros.push(item);
                }
                this._carros.push(String(carro));
            }
        }

        public get(): string[] {
            return this._carros as string[];
        }
    }
}