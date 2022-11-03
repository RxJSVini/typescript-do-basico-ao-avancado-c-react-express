"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 1 - exemplo decorator
function myDecorator() {
    console.log("Iniciando o decorator!");
    return function (target, propertyKey, descriptor) {
        console.log("myDecorator(): executado");
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}
class MyClass {
    testing() {
        console.log("Terminando execução do método");
    }
}
__decorate([
    myDecorator()
], MyClass.prototype, "testing", null);
const myObj = new MyClass();
myObj.testing();
// 2 - Multiplos decorators
function a() {
    return function (target, propertyKey, descriptor) {
        console.log('Executou a');
    };
}
function b() {
    return function (target, propertyKey, descriptor) {
        console.log('Executou b');
    };
}
function c() {
    return function (target, propertyKey, descriptor) {
        console.log('Executou c');
    };
}
class MultipleDecorators {
    testing() {
        console.log("Terminando ....");
    }
}
__decorate([
    a(),
    b(),
    c()
], MultipleDecorators.prototype, "testing", null);
// 3 - Class Decorator
function classDec(constructor) {
    console.log(constructor.name);
    if (constructor.name === "User") {
        console.log('Usuário criado');
    }
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDec
], User);
const user = new User('Vinicius');
// 4 - Method decorator
function enumerable(value) {
    return function (target, propertKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showMachineName() {
        return `O nome dessa máquina é ${this.name}`;
    }
}
__decorate([
    enumerable(false)
], Machine.prototype, "showMachineName", null);
const maquina = new Machine('Elliot-Robot');
console.log(maquina.showMachineName());
// 5 -  acesssor decorator
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `Nome do monstro ${this.name}`;
    }
    get showAge() {
        return `Idade do monstro ${this.age}`;
    }
}
__decorate([
    enumerable(true)
], Monster.prototype, "showName", null);
__decorate([
    enumerable(false)
], Monster.prototype, "showAge", null);
const pokeMonster = new Monster('Pikachu', 1);
console.log(pokeMonster.showName);
// 6 - Property decorator
// 1 - 000001
function formatNumber() {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            value = newVal;
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        });
    };
}
class ID {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber()
], ID.prototype, "id", void 0);
const newItem = new ID('1');
console.log(newItem);
// 7 - Exemplo real com class decorator
function createdDate(created) {
    created.prototype.createdAt = new Date().toLocaleDateString();
}
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createdDate
], Book);
let Pen = class Pen {
    constructor(id) {
        this.id = id;
    }
};
Pen = __decorate([
    createdDate
], Pen);
const newBook = new Book(12);
console.log(newBook.id);
console.log(newBook.createdAt);
const newPen = new Pen(10);
console.log(newPen.id);
console.log(newBook.createdAt);
// 8 - exemplo real method decorator
function checkIfUserPosted() {
    return function (target, key, descriptor) {
        const childFunction = descriptor.value;
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log("Usuário já postou!");
                return null;
            }
            else {
                return childFunction.apply(this, args);
            }
        };
        return descriptor;
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`Post do usuário: ${content}`);
    }
}
__decorate([
    checkIfUserPosted()
], Post.prototype, "post", null);
const somePost = new Post();
somePost.post("Meu primeiro post!", somePost.alreadyPosted);
somePost.post("Meu segundo post!", somePost.alreadyPosted);
// 9 - exemplo real property decorator
function Max(limit) {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            if (newVal.length > limit) {
                console.log(`O valor deve ter no máximo ${limit} dígitos.`);
                return;
            }
            else {
                value = newVal;
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    };
}
class Admin {
    constructor(username) {
        this.username = username;
    }
}
__decorate([
    Max(10)
], Admin.prototype, "username", void 0);
let pedro = new Admin("pedroadmin123");
let lee = new Admin("lee");
