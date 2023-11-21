namespace Motocicletas {
    export class Moto {
        constructor(){};
        
        private _motos: string[] = [];
        public set(motocicleta: string | string[]): void {
            if(Array.isArray(motocicleta)){
                for(let item in motocicleta){
                    this._motos.push(item);
                }
                this._motos.push(String(motocicleta));
            }
        }

        public get(): string [] {
            return this._motos as string[];
        }
    }
}