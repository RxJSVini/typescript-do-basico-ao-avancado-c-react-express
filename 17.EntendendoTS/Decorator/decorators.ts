class EletroDomestico {
    constructor(){
        console.log('Tudo novo')
    }
};

function logarClasse(constructor: Function){
    console.log(constructor)
};

function decoratorVazio(_:Function){};


function logarClasseSe(valor: boolean){
    return valor ? logarClasse : decoratorVazio
}

function decorator(obj: {a: string, b?: string}){
    return function(_: Function): void {
        console.log(obj.a + ' ' + obj.b)
    }

}

type Construtor = {
    new(...args: any[]): {}
};

// function logarObjeto(constructor: Function){
//     return class extends constructor {
//         constructor(...args: any[]){
//             console.log('Antes ...')
//             super(...args);
//             console.log('Depois ...')
//         }
//     }
// }


@imprimivel
class Eletrodomesticos {
    constructor(public marca: string, public preco: number){
        console.log('novo de novo...')
    }
}


function imprimivel(constructor: Function){
    constructor.prototype.imprimir = function(){
        console.log(this)
    }
}

// Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: false
}
 

@perfilAdmin
class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!')
    }
}
 
new MudancaAdministrativa().critico()

function perfilAdmin<T extends Construtor>(construtor: T){
    return class extends construtor {
        constructor(...args: any[]){
            super(...args);
            if(!usuarioLogado || usuarioLogado.admin){
                throw new Error('Sem permissão!')
            }
        }
    }
}


//Esse decorator irá empedir que o valor do método de saque e de leitura do saldo permitão a edição do valor de saldo.
function congelar(alvo: any, nomeMetodo: string, descriptor: PropertyDescriptor){
    descriptor.writable = false;
}

class ContaCorrente {
    @naoNegativo
    private saldo: number;

    constructor(saldo: number = 0){
        this.saldo = saldo;
    }

    public depositar(valor: number): number {
       return  this.saldo += valor;
    }
    public sacar(@paramInfo valor: number): boolean {
        if(this.saldo >= valor){
            this.saldo = this.saldo - valor;
            return true;
        } else {
            console.log(`O valor disponivel para saque é de R$${this.saldo},00.\n\n Sendo assim não será possivel efetuar o saque pois excede o saldo da sua conta`)
            return false;
        }
    }
    @congelar
    public getSaldo(): number {
        return this.saldo;
    }
}

const contaCorrente = new ContaCorrente(200);    
contaCorrente.depositar(100);
contaCorrente.depositar(2005);
console.log(contaCorrente.sacar(850));

console.log(contaCorrente.getSaldo());




function naoNegativo(alvo: any, nomePropriedade: string){
    delete alvo[nomePropriedade];

    Object.defineProperty(alvo, nomePropriedade, {
        get: ():any => {
            return alvo["_" + nomePropriedade]
        },
        set: (valor: any):void => {
            if(valor < 0){
                throw new Error("Valor negativo não permitido");
            } else {
                alvo["-" + nomePropriedade] = valor;
            }
        }
    });
}



function paramInfo(alvo: any, nomeMetodo: string, indiceParam: number){
    console.log('Alvo:', alvo);
    console.log('Nome do metodo:', nomeMetodo);
    console.log('IndiceParam', indiceParam);
}