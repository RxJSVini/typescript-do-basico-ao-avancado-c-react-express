"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 1 - Importação de arquivos
const greet_1 = __importDefault(require("./greet"));
console.log((0, greet_1.default)("Vinicius"));
// 2 - Exportação de variaveis
const variables_1 = require("./variables");
console.log(variables_1.x);
// 3 - Multiplas importações
const multiple_1 = require("./multiple");
console.log(multiple_1.a);
console.log(multiple_1.b);
console.log((0, multiple_1.myFunction)());
// 4 - Alias
const alias_1 = require("./alias");
console.log(alias_1.myName);
// 5 - Importação de todos os itens como alias
const myNumbers = __importStar(require("./numbers"));
console.log(myNumbers.n1);
console.log(myNumbers.n2);
console.log(myNumbers.n3);
class Usuario {
    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
}
const usuario = new Usuario("Vinicius", 25, 1.55);
console.log(usuario);
