"use strict";
function getInputChange() {
    const email = document.querySelector('#email');
    console.log(email === null || email === void 0 ? void 0 : email.value);
}
document.addEventListener('keypress', getInputChange);
function showProductDetails(product) {
    if (product.isAvailable) {
        return `O produto está disponível`;
    }
}
console.log(showProductDetails({ name: 'Tenis', price: 199, isAvailable: true }));
function showUSerDetails(user) {
    if (user.role) {
        return `A função do usuário ${user.email} é ${user.role}`;
    }
}
console.log(showUSerDetails({ email: 'user@email.com' }));
console.log(showUSerDetails({ email: 'admin@email.com', role: 'admin' }));
const fusca2 = {
    brand: "WW",
    wheels: 4
};
console.log(fusca2);
const person = {
    name: "Vinicius"
};
console.log(person);
const goku = {
    name: "Vinicius",
    age: 25
};
console.log(goku);
;
const arnold = {
    name: "Arnold",
    type: "shotgun",
    caliber: 12
};
console.log(arnold);
//7 - ReadOnly array
let myArr = ['Maça', 'Laranja', 'Banana'];
console.log(myArr);
const myNumberTuple = [1, 2, 3, 4];
const anotherUser = ["Vinicius", 30];
//9 - Tuplas com readonlys
function showNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
