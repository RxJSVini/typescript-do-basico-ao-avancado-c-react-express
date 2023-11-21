// Funções
function imprimePessoa<T>(pessoa:T) {
    console.log(pessoa);
}

imprimePessoa<string>('Vinicius');

imprimePessoa<number>(25);


// Array
function imprimePessoas<T>(args: T[]) : void {
    console.log(args);
}

imprimePessoas<string>(['Boruto', 'Kurama']);
imprimePessoas<number>([1, 2, 3]);


// Tipo genérico
type Echo = <T>(data: T) => T;

//Classes com generics

abstract class OperacaoBinaria<T, R>{
    constructor(
        public operando1: T,
        public operando2: T
    ){

    }

    abstract executar(): R
};

// Numeros
// const operacaoBinaria = new OperacaoBinaria(1, 5);
// console.log(operacaoBinaria.executar<number>())

//Strings
// const operacaoComStrings = new OperacaoBinaria('Vinicius', 'P');
// console.log(operacaoComStrings.executar<string>())

class SomaBinaria extends OperacaoBinaria<number, number> {
    executar(): number {
        return this.operando1 + this.operando2
    }
}


//Criando classe com generics 03

class DiferencaEntreDatas extends OperacaoBinaria<Data, string> {
    getTime(data: Data): number {
        let { dia, mes, ano} = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime()
    }


    executar(): string {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diferenca = Math.abs(t1 - t2);

        return `${Math.ceil(diferenca / 1)} dias(s)`;
    }
};


// Desafio Classe fila
// Atributo fila (Array)
// Métodos: Entrar, proximo, imprimir


class QueueManager<T> {
    private _queueList: T[] = new Array();

    public enter(arg: T): void {
        this._queueList.push(arg);
    }

    public next() {
        return this._queueList.shift();
    }

    public print(): T[] {
        return this._queueList;
    }
};

const queue = new QueueManager<number>();
queue.enter(1);