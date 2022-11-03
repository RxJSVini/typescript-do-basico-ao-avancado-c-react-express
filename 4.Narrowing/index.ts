//Narrowing é um recurso do ts que permite indentificar os tipos de dados, dando assim, uma direção diferente a execução do programa, baseado no tipo que foi identificado.

// 1 - type guard
const sum = (a:number | string, b:number | string) =>{
    if(typeof a == "string" && typeof b == "string"){
        return `${parseFloat(a)} + ${parseFloat(b)}`;
    } else if(typeof a == "number" && typeof b == "number"){
        return  a + b;
    }
}

// 2 - checando se o valor existe

function operations(arr:number[], operation?:string | undefined): string | any {
    if(operation == "sum"){
        return arr.reduce((i, total) => i + total);
    } else if (operation == "multiplay"){
        arr.reduce((i, total) => i * total);
    } else {
        return `Por favor, defina uma operação`;
    }
}

console.log(operations([1, 2, 55]));
console.log(operations([1, 2, 55], "sum"));
console.log(operations([2, 4, 5], "multiplay"));


// 3 - Operador istanceof

class User{
    name
    constructor(name:string){
        this.name = name;
    }
}

class SuperUser extends User {
    constructor(name:string){
        super(name)
    }
}

const john = new User('John');
const paul = new SuperUser('Paul');
console.log(john);
console.log(paul);

const userGreeting = (user:object) : string  =>{
    if( user instanceof SuperUser){
        return `Olá ${user.name}, seja muito bem vindo!`;
    } else if (user instanceof User){
        return `Permissões insuficientes para acessar este recurso. Contate o Administrador`;
    } else {
        return `Usuário inválido`;
    }
}

console.log(userGreeting(john));
console.log(userGreeting(paul));



// 4 - Operador in 

class Dog {
    name
    breed
    constructor(name:string, breed?:string){
        this.name = name;
        if(breed){
            this.breed = breed;
        }

    }
}

const tobby = new Dog("Toby");
const scobby = new Dog("scooby", "Pastor Alemão");

function showDogDetails(dog:Dog): string {
    if ('breed' in dog) {
        return `O cachorro ${dog.name} é da raça ${dog.breed}`;
    }
    return `O cachorro ${dog.name} é um dog SRD`;
}


console.log(showDogDetails(tobby));
console.log(showDogDetails(scobby));