function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + " diz Olá");
    }
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    this.salario = salario;
//herança para a não repetição da função
    Pessoa.call(this, nome);
}

const funcionario1 = new Funcionario("Isabella", "dev full stack", 5000);
funcionario1.dizOi();



//sintaxe de classes introduzida no ECMAScript 6
    // Superclasse (Classe Base)
    class Animal {
        constructor(nome) {
        this.nome = nome;
        }
    
        fazerBarulho() {
        console.log("Fazendo algum barulho genérico");
        }
    }
    
    // Subclasse (Classe Derivada)
    class Cachorro extends Animal {
        // O construtor da subclasse pode chamar o construtor da superclasse usando super()
        constructor(nome, raca) {
        super(nome); // Chama o construtor da classe base
        this.raca = raca;
        }
    
        // A subclasse pode ter seus próprios métodos
        latir() {
        console.log("Au au!");
        }
    }
    
    // Subclasse Adicional
    class Gato extends Animal {
        constructor(nome, cor) {
        super(nome); // Chama o construtor da classe base
        this.cor = cor;
        }
    
        // A subclasse pode ter seus próprios métodos
        miar() {
        console.log("Miau!");
        }
    }
    
    // Criar uma instância da subclasse
    const meuCachorro = new Cachorro("Bolinha", "Labrador");
    const meuGato = new Gato("Whiskers", "Branco");
    
    // Herança de atributos
    console.log(meuCachorro.nome); // Saída: Bolinha
    console.log(meuGato.cor); // Saída: Branco
    
    // Herança de métodos
    meuCachorro.fazerBarulho(); // Saída: Fazendo algum barulho genérico
    meuCachorro.latir(); // Saída: Au au!
    
    meuGato.fazerBarulho(); // Saída: Fazendo algum barulho genérico
    meuGato.miar(); // Saída: Miau!
    
//sintaxe de classes introduzida no ECMAScript 6
//        class Pessoa {
//            constructor(nome) {
//                this.nome = nome;
//            }
//         
//             dizOi() {
//                 console.log(this.nome + " diz Olá");
//             }
//         }
        
//         class Funcionario extends Pessoa {
//             constructor(nome, cargo, salario) {
//                 super(nome);
//                 this.cargo = cargo;
//                 this.salario = salario;
//             }
//         }
        
//         const funcionario1 = new Funcionario("Isabella", "dev full stack", 5000);
//         funcionario1.dizOi();
    

