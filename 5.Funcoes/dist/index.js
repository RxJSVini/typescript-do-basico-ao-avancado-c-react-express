"use strict";
// 1 - void
function withOutReturn() {
    //Funções que não retornanm nada, devem ser tipadas como void;
    console.log('Essa função não retorna nada.');
}
withOutReturn();
// 2 - Callback como 
function greeting(name) {
    return `Olá, ${name}`;
}
function preGreeting(f, userName) {
    console.log("Preparando a função!");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Vinicius");
// 3 - Generic functions
function firstElement(arr) {
    return [0];
}
firstElement([1, 2, 3]);
function newObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const newObject = newObjects({ name: "Vinicius" }, { age: 30 });
function factoryFunc(index) {
    return [index[0], index.length - 1];
}
factoryFunc(["vinicius", "luana", "abilene"]);
function newGeneric(arr) {
    return arr[0];
}
// 4 - Constraints
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
// 5 - especificar tipo de argumento
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
//6 - parametros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem ?`;
    }
    return `Olá, ${name}, tudo bem ?`;
}
// 7 - parametros default
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(10));
// 8 - unknow
function doSomething(x) {
    if (Array.isArray(x)) {
        return x[0];
    }
    else if (typeof x === "number") {
        return `x é um número`;
    }
}
doSomething(88);
// 9 - never 
function showErrorMessage(msg) {
    throw new Error(msg);
}
console.log(showErrorMessage('Erro 500!'));
//10 - Rest Operator
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
// 11 - Destruturing como parametro
function showProductDetails({ name, price }) {
    return `O nome do produto é ${name} e ele custa R$${price}`;
}
showProductDetails({ name: "Shoes Nike", price: 199.90 });
