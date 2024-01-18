    function Pessoa(nome) {
        this.nome = nome;
    }

    function FuncionarioBase(nome, cargoBase, salarioBase) {
        let _salario = salarioBase;

        this.getSalario = function() {
            return _salario;
        };

        this.setSalario = function(valorSalario) {
            if (typeof valorSalario === 'number') {
                _salario = valorSalario;
            }
        };

        this.getCargo = function() {
            return this.cargo; // Retorna o cargo atribuído à instância
        };

        this.cargo = cargoBase; // Atribui o cargo à instância

        Pessoa.call(this, nome);
    }

    function Funcionario(nome) {
        FuncionarioBase.call(this, nome, "Dev Full Stack", 3000);

        this.aumento = function() {
            const novoSalario = this.getSalario() * 1.5;
            this.setSalario(novoSalario);
        };
    }

    function Estagiaria(nome) {
        FuncionarioBase.call(this, nome, "Estagiária", 2000);

        this.aumento = function() {
            const novoSalario = this.getSalario() * 1.07;
            this.setSalario(novoSalario);
        };
    }

    const funcionario1 = new Funcionario("Karen");
    const funcionario2 = new Estagiaria("Isabella");

    funcionario1.dizOi = function() {
        console.log(this.nome + " diz Olá");

        if (this.aumento) { // Verifica se a função aumento está definida para a instância atual
            this.aumento(); // Chama a função aumento na instância atual
        }
    };

    funcionario1.dizOi();
    console.log(funcionario1.getCargo());
    console.log(funcionario1.getSalario());

    funcionario2.dizOi = function() {
        console.log(this.nome + " diz Olá");

        if (this.aumento) { // Verifica se a função aumento está definida para a instância atual
            this.aumento(); // Chama a função aumento na instância atual
        }
    };

    funcionario2.dizOi();
    console.log(funcionario2.getCargo());
    console.log(funcionario2.getSalario());

