    function Pessoa(nome) {
        this.nome = nome;
    }

    function Funcionario(nome, cargo, salario) {
        this.cargo = cargo
// getters e setters
        let _salario = salario;
        this.getSalario = function() {
            return `O salário de ${this.nome} é ${_salario}`;
        };
        this.setSalario = function(valorSalario) {
            if (typeof valorSalario === 'number') {
                _salario = valorSalario;
            }
        };

        Pessoa.call(this, nome);
    }

    const funcionario1 = new Funcionario("Isabella", "dev full stack", 5000);
    funcionario1.dizOi = function() {
        console.log(this.nome + " diz Olá");
    };

    funcionario1.dizOi();
    funcionario1.setSalario('mil');
    console.log(funcionario1.cargo);
    console.log(funcionario1.getSalario());

