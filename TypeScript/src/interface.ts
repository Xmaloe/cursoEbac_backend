// Definição da classe Cliente
class Cliente {
    conta: number; // Número da conta do cliente
    saldo: number = 0; // Saldo inicial da conta do cliente

    // Construtor da classe Cliente
    constructor(conta: number) {
        this.conta = conta;
    }
}

// Definição da classe ContaSalario que herda de Cliente
class ContaSalario extends Cliente {
    // Método para depositar um valor na conta salário
    depositar(valor: number) {
        this.saldo += valor; // Adiciona o valor ao saldo atual
    }
}

// Definição da interface ITransacional
interface ITransacional {
    // Método de transferência de dinheiro entre contas
    transferencia: (valor: number, destinatario: Cliente) => boolean;
    taxa: number; // Taxa aplicada nas transferências
}

// Tentativa errada de realizar a função de transferência 
//    transferencia(valor, destinatario) {
//        destinatario.saldo += valor

// Implementação da classe ContaCorrente que herda de Cliente e implementa a interface ITransacional
class ContaCorrente extends Cliente implements ITransacional {
    // Implementação do método de transferência definido na interface ITransacional
    transferencia(valor: number, destinatario: Cliente) {
        destinatario.saldo += (valor - this.taxa); // Aplica a taxa e transfere o valor para o destinatário
        return true; // Retorna true para indicar que a transferência foi bem-sucedida
    }

    // Taxa aplicada nas transferências
    taxa: number = 10;
}


//Anotação: Classes podem herdar\extends apenas 1 vez, Interface/implements pode ser usada diversa vezes
