"use strict";
/*
Em TypeScript, um namespace é um recurso que permite organizar logicamente o código, agrupando classes, interfaces, funções e outros elementos em um contêiner nomeado. Essa organização é valiosa, especialmente em projetos maiores, para evitar poluição no escopo global e facilitar a compreensão e manutenção do código.

Por exemplo, se você estiver construindo um aplicativo que lida com diferentes tipos de animais, pode usar namespaces para dividir esses animais em categorias como terrestres, aquáticos e aéreos, mantendo tudo organizado e sem confusão.

Namespaces Aninhados:
Agora, imagine que você quer ir além, criando uma hierarquia no seu reino de código. É aqui que os namespaces aninhados entram em cena. Eles são como divisões dentro de divisões, permitindo uma estrutura mais granular.


*/
var Animais;
(function (Animais) {
    let Aquaticos;
    (function (Aquaticos) {
        class MamiferoMarinho {
            nadar() {
                console.log("Mamífero marinho nadando.");
            }
        }
        Aquaticos.MamiferoMarinho = MamiferoMarinho;
        class Peixe {
            nadar() {
                console.log("Peixe nadando.");
            }
        }
        Aquaticos.Peixe = Peixe;
    })(Aquaticos = Animais.Aquaticos || (Animais.Aquaticos = {}));
})(Animais || (Animais = {}));
