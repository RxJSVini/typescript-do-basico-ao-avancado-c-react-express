// 1 - numbers - Este tipo, apenas retorna numeros

let x:number = 10;
console.log( typeof x);

console.log(x.toPrecision(3));


// 2 - string - Este tipo, apenas retorna textos
const firstName:string = 'vinicius';
console.log(typeof firstName);

// 3 - boolean

const verdade:boolean = true;
const mentira:false = false;
// 4 - Type annotation e Type inference

/**
 *  Annotation -> Quando setamos a tipagem manualmente.
 * Inference -> Quando o proprio typescript cria a tupagem para nós.
 * 
 */

const ann:string = 'Teste';
console.log(typeof ann);
const inf = "teste";
console.log(typeof inf);

