class Pessoa {
//definindo as propriedades
    nome: string;
    renda?: number;

    constructor (nome: string, renda?: number) {
        this.nome = nome;
        this.renda = renda;
    }

    dizOlá(): string {
        return `${this.nome} disse olá`;
    }
}

//modificador (encapsulamento- proteger)
class ContaBancaria {
//definindo as propriedades com valor já estabelicido
//o protected faz com que as informações sejam públicas apenas para classes filhas que herdam (instâncias)
    protected saldo: number = 0;
    conta: number;

    constructor(conta: number) {
        this.conta = conta;
    }
//com o static não há necessidade de criar uma nova instância para acessar a informação dentro da classe
    static agencia() {
        return 1633;
    }
// com o private não podemos acessar as informações em instâncias ou classes filhas
    private getSaldo() {
        return this.saldo;
    }

    depositar(valor: number) {
        this.saldo += valor;
    }
}

//classe filha herdou ContaBancaria
class PessoaFisica extends ContaBancaria {
//polimorfismo que executa a tarefa de maneira diferente 
    depositar(valor: number): void {
        this.saldo = valor * 2;
    }
}

//Encapsulamento private, static e protected (maneira como acessamos as informações das classes)
// Criado a instância para acessar informação dentro da classe
const karen = new PessoaFisica(123456)
//Desse modo não há necessidade de criar uma nova instância para acessar a informação dentro da classe
ContaBancaria.agencia()

