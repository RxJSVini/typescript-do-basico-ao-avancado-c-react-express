"use strict";
// 1 - Campos em classes
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nova = void 0;
class User {
}
const vinicius = new User();
vinicius.name = "vinicius p";
vinicius.age = 25;
// 2 - Construtor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const vinicius2 = new NewUser("João", 20);
console.log(vinicius2);
// 3 - Campo Readonly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const fusca = new Car("Fusca");
console.log(fusca.wheels);
// 4 - Herança e Super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine("Trator");
class KillMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillMachine("Destroyer", 4);
// 5 - Métodos
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        return `Hey Stranger!`;
    }
}
const jimmiy = new Dwarf("Jimmiy");
console.log(jimmiy.name);
console.log(jimmiy.greeting());
// 6 - This em classes
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    getTruckDetails() {
        return `O caminhão modelo: ${this.model}, tem ${this.hp} cavalos de potência!`;
    }
}
// 7 - Getters
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return this.name + " " + this.surname;
    }
}
const pessoa = new Person("Vinicius", "Pereira");
console.log(pessoa.fullName);
// 8 - setters
class Coords {
    set fillX(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log("X inserido com sucesso!");
    }
    set fillY(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log("Y inserido com sucesso!");
    }
}
const myCoords = new Coords();
myCoords.fillX = 15;
myCoords.fillY = 0;
console.log(myCoords);
class BlogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `Titulo do Post é ${this.title}`;
    }
}
const myPost = new BlogPost("Olá, mundo!");
console.log(myPost.itemTitle());
class TesteInterface {
    constructor() { }
    itemTitle(text) {
        return `${text}`;
    }
}
const testeInterface = new TesteInterface();
console.log(testeInterface.itemTitle("Meus, Typescripzera"));
// 10 - override de métodos
class Base {
    someMethod() {
        console.log("alguma coisa");
    }
}
class Nova extends Base {
    someMethod() {
        console.log("testando outra coisa");
    }
}
exports.Nova = Nova;
const MyObject = new Nova();
console.log(MyObject.someMethod());
// 11 - public
class C {
    constructor() {
        this.x = 10;
    }
}
class D extends C {
}
const cInstance = new C();
const dInstace = new D();
console.log(dInstace.x);
// 12 - protected
class E {
    constructor() {
        this.x = 10;
    }
    protectedMethod() {
        return `Esse método é protegido`;
    }
}
class F extends E {
    show() {
        return this.x;
    }
    showProtectedMethod() {
        return this.protectedMethod();
    }
}
const fInstance = new F();
console.log(`X:${fInstance.show()}`);
console.log(fInstance.showProtectedMethod());
// 13 - private
class PrivateClass {
    constructor() {
        this.name = "private";
    }
    showName() {
        return this.name;
    }
    privateMethod() {
        return `Método Privado`;
    }
}
const pObj = new PrivateClass();
pObj.showName(); //Diferente do protected, tudo oque for private não poderá ser acessado por classes secundárias, apenas pela classe onde o método, ou atributo privado foi criado.
//14 - static members
class StaticMembers {
    static staticMethod() {
        return `Este é um método estático`;
    }
}
StaticMembers.prop = "TESTE estático";
console.log(StaticMembers.staticMethod());
// 15 - generic class
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `O first é: ${this.first}`;
    }
}
const newItem = new Item("caixa", "surpresa");
console.log(newItem);
// 16 - parameter properties
class ParameterProperties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return `Qtd total:${this.qty}`;
    }
    get showPrice() {
        return `Qtd total: ${this.price}`;
    }
}
const params = new ParameterProperties("camiseta", 1, 19.90);
console.log(params.showPrice);
// 17  - Class expressions
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const myPerson = new myClass("John Doe");
console.log(myPerson.name);
