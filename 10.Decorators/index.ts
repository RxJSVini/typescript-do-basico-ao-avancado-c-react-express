// 1 - exemplo decorator
function myDecorator() {
    console.log("Iniciando o decorator!")
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log("myDecorator(): executado");
      console.log(target)
      console.log(propertyKey)
      console.log(descriptor)
    };
  }
  
  
  class MyClass {
  
    @myDecorator()
    testing() {
      console.log("Terminando execução do método")
    }
  }
  
  const myObj = new MyClass()
  
  myObj.testing()


  // 2 - Multiplos decorators

  function a(){
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
      console.log('Executou a');
    }
  }
  function b(){
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
      console.log('Executou b');
    }
  }

  function c(){
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
      console.log('Executou c');
    }
  }

class MultipleDecorators{
  @a()
  @b()
  @c()
  testing(){
    console.log("Terminando ....")
  }
}


// 3 - Class Decorator
function classDec(constructor:Function){
    console.log(constructor.name);
    if(constructor.name === "User"){
      console.log('Usuário criado');
    }  
}


@classDec
class User{
  name;
  constructor(name:string){
    this.name = name;
  }
}

const user = new User('Vinicius');


// 4 - Method decorator

function enumerable(value:boolean){
  return function(target:any, propertKey:string,descriptor:PropertyDescriptor){
    descriptor.enumerable = value;
  }

}

class Machine {
  name

  constructor(name:string){
    this.name = name;
  }


  @enumerable(false)
  showMachineName(){
    return `O nome dessa máquina é ${this.name}`;
  }

}

const maquina = new Machine('Elliot-Robot');

console.log(maquina.showMachineName());


// 5 -  acesssor decorator

class Monster {
  name?;
  age?;

  constructor(name:string, age:number){
    this.name = name
    this.age = age
  }

  @enumerable(true)
  get showName() : string {
    return `Nome do monstro ${this.name}`;
  }

  @enumerable(false)
  get showAge(){
    return `Idade do monstro ${this.age}`;
  }

}

const pokeMonster = new Monster('Pikachu', 1);

console.log(pokeMonster.showName);




// 6 - Property decorator

// 1 - 000001
function formatNumber() {
  return function(target: Object, propertyKey: string) { 
    let value : string;

    const getter = function() {
      return value;
    };
    const setter = function(newVal: string) {
      value = newVal;
    };

    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter
    }); 
  }
}

class ID {
  @formatNumber()
  id;
  constructor(id:string){
    this.id = id;
  }
}

const newItem = new ID('1');

console.log(newItem);

// 7 - Exemplo real com class decorator

function createdDate(created:Function){
  created.prototype.createdAt = new Date().toLocaleDateString();
}
@createdDate
class Book {
  id;
  createdAt?:Date;
  constructor(id:number){
    this.id = id;
  }
}

@createdDate
class Pen {
  id
  constructor(id:number){
    this.id = id;
  }
}

const newBook = new Book(12);
console.log(newBook.id)
console.log(newBook.createdAt)

const newPen = new Pen(10);
console.log(newPen.id)
console.log(newBook.createdAt)

// 8 - exemplo real method decorator
function checkIfUserPosted() {
  return function (
    target: Object,
    key: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const childFunction = descriptor.value;
    descriptor.value = function(...args: any[]) {
      if (args[1] === true) {
        console.log("Usuário já postou!")
        return null;
      } else {
        return childFunction.apply(this, args);
      }
    }
    return descriptor;
  };
}

class Post {
  alreadyPosted = false

  @checkIfUserPosted()
  post(content: string, alreadyPosted: boolean) {
    this.alreadyPosted = true
    console.log(`Post do usuário: ${content}`)
  }
}

const somePost = new Post()

somePost.post("Meu primeiro post!", somePost.alreadyPosted);

somePost.post("Meu segundo post!", somePost.alreadyPosted);



// 9 - exemplo real property decorator
function Max(limit: number) {
  return function(target: Object, propertyKey: string) { 
    let value : string;
    const getter = function() {
      return value;
    };
    const setter = function(newVal: string) {
      if(newVal.length > limit) {
        console.log(`O valor deve ter no máximo ${limit} dígitos.`)
        return
      }
      else {
        value = newVal;
      }      
    }; 
    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter
    }); 
  }
}

class Admin {
  @Max(10)
  username

  constructor(username: string) {
    this.username = username
  }
}

let pedro = new Admin("pedroadmin123")
let lee = new Admin("lee")