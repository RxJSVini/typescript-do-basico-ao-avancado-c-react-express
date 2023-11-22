"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
// Funções
function imprimePessoa(pessoa) {
    console.log(pessoa);
}
imprimePessoa('Vinicius');
imprimePessoa(25);
// Array
function imprimePessoas(args) {
    console.log(args);
}
imprimePessoas(['Boruto', 'Kurama']);
imprimePessoas([1, 2, 3]);
//Classes com generics
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
;
// Numeros
// const operacaoBinaria = new OperacaoBinaria(1, 5);
// console.log(operacaoBinaria.executar<number>())
//Strings
// const operacaoComStrings = new OperacaoBinaria('Vinicius', 'P');
// console.log(operacaoComStrings.executar<string>())
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
//Criando classe com generics 03
class DiferencaEntreDatas extends OperacaoBinaria {
    getTime(data) {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    executar() {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diferenca = Math.abs(t1 - t2);
        return `${Math.ceil(diferenca / 1)} dias(s)`;
    }
}
;
// Desafio Classe fila
// Atributo fila (Array)
// Métodos: Entrar, proximo, imprimir
class QueueManager {
    constructor() {
        this._queueList = new Array();
    }
    enter(arg) {
        this._queueList.push(arg);
    }
    next() {
        return this._queueList.shift();
    }
    print() {
        return this._queueList;
    }
}
;
const queue = new QueueManager();
queue.enter(1);
queue.enter(2);
queue.enter(3);
queue.enter(4);
queue.enter(5);
console.log(queue.print());
queue.next();
console.log(queue.print());
queue.enter(5);
queue.enter(6);
queue.enter(7);
console.log(queue.print());
//Contrains
// Quando ao user um generic, eu defino obrigatóriamente o tipo, por meio de herança.
//Exemplo
class Constrainsts {
}
;
;
;
;
class UserController {
    create(req, res) {
        console.log(res);
    }
    read(req, res) {
        let userList = new Array();
        const user = {
            id: 1,
            email: 'contato@exemple.com',
            password: '123456'
        };
        userList.push(user);
        return userList;
    }
    put(req, res) {
    }
    delete(req, res) {
    }
}
exports.UserController = UserController;
;
