"use strict";
// 1 - Generics 
function showData(arg) {
    return `O dados é: ${arg}`;
}
console.log(showData(5));
// 2 - constraint em gereric
function showProductName(obj) {
    return `O nome do produto é :${obj.name}`;
}
const myOj = { name: 'Porta', cor: 'Branca' };
const otherProduct = { name: 'Carro', wheels: 4, engine: 1.0 };
console.log(showProductName(otherProduct));
console.log(showProductName(myOj));
// 4 - type parameters
function getSomaKey(obj, key) {
    return `Achave está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: '2TB',
    ram: '32GB'
};
console.log(getSomaKey(server, 'ram'));
