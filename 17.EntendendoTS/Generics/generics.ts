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

    public next(): T | undefined{
        return this._queueList.shift();
    }

    public print(): T[] {
        return this._queueList;
    }
};

const queue = new QueueManager<number>();
queue.enter(1);
queue.enter(2);
queue.enter(3);
queue.enter(4);
queue.enter(5);


console.log(queue.print())
queue.next();
console.log(queue.print())
queue.enter(5)
queue.enter(6)
queue.enter(7)
console.log(queue.print());


//Contrains

// Quando ao user um generic, eu defino obrigatóriamente o tipo, por meio de herança.

//Exemplo


class Constrainsts<T extends number> {};

// Feito isso, o T deverá ser do tipo number obrigatóriamente.



// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()
 
// const mapa = new Mapa<number, string>()
// mapa.colocar({ chave: 1, valor: 'Pedro' })
// mapa.colocar({ chave: 2, valor: 'Rebeca' })
// mapa.colocar({ chave: 3, valor: 'Maria' })
// mapa.colocar({ chave: 1, valor: 'Gustavo' })
 
// console.log(mapa.obter(2))
// mapa.imprimir()
// mapa.limpar()
// mapa.imprimir()



// Controller

export interface User {
    id: string | number; // Chave única para o usuário
    email: string; // Endereço de e-mail do usuário
    password: string; // Senha (armazenada de forma segura)
}

export interface CustomResponse<T = any> {};
export interface CustomRequest<T = any> {};

interface Controller<T = any> {
    create(req: CustomRequest, res: CustomResponse): T;
    read(req: CustomRequest, res: CustomResponse): T;
    put(req: CustomRequest, res: CustomResponse): T;
    delete(req: CustomRequest, res: CustomResponse):T;
};


export class UserController implements Controller {
    
    public create(
        req: CustomRequest, 
        res: CustomResponse) {
        
    console.log(res);
    }
    public read(req: CustomRequest, res: CustomResponse): User[] {

        let userList: User[] = new Array();

        const user: User = {
            id: 1,
            email: 'contato@exemple.com',
            password: '123456'
        }

        userList.push(user);

        return userList;
    }

    public put(req: CustomRequest, res: CustomResponse) {
        
    }
    public  delete(req: CustomRequest, res: CustomResponse) {
        
    }

};