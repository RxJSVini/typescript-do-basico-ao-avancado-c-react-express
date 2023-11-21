"use strict";
;
var RecursosHumanos;
(function (RecursosHumanos) {
    class Functionario {
        constructor(_name, _cpf, _email, _matricula, _dataadmissao) {
            this._name = _name;
            this._cpf = _cpf;
            this._email = _email;
            this._matricula = _matricula;
            this._dataadmissao = _dataadmissao;
            this._name = _name;
            this._cpf = _cpf;
            this._email = _email;
            this._matricula = _matricula;
            this._dataadmissao = _dataadmissao;
        }
        ;
        gerarMatricula() {
            return this._matricula = Math.random() * 100 / 2;
        }
        ;
        admissao(new_funcionario) {
            return this._dataadmissao;
        }
        ;
    }
    RecursosHumanos.Functionario = Functionario;
    ;
})(RecursosHumanos || (RecursosHumanos = {}));
;
