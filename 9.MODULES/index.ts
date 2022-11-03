// 1 - Importação de arquivos
import importGreet from "./greet";

console.log(importGreet("Vinicius"));

// 2 - Exportação de variaveis
import { x } from "./variables";

console.log(x);

// 3 - Multiplas importações

import {a, b, myFunction} from "./multiple";
console.log(a);
console.log(b);
console.log(myFunction());

// 4 - Alias

import  {myName as aliasName} from "./alias";
console.log(aliasName);


// 5 - Importação de todos os itens como alias

import * as myNumbers from "./numbers";


console.log(myNumbers.n1)
console.log(myNumbers.n2)
console.log(myNumbers.n3)

// 6 - Importando tipos

import { Pessoa } from "./types";
class Usuario implements Pessoa {
    nome 
    idade
    altura
    constructor(nome:string, idade:number, altura:number){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    
    }
    
}

const usuario = new Usuario("Vinicius", 25, 1.55);

console.log(usuario);