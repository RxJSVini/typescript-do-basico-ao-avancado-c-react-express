// 1 - Generics 
function showData<T>(arg:T): string{
    return `O dados é: ${arg}`;
}

console.log(showData(5));


// 2 - constraint em gereric

function showProductName<T extends { name:string }>(obj:T){
    return `O nome do produto é :${obj.name}`;
}

const myOj = {name:'Porta', cor:'Branca'};
const otherProduct = {name:'Carro', wheels:4, engine:1.0};
console.log(showProductName(otherProduct));
console.log(showProductName(myOj));


//3 - generics com interface

interface MyObject<T, U, Q>{
    name:string,
    wheels:T,
    engine:U,
    color:Q
}

type Car = MyObject<string, number, number>;
type Pen = MyObject<boolean, boolean, string>;


// 4 - type parameters

function getSomaKey<T, K extends keyof T>(obj:T, key:K){
    return `Achave está presente no objeto e tem o valor de ${obj[key]}`;
}

const server = {
    hd:'2TB',
    ram:'32GB'
}
console.log(getSomaKey(server, 'ram'));



// 5 - keyof type operator

type Character = {
    name:string;
    age:number;
    hasDriverLicense:boolean;
}


type C = keyof Character

function showCharName(obj:Character, name:C): string {
    return `${obj[name]}`;
};
const myChar:Character = {
    name:"Matheus",
    age:30,
    hasDriverLicense:true
}


console.log(showCharName(myChar, "name"));


// 6 - typeof type operator

const userName:string = "Vinicius";
const userNameTwo:string = "Pedreira";

const userNameTree:typeof userName="Santos";

type x = typeof userName;

const userName4:x = "Joaquim";


// 7 indexed access type

type Truck = {km:number, kg:number, description:string};

type Km = Truck["km"];
const newTruck: Truck = {
    km:1000, 
    kg:5000,
    description:"Caminhão para pouca carga"
}


function showTruckKm(km: Km) {
    console.log(`O caminhão já rodou ${km} kms`)
}
  
showTruckKm(newTruck.km)


// 8 - conditional types
interface A {}

interface B extends A {}

type myType = B extends A ? number : string

const someVar: myType = 1
// const someVar2: myType = 'asd'

// 9 - template literal types

type TestA = "text"

type CustomType = `some ${TestA}`

const testing: CustomType = "some text";


//  9 - Template literals type

type testeA = "text";

type CustomTypeTwo = `some ${testeA}`;

type a1 = "testando";
type a2 = "union";

type a3 = `${a1}` | `${a2}`;

