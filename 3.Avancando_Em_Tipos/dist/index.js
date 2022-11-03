// 1 - Arrays
//Se for um array de numeros, obrigatóriamente, preciso setar uma tipagem dizendo o tipo do dado, acompanhado dos caracteres []
var numbers = [1, 2, 3, 5];
numbers.push(6); //Obviamente, só poderemos adicionar numeros ao array, mas observe que a variavel representa um array apenas pelo fato de a termos tipado;
console.log(numbers[1]);
var names = ['Typescript', 'Nodejs'];
names.push('React.js');
console.log(names[0]);
// 2 - Outra sintaze dos arrays
var nums = [100, 200, 400];
var lyrics = ['John Doe', 'Steve Moss'];
// 3 - O tipo Any
var anyName = ['vinicius', 1, 2, 3, { name: 'John Doe' }, ['typescript', 'react']];
// 4 - Tipagem nos parametros de função, usando uma função anonima com retorno tipado
var funcWithParameters = function (name, age) { return "Meu nome \u00E9 ".concat(name, ", tenho ").concat(age, " anos"); };
console.log(funcWithParameters('Vinicius P', 26));
//5 - tipos de objetos
function passCoordinates(coord) {
    console.log('x coordinates' + coord.x);
    console.log('y coordinates ' + coord.y);
}
var objCoord = { x: 329, y: 72.1 };
passCoordinates(objCoord);
passCoordinates({ x: 82.15, y: 12.6 });
// 6 - props opcionais - Ao adicionar o caractere ? ao, setamos a variavel como opcional
var showNumbers = function (a, b, c) { return console.log([a, b, c]); };
console.log(showNumbers(1, 2));
// 7 - Validando argumento opcional
var advancedGreeting = function (firstName, lastName) {
    if (lastName !== undefined) {
        return "Ol\u00E1, ".concat(firstName, " ").concat(lastName, ", tudo bem ?");
    }
    return "Ol\u00E1, ".concat(firstName, ", tudo bem ?");
};
console.log(advancedGreeting('Vinicius', 'P'));
console.log(advancedGreeting('Stefano..'));
// 8 - Union Types
var showBalance = function (balace) {
    return "O saldo da sua conta \u00E9 R$".concat(balace, ".00,00");
};
console.log(showBalance(250));
var arr2 = [true, 'verdade', 1];
var configUser = function (_a) {
    var name = _a.name, email = _a.email, role = _a.role, status = _a.status;
    return {
        name: name,
        email: email,
        role: role,
        status: status
    };
};
console.log(configUser({ name: 'vinicius', email: 'contato@gmail.com', role: 'admin', status: 'enable' }));
function showId(id) {
    return "O ID \u00E9 ".concat(id);
}
console.log(showId(1));
function showCoords(obj) {
    return "X:".concat(obj.x, ", Y:").concat(obj.y, ", Z:").concat(obj.z);
}
// type personType = {} , note que o tipo não pode ser repedido pois ele não se extende
// 13 - Literal types
var test = "testando";
console.log(test);
function showDirection(direcion) {
    return " A dire\u00E7\u00E3o \u00E9:".concat(direcion);
}
console.log(showDirection("center"));
// 14 Non-null Assertion Operator, este operador retorna um erro, assim que ele valida que, uma proriedade onde ele foi referenciado(a) não existe, diferente do ? que apenas atribui a propriedade como opcional
var p = document.getElementById('some-p');
console.log(p.innerText);
// 15 -  Bigint - Este tipo, permite setarmos variaveis com numeros altos
var n;
n = 1000n;
// 16 - Symbol - Cria uma referencia unica para um valor
var myName = 'vinicius';
var nameFirstSymbol = Symbol(myName); //Inferencia
var nameLastSymbol = Symbol(myName); //Nottacion
