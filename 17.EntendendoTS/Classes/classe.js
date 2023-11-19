"use strict";
// Lembrando que uma classe é formada de métodos e atributos
/**
 *   Herança em TypeScript:
 *   A herança é um mecanismo em que uma classe (chamada classe filha ou subclasse) herda propriedades e métodos de outra classe (chamada classe pai ou superclasse). Em TypeScript, você pode usar a palavra-chave extends para estabelecer uma relação de herança entre classes. No entanto, é importante ter cuidado com a hierarquia de herança profunda, pois isso pode levar a um acoplamento excessivo e dificultar a manutenção do código.

    Um problema comum é a criação de uma hierarquia de herança muito complexa, o que torna o código difícil de entender e manter. Além disso, o uso excessivo de herança pode levar a problemas de substituição de métodos e comportamentos inesperados.

    Composição em TypeScript:
    A composição é uma alternativa à herança, na qual as classes são construídas com base em objetos de outras classes em vez de herdar suas propriedades e métodos. Em TypeScript, você pode criar objetos de outras classes e usá-los como componentes em uma classe maior. Isso ajuda a reduzir o acoplamento e torna o código mais flexível e fácil de modificar.

    No entanto, é importante tomar cuidado para não criar uma complexa rede de dependências entre objetos. O uso excessivo de composição também pode levar a um código difícil de rastrear e entender.

    Polimorfismo em TypeScript:
    O polimorfismo permite que objetos de diferentes classes sejam tratados de maneira uniforme, desde que compartilhem uma interface comum ou um conjunto de métodos. Em TypeScript, você pode usar interfaces e classes abstratas para criar polimorfismo. Isso é útil para escrever código genérico e reutilizável.

    Um ponto crítico a ser observado é a necessidade de definir interfaces de forma clara e garantir que todas as classes que implementam essas interfaces cumpram os contratos estabelecidos. Caso contrário, podem ocorrer erros em tempo de execução.

    Em resumo, herança, composição e polimorfismo são ferramentas poderosas na programação orientada a objetos em TypeScript. No entanto, é importante usá-las com moderação e entender os potenciais problemas que podem surgir, como hierarquias de herança complexas, dependências excessivas na composição e falta de conformidade com interfaces no polimorfismo. Sempre busque manter seu código claro, conciso e fácil de manter.
 *
 *
 */
const inputEmail = document.getElementById('inputMail');
inputEmail.addEventListener('keypress', () => {
    console.log(inputEmail.value);
});
class Data {
    constructor(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
;
class DataEsperta {
    constructor(dia, mes, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
        this.ano = ano;
    }
}
;
const aniversario = new Data(2, 12, 1995);
console.log(aniversario);
// Produto - Desafio
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    validaDesconto(preco, desconto) {
        if (desconto) {
            return `${preco - desconto}`;
        }
        return preco;
    }
    resumo() {
        return `Produto: ${this.nome}, no valor de R$:${this.validaDesconto(this.preco, this.desconto)}`;
    }
}
//Primeiro produto
const produto1 = new Produto('Maça', 5.5, 0.90);
console.log({ produto: produto1, descontos: produto1.resumo() });
//Segundo produto
const produto2 = new Produto('Uvas', 8.90);
console.log({ produto: produto2, descontos: produto2.resumo() });
//Métodos em classes
class Pessoa {
    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.nome;
        this.idade;
        this.altura = altura;
    }
    apresentacao() {
        return `Olá, meu nome é ${this.nome}. Tenho ${this.idade} anos, e minha altura é de ${this.altura}`;
    }
}
const pessoa = new Pessoa('vinicius', 25, 1.55);
pessoa.idade = 25 * 2;
console.log(pessoa.apresentacao());
class PessoaFuncionario extends Pessoa {
    constructor(nome, idade, altura, genero) {
        super(nome, idade, altura);
    }
}
const pessoaFuncionario = new PessoaFuncionario('vinicius', 22, 1.55, "m");
console.info(pessoaFuncionario);
//Getters e Setters
class Proprietario {
    constructor() {
        this._propriedades = [];
    }
    get() {
        return this._propriedades;
    }
    set(propriedade) {
        if (Array.isArray(propriedade)) {
            for (let prop of propriedade) {
                this._propriedades.push(prop);
            }
        }
        this._propriedades.push(String(propriedade));
    }
}
const proprietario = new Proprietario();
proprietario.set('Casa Maria');
console.log(proprietario.get());
proprietario.set('Shopping Canoas');
console.log(proprietario.get());
proprietario.set(['Parking Shopping', 'Churrascaria Boi Brasil']);
console.log(proprietario.get());
// Atributos e Métodos estáticos - Uma vez que tenha membros estáticos em uma classe, não precisamos mais estancia-la. ou melhor, não é necessário usar o new nomeClasse. Assim podendo chamar a classe e o método, conforme mostrado abaixo.
// No geral, o uso de atributos e métodos estáticos é uma técnica útil em programação orientada a objetos para criar funcionalidades que não dependem do estado de objetos individuais. Isso pode tornar o código mais eficiente e mais fácil de usar em certos casos.
class Matematica {
    static areaCirc(raio) {
        return this.PI * raio * raio;
    }
}
Matematica.PI = 3.1416;
;
console.log(Matematica.areaCirc(5));
// Classe abstrata, um método não concreto.
class CalculoAbstrato {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
;
class Soma extends CalculoAbstrato {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t + a);
    }
}
// Singleton
// Esse padrao pode é deve ser usado, no caso de querer uma unica instancia... tipo, se estou usando algo como servicebus ou azure ad que são libs bem complexas, posso criar uma classe unica que conecta a esses serviços, e exporta-la.
class Unico {
    constructor() { }
    ;
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        const response = new Date();
        return response.toLocaleTimeString('pt-Br', { hour: '2-digit', minute: '2-digit' });
    }
}
Unico.instance = new Unico;
const unico = Unico.getInstance();
unico.agora();
