// 1 - void
function withOutReturn():void{
    //Funções que não retornanm nada, devem ser tipadas como void;
    console.log('Essa função não retorna nada.')
}

withOutReturn();


// 2 - Callback como 
function greeting(name:string):string{
    return `Olá, ${name}`
}

function preGreeting(f:(name:string) => string, userName:string){
    console.log("Preparando a função!");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Vinicius");


// 3 - Generic functions

function firstElement<T>(arr:T[]) {
    return [0];
}
firstElement([1, 2, 3]);

function newObjects<U, T>(obj1:U, obj2:T){
    return {
        ...obj1,
        ...obj2
    }
}

const newObject = newObjects({name:"Vinicius"}, {age:30});


function factoryFunc<T>(index:T[]){
    return [index[0], index.length -1]
}
factoryFunc(["vinicius", "luana", "abilene"]);


function newGeneric<T>(arr:T[]): T {
    return arr[0];
}

// 4 - Constraints

function biggestNumber<T extends number  | string>(a:T, b:T): T{
    let biggest:T;

    if(+a > +b){
        biggest = a;
    } else {
        biggest = b;
    }

    return biggest;
}

// 5 - especificar tipo de argumento

function mergeArrays<T>(
    arr1:T[], 
    arr2:T[]){
    return arr1.concat(arr2)
}



//6 - parametros opcionais
function modernGreeting(name:string, greet?:string):string{
    if(greet){
        return `Olá ${greet} ${name}, tudo bem ?`;
    }

    return `Olá, ${name}, tudo bem ?`;
}

// 7 - parametros default
function somaDefault(n:number, m = 10):number{
    return n + m;
}

console.log(somaDefault(10));

// 8 - unknow

function doSomething(x:unknown){
    if(Array.isArray(x)){
        return x[0];
    } else if(typeof x === "number"){
        return `x é um número`;
    }
}
doSomething(88);

// 9 - never 
function showErrorMessage(msg:string): never {
    throw new Error(msg);
}
console.log(showErrorMessage('Erro 500!'));

//10 - Rest Operator
function sumAll(...n:number[]){
    return n.reduce((number, sum) =>sum + number);
}

// 11 - Destruturing como parametro
function showProductDetails({name, price}:{name:string, price:number}):string{
    return `O nome do produto é ${name} e ele custa R$${price}`
}
showProductDetails({name:"Shoes Nike", price:199.90});