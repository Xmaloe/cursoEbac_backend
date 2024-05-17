// Definição da classe Pessoa
class Pessoa {
    // Propriedades da classe
    nome: string;
    renda?: number; // O '?' indica que a propriedade é opcional

    // Construtor da classe
    constructor(nome: string, renda?: number) {
        this.nome = nome;
        this.renda = renda;
    }

    // Método que retorna uma saudação
    dizOlá(): string {
        return `${this.nome} disse olá`;
    }
}

// Classe ContaBancaria para gerenciar contas bancárias
class ContaBancaria {
    // Propriedades da classe
    protected saldo: number = 0; // O saldo é protegido e acessível na classe e a classes filhas: as que herdam
    public conta: number; // Acessível em todos os níveis 

    // Construtor da classe
    constructor(conta: number) {
        this.conta = conta;
    }

    // Método estático para retornar o número da agência (compartilhado por todas as instâncias) pertence a classe 
    static agencia() {
        return 1633;
    }

    // Método privado para obter o saldo (não acessível fora da classe) 
    private getSaldo() {
        return this.saldo;
    }

    // Método para depositar dinheiro na conta
    depositar(valor: number) {
        this.saldo += valor;// += pode ser o saldo atual, mas também pode aumentar 
    }
}
// Classe PessoaFisica que herda de ContaBancaria
class PessoaFisica extends ContaBancaria {
    // Método para depositar dinheiro, sobrescrevendo o método da classe pai
    depositar(valor: number): void {
        this.saldo = valor * 2; // O saldo é multiplicado por 2, e pode ser acessado como herança, mas se estivesse private não poderia ter sido acessado 
    }
}
// Criando uma instância de PessoaFisica e acessando métodos/propriedades
const karen = new PessoaFisica(123456);
ContaBancaria.agencia(); // Chamando o método estático para obter o número da agência

// Imagine uma casa:

// public (Calçada): Aberto a todos, como a calçada. Em programação, public é acessível por qualquer classe.
// static (Ferramentas Comuns): Como ferramentas usadas por todos na casa. Em programação, static pertence à classe, não a instâncias.
// protected (Sala de Estar Familiar): Acesso para a família, como uma sala privada. Em programação, protected é aberto para a classe e subclasses.
// private (Quarto Particular): Acesso só pelo dono, como um quarto trancado. Em programação, private é restrito à própria classe.
// Esses termos definem o acesso em programação, como áreas em uma casa.