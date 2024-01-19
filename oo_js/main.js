    // Classe abstrata ContaBancaria
    class ContaBancaria {
        constructor(titular, saldo) {
        this._titular = titular;
        this._saldo = saldo;
        }
    
        get titular() {
        return this._titular;
        }
    
        get saldo() {
        return this._saldo;
        }
    
        depositar(valor) {
        this._saldo += valor;
        console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this._saldo}`);
        }
    
        sacar(valor) {
        if (valor <= this._saldo) {
            this._saldo -= valor;
            console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this._saldo}`);
        } 
    }
    }
    
    // Classe ContaCorrente herda de ContaBancaria
    class ContaCorrente extends ContaBancaria {
        constructor(titular, saldo, taxaRendimento) {
            super(titular, saldo);
            this._taxaRendimento = taxaRendimento;
            }
        
            get taxaRendimento() {
            return this._taxaRendimento;
            }
        
            calcularRendimento() {
            const rendimento = this._saldo * (this._taxaRendimento * 0.5);
            this._saldo += rendimento;
            console.log(`Rendimento de R$${rendimento} aplicado. Novo saldo: R$${this._saldo}`);
            }
    }
    
    // Classe ContaPoupanca herda de ContaBancaria
    class ContaPoupanca extends ContaBancaria {
        constructor(titular, saldo, taxaRendimento) {
        super(titular, saldo);
        this._taxaRendimento = taxaRendimento;
        }
    
        get taxaRendimento() {
        return this._taxaRendimento;
        }
    
        calcularRendimento() {
        const rendimento = this._saldo * (this._taxaRendimento * 0.5);
        this._saldo += rendimento;
        console.log(`Rendimento de R$${rendimento} aplicado. Novo saldo: R$${this._saldo}`);
        }
    }
    
    // Criando instâncias de objetos
    const contaCorrente1 = new ContaCorrente('Karen', 6000, 500);
    const contaPoupanca1 = new ContaPoupanca('Isabella', 5000, 400);
    
    // Acessando propriedades via getters
    console.log(contaCorrente1.titular); 
    console.log(contaCorrente1.taxaRendimento);
    contaCorrente1.depositar(1000);
    contaCorrente1.calcularRendimento();

    console.log(contaPoupanca1.titular); 
    console.log(contaPoupanca1.taxaRendimento);
    contaPoupanca1.depositar(1000);
    contaPoupanca1.calcularRendimento();
    


