"use strict";
class Cliente {
    constructor(conta) {
        this.saldo = 0;
        this.conta = conta;
    }
}
class ContaSalario extends Cliente {
    depositar(valor) {
        this.saldo += valor;
    }
}
// Maneira errada de realizar a função
//    tranferencia(valor, destinatario) {
//        destinatario.saldo += valor
//Implementação da Interface
class ContaCorrente extends Cliente {
    constructor() {
        super(...arguments);
        this.taxa = 0;
    }
    trasferencia(valor, destinatario) {
        destinatario.saldo += (valor - this.taxa);
        return true;
    }
    ;
}
