namespace Automovel {
    export class Carro {
        constructor(){};
        
        private _automveis: string[] = [];
        protected set(veiculo: string | string[]): void {
            if(Array.isArray(veiculo)){
                for(let item in veiculo){
                    this._automveis.push(item);
                }
                this._automveis.push(String(veiculo));
            }
        }

        protected get(){
            return this._automveis as string[];
        }
    }
}