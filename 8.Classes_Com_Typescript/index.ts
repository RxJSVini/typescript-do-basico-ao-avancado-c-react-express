// 1 - Campos em classes

class User {
  name!: string; //Lembre-se que, sempre que tivermos o caractere !, isso indica que obrigatóriamente, deve conter alguma informação, diferente do ?, que torna o campo opcional.
  age!: number;
}

const vinicius = new User();

vinicius.name = "vinicius p";
vinicius.age = 25;

// 2 - Construtor

class NewUser {
  name;
  age;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const vinicius2 = new NewUser("João", 20);

console.log(vinicius2);

// 3 - Campo Readonly
class Car {
  name;
  readonly wheels = 4;

  constructor(name: string) {
    this.name = name;
  }
}

const fusca = new Car("Fusca");

console.log(fusca.wheels);

// 4 - Herança e Super

class Machine {
  name;
  constructor(name: string) {
    this.name = name;
  }
}

const trator = new Machine("Trator");

class KillMachine extends Machine {
  guns;

  constructor(name: string, guns: number) {
    super(name);
    this.guns = guns;
  }
}

const destroyer = new KillMachine("Destroyer", 4);

// 5 - Métodos

class Dwarf {
  name;
  constructor(name: string) {
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
  model;
  hp;

  constructor(model: string, hp: number) {
    this.model = model;
    this.hp = hp;
  }

  getTruckDetails() {
    return `O caminhão modelo: ${this.model}, tem ${this.hp} cavalos de potência!`;
  }
}

// 7 - Getters

class Person {
  name;
  surname;
  constructor(name: string, surname: string) {
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
  x!: number;
  y!: number;

  set fillX(x: number) {
    if (x === 0) {
      return;
    }

    this.x = x;

    console.log("X inserido com sucesso!");
  }

  set fillY(y: number) {
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



// 9 - Implements
/**
 * Uma classe pode herdar uma interface por meio do método implements.
 */

interface showTitle {
    itemTitle(text?:string):string;
}


class BlogPost implements  showTitle {
    title
    constructor(title:string){
        this.title = title;
    }

    itemTitle(){
        return `Titulo do Post é ${this.title}`;
    }
}

const myPost = new BlogPost("Olá, mundo!");

console.log(myPost.itemTitle());


class TesteInterface implements showTitle{

    constructor(){}

    itemTitle(text:string): string {
        return `${text}`;
    }
}


const testeInterface = new TesteInterface()
console.log(testeInterface.itemTitle("Meus, Typescripzera"));

// 10 - override de métodos

class Base {
    someMethod(){
        console.log("alguma coisa");
    }
}

export class Nova extends Base {
    someMethod(): void {
        console.log("testando outra coisa");
    }
}

const MyObject = new Nova();

console.log(MyObject.someMethod());

// 11 - public

class C {
   public x = 10

}

class D extends C {

}

const cInstance = new C();

const dInstace = new D();
console.log(dInstace.x);


// 12 - protected
class E {
  protected x = 10;
  protected protectedMethod(){
    return `Esse método é protegido`;
  }

}

class F extends E {
    show(){
      return this.x
    }

    showProtectedMethod(){
      return this.protectedMethod()
    }
}



const fInstance = new F();


console.log(`X:${fInstance.show()}`)

console.log(fInstance.showProtectedMethod())


// 13 - private

class PrivateClass {
  private name = "private"

  showName(){
    return this.name;
  }

  private privateMethod(){
    return `Método Privado`;
  }

}

const pObj = new PrivateClass();

pObj.showName();//Diferente do protected, tudo oque for private não poderá ser acessado por classes secundárias, apenas pela classe onde o método, ou atributo privado foi criado.


//14 - static members


class StaticMembers {
  static prop = "TESTE estático"

  static staticMethod(){
    return `Este é um método estático`;
  }
}

console.log(StaticMembers.staticMethod());

// 15 - generic class

class Item<T, U>{
  first 
  second
  constructor(first:T, second:U){
    this.first = first;
    this.second = second;
  }

  get showFirst(){
    return `O first é: ${this.first}`;
  }
}

const newItem = new Item("caixa", "surpresa");

console.log(newItem);

// 16 - parameter properties

class ParameterProperties{
   constructor(public name:string, private qty:number, private price:number){
    this.name = name;
    this.qty = qty;
    this.price = price;
   }

   get showQty(){
      return `Qtd total:${this.qty}`;
   }

   get showPrice(){
    return `Qtd total: ${this.price}`;
   }

}
const params = new ParameterProperties("camiseta", 1, 19.90);

console.log(params.showPrice);


// 17  - Class expressions - Podemos atribuir uma classe a uma variavel, conforme o exemplo abaixo.
const myClass = class<T>{
  name

  constructor(name:T){
    this.name = name;
  }
}

const myPerson = new myClass("John Doe");

console.log(myPerson.name)

// 18 - abastract class

abstract class AbstractClass {
  abstract showName():string;
}

// const newObj = new AbstractClass(); Sim, teremos erros aqui, porque não é possível criar estancia de uma classe abstrata
class AbstractExample extends AbstractClass{
   name:String;

  
   constructor(name:string){
    super();
    this.name = name;
   }

   showName(): string {
       return `O nome é ${this.name}`;
   }
}


const newAbstractObkect = new AbstractExample("Vinicius");
console.log(newAbstractObkect.showName());


// 19 - Relação entre Classes

class Dog {
  name!:string;
}

class Cat {
  name!:string;
}

const doguinho:Dog = new Cat()

console.log(doguinho.name);