"use strict";
// function saudarComOla(pessoa:{ nome: string}): string {
//     return `Olá ${pessoa.nome}`
// }
const person = {
    nome: 'Luiz',
    saudarPessoa(sobrenome) {
        console.log(`Bem vindo ${this.nome} ${sobrenome}`);
    }
};
const yourperson = {
    nome: 'Luiz',
    saudarPessoa(sobrenome) {
        console.log(`Bem vindo ${this.nome} ${sobrenome}`);
    }
};
// Interface com classes 
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    saudarPessoa(sobrenome) {
        if (this.nome && sobrenome) {
            console.log(`Bem vindo ${this.nome} ${sobrenome}`);
        }
        if (sobrenome && !this.nome) {
            console.log(`Bem vindo Sr. ${sobrenome}`);
        }
    }
}
const meuClient = new Cliente();
console.log(meuClient.saudarPessoa('Skywalker'));
console.log(meuClient.ultimaCompra);
;
let potencia;
potencia = function (base, exp) {
    return base * exp;
};
// Desafio - Fazer a elevação de um numero vs a base, em apenas uma linha de código.
const desafioPotencia = (base, exp) => Math.pow(base, exp);
