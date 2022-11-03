// 1 - Arrays
//Se for um array de numeros, obrigatóriamente, preciso setar uma tipagem dizendo o tipo do dado, acompanhado dos caracteres []
let numbers:number[] = [1, 2, 3, 5];

numbers.push(6)//Obviamente, só poderemos adicionar numeros ao array, mas observe que a variavel representa um array apenas pelo fato de a termos tipado;
console.log(numbers[1]);


const names:string[] = ['Typescript', 'Nodejs'];
names.push('React.js');
console.log(names[0]);

// 2 - Outra sintaze dos arrays

const nums:Array<number> = [100, 200, 400];
const lyrics:Array<string> = ['John Doe', 'Steve Moss'];


// 3 - O tipo Any

const anyName:any = ['vinicius', 1, 2, 3, {name:'John Doe'}, ['typescript', 'react']];


// 4 - Tipagem nos parametros de função, usando uma função anonima com retorno tipado

const funcWithParameters = (name:string, age:number):string => `Meu nome é ${name}, tenho ${age} anos`;

console.log(funcWithParameters('Vinicius P', 26));

//5 - tipos de objetos
function passCoordinates(coord:{x:number, y:number}):void{
    console.log('x coordinates' +coord.x);
    console.log('y coordinates ' + coord.y);
}

const objCoord = {x:329, y:72.1};
passCoordinates(objCoord);
passCoordinates({x:82.15, y:12.6});


// 6 - props opcionais - Ao adicionar o caractere ? ao, setamos a variavel como opcional

const showNumbers = (a:number, b:number, c?:number):void => console.log([a, b, c]);
console.log(showNumbers(1, 2));


// 7 - Validando argumento opcional

const advancedGreeting = (
    firstName:string,
    lastName?:string
) : string => {
    if(lastName !== undefined){
        return `Olá, ${firstName} ${lastName}, tudo bem ?`
    }

    return `Olá, ${firstName}, tudo bem ?`
} 

console.log(advancedGreeting('Vinicius', 'P'));

console.log(advancedGreeting('Stefano..'));

// 8 - Union Types
const showBalance = (
    balace:string | number
): string  =>{
    return `O saldo da sua conta é R$${balace}.00,00`;
}

console.log(showBalance(250));

const arr2:Array<number | string | boolean> = [true, 'verdade', 1];


// 9 - Avançando no Union types

interface IUserRoles{
    role: 'admin' |'user'|'support';
}
interface IUserStatus extends IUserRoles{
    status:'enable' | 'disable'
}

interface IUser extends IUserStatus {
    name:string;
    email:string;
}

const configUser = ({
         name, 
         email, 
         role, 
         status
    }:IUser) => {
    return {
        name,
        email, 
        role,
        status
    }
};
console.log(configUser({ name:'vinicius', email:'contato@gmail.com', role:'admin', status:'enable'}))


// 10 - Type alias
type ID = string | number; 
function showId(id:ID):string{
   return `O ID é ${id}` 
}
console.log(showId(1));


// 11 - Interfaces
interface Point {
    x:number;
    y:number;
    z:number;
}

function showCoords(obj:Point):string{
    return `X:${obj.x}, Y:${obj.y}, Z:${obj.z}`;
}

// 12 - Interface x alias type

interface Person {
    name:string;
}

/* Note que, é possivel repetir o nome da interface, e automaticamente é extendida */
interface Person {
    age:number;
}

type personType = {
    name:string;
}

// type personType = {} , note que o tipo não pode ser repedido pois ele não se extende


// 13 - Literal types

let test:string = "testando";
console.log(test);

function showDirection(direcion:"left" | "rigth" | "center"){
    return ` A direção é:${direcion}`;
}
console.log(showDirection("center"));


// 14 Non-null Assertion Operator, este operador retorna um erro, assim que ele valida que, uma proriedade onde ele foi referenciado(a) não existe, diferente do ? que apenas atribui a propriedade como opcional
const p = document.getElementById('some-p');
console.log(p!.innerText);


// 15 -  Bigint - Este tipo, permite setarmos variaveis com numeros altos
let n:bigint;
n = 1000n;

// 16 - Symbol - Cria uma referencia unica para um valor
const myName:string = 'vinicius'
const nameFirstSymbol = Symbol(myName);//Inferencia
const nameLastSymbol:symbol = Symbol(myName);//Nottacion