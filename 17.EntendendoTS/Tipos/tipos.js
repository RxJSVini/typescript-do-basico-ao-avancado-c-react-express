"use strict";
// string
let nome = 'João';
//nome = 37 //Daria erro, porque a inferência do typescript entende que a variavel nome é um numero.
//number
let idade = 27.6;
console.log(idade);
//boolean
let possuiHobbies = false;
console.log(possuiHobbies);
//tipos explicitos
let minhaIdade; // Se criar a variavel dessa forma, sem passar o valor nem o tipo, o mesmo será to tipo any
minhaIdade = 18;
console.log(minhaIdade);
console.log(typeof minhaIdade);
//Array
const myHobbies = [];
myHobbies.push('Estudar');
console.log(myHobbies);
//tuplas
// Um array com tipos pré-definidos
let endereco = ["Av Principal", 27];
console.log(endereco);
//Enuns
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 101] = "Azul";
    Cor[Cor["Vermelho"] = 102] = "Vermelho";
    Cor[Cor["Amarelo"] = 100] = "Amarelo";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
// Any = Qualquer
let carro = 'BMW';
console.log(carro);
// let carro = { marca: 'BMW', cor:'Vermelho'};
// console.log(carro);
//Funções
function digaOi(nome = '') {
    return `Olá ${nome}`;
}
console.log(digaOi('Vinicius'));
// tipo função
let calculo;
calculo = digaOi;
console.log(calculo('Joao'));
// Tipos em objetos
const usuarios = {
    name: 'Vinicius',
    age: 22
};
console.log(usuarios);
let funcionario = {
    supervisores: ['Junior', 'Senior'],
    baterPonto(hora) {
        if (hora <= 8) {
            return `Horário normal`;
        }
        else {
            return `Fora do horário`;
        }
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(9));
console.log(funcionario.baterPonto(5));
// union types
const nota = 10;
console.log(nota);
// never
function falha(msg) {
    throw new Error(msg);
}
;
const produto = {
    nome: '',
    preco: 4,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisamos de um nome para seu produto');
        }
        if (this.preco < 0) {
            falha('Preço inválido');
        }
    }
};
produto.validarProduto();
