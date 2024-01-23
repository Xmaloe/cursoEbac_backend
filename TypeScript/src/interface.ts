class Cliente {
    conta: number;
    saldo: number = 0;

    constructor(conta: number) {
        this.conta = conta;
    }
}

class ContaSalario extends Cliente {
    depositar(valor: number) {
        this.saldo += valor;
    }
}

//Interface
interface ITransacional {
//Criar um arrow (método de function)
    trasferencia: (valor: number, destinatario: Cliente) => boolean; 
    taxa: number;
}
// Maneira errada de realizar a função
//    tranferencia(valor, destinatario) {
//        destinatario.saldo += valor

//Implementação da Interface
class ContaCorrente extends Cliente implements ITransacional {
    trasferencia (valor: number, destinatario: Cliente) {
        destinatario.saldo += (valor - this.taxa);
        return true;
    };
    taxa: number = 0;
}