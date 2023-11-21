// function saudarComOla(pessoa:{ nome: string}): string {
//     return `Olá ${pessoa.nome}`
// }

interface IPessoa {
    nome: string,
    idade?: number; // opcional
    // [key: string]: any;// Index Assignature - isso flexibiliza os itens de IPessoa,
    saudarPessoa?:(sobrenome: string) => void;
}


const person: IPessoa = {
    nome: 'Luiz',
    saudarPessoa(sobrenome:string){
        console.log(`Bem vindo ${this.nome} ${sobrenome}`)
    }
};


// Interface com classes 
interface IPessoa {
    nome: string,
    idade?: number; // opcional
    [key: string]: any;// Index Assignature - isso flexibiliza os itens de IPessoa,
    saudarPessoa?:(sobrenome: string) => void;
}


const yourperson: IPessoa = {
    nome: 'Luiz',
    saudarPessoa(sobrenome:string){
        console.log(`Bem vindo ${this.nome} ${sobrenome}`)
    }
};


// Interface com classes 

class Cliente implements IPessoa {
   nome: string = '';
    public ultimaCompra: Date = new Date;
    saudarPessoa (sobrenome:string): void {
        if(this.nome && sobrenome){
            console.log(`Bem vindo ${this.nome} ${sobrenome}`);
        }
        
        if(sobrenome && !this.nome){
            console.log(`Bem vindo Sr. ${sobrenome}`);
        }
    }
}

const meuClient = new Cliente();
console.log(meuClient.saudarPessoa('Skywalker'))
console.log(meuClient.ultimaCompra);

// interfaces no contexto de funções

interface FuncaoCalculo {
    (a: number, b: number): number;
};

let potencia: FuncaoCalculo;

potencia = function(base: number, exp: number): number {
    return base * exp;
}

// Desafio - Fazer a elevação de um numero vs a base, em apenas uma linha de código.

const desafioPotencia: FuncaoCalculo = (base: number, exp: number): number => Math.pow(base, exp);




