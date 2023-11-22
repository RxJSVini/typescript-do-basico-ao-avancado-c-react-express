"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class EletroDomestico {
    constructor() {
        console.log('Tudo novo');
    }
}
;
function logarClasse(constructor) {
    console.log(constructor);
}
;
function decoratorVazio(_) { }
;
function logarClasseSe(valor) {
    return valor ? logarClasse : decoratorVazio;
}
function decorator(obj) {
    return function (_) {
        console.log(obj.a + ' ' + obj.b);
    };
}
// function logarObjeto(constructor: Function){
//     return class extends constructor {
//         constructor(...args: any[]){
//             console.log('Antes ...')
//             super(...args);
//             console.log('Depois ...')
//         }
//     }
// }
let Eletrodomesticos = class Eletrodomesticos {
    constructor(marca, preco) {
        this.marca = marca;
        this.preco = preco;
        console.log('novo de novo...');
    }
};
Eletrodomesticos = __decorate([
    imprimivel
], Eletrodomesticos);
function imprimivel(constructor) {
    constructor.prototype.imprimir = function () {
        console.log(this);
    };
}
// Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: false
};
let MudancaAdministrativa = class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!');
    }
};
MudancaAdministrativa = __decorate([
    perfilAdmin
], MudancaAdministrativa);
new MudancaAdministrativa().critico();
function perfilAdmin(construtor) {
    return class extends construtor {
        constructor(...args) {
            super(...args);
            if (!usuarioLogado || usuarioLogado.admin) {
                throw new Error('Sem permissão!');
            }
        }
    };
}
//Esse decorator irá empedir que o valor do método de saque e de leitura do saldo permitão a edição do valor de saldo.
function congelar(alvo, nomeMetodo, descriptor) {
    descriptor.writable = false;
}
class ContaCorrente {
    constructor(saldo = 0) {
        this.saldo = saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo = this.saldo - valor;
            return true;
        }
        else {
            console.log(`O valor disponivel para saque é de R$${this.saldo},00.\n\n Sendo assim não será possivel efetuar o saque pois excede o saldo da sua conta`);
            return false;
        }
    }
    getSaldo() {
        return this.saldo;
    }
}
__decorate([
    congelar
], ContaCorrente.prototype, "getSaldo", null);
const contaCorrente = new ContaCorrente(200);
contaCorrente.depositar(100);
contaCorrente.depositar(2005);
console.log(contaCorrente.sacar(850));
console.log(contaCorrente.getSaldo());
