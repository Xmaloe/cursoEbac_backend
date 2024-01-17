// Exemplo de criação de objeto literal
    const pessoa = {
        nome: 'João',
        idade: 25,
        profissao: 'Desenvolvedor'
    };

    console.log(pessoa);

    // Função construtora
    function Pessoa(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
    
    // Criar um objeto usando a função construtora
    const pessoa1 = new Pessoa('Maria', 30, 'Designer');
    console.log(pessoa1);
    
// Usando a notação literal
    const carro = {
        modelo: 'Civic',
        ano: 2022,
        proprietario: {}
    };
    
    // Usando função construtora para criar um proprietário
    function Proprietario(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    
    // Criando um objeto proprietário
    const donoCarro = new Proprietario('Carlos', 35);
    
    // Atribuindo o objeto proprietário ao carro
    carro.proprietario = donoCarro;
    
    console.log(carro);

    // Função construtora
    function Carro(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    
    // Criar uma instância da função construtora
    const meuCarro = new Carro('Toyota', 'Corolla');
    
    // Verificar se a instância pertence à função construtora
    if (meuCarro instanceof Carro) {
        console.log('meuCarro é uma instância de Carro.');
    } else {
        console.log('meuCarro não é uma instância de Carro.');
    }

    // Exemplos de tipos primitivos
    const stringExemplo = "Hello";
    const numberExemplo = 42;
    const booleanExemplo = true;

    // Exemplos de instâncias de objetos
    const objetoExemplo = { chave: "valor" };
    const arrayExemplo = [1, 2, 3];
    const funcaoExemplo = function() { console.log("Olá!"); };
