// Define a classe base Pokemon
class Pokemon {
    // Encapsula a propriedade HP
    #hp = 100;

    // Construtor para inicializar o Pokemon com nome e tipo
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }

    // Método para atacar
    atacar(nomeDoAtaque) {
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`);
    }

    // Método para reduzir HP quando atacado
    recebeuAtaque() {
        this.#hp -= 10;
    }

    // Método para exibir HP atual
    exibeHp() {
        console.log(this.#hp);
    }
}

// Define uma subclasse Pikachu herdando de Pokemon
class Pikachu extends Pokemon {
    // Construtor inicializa Pikachu com nome e tipo predefinidos
    constructor() {
        // Chama o construtor da superclasse com argumentos específicos
        super('Pikachu', 'Elétrico');
    }

    // Sobrescreve o método de ataque
    atacar() {
        console.log(`${this.nome} atacou com choque do ${this.tipo}`);
    }
}

// Cria uma instância de Pikachu
const pikachuDoAsh = new Pikachu();

// Simula Pikachu sendo atacado e tenta modificar HP (não afetará #hp privado)
pikachuDoAsh.recebeuAtaque();
pikachuDoAsh.hp = 5000; // Tenta modificar HP diretamente (não afetará #hp)
console.log(pikachuDoAsh.hp); // undefined (já que hp é privado)
pikachuDoAsh.atacar(); // Ataque com método sobrescrito
pikachuDoAsh.exibeHp(); // Exibe HP atual

// Cria uma instância de Pokemon (não Pikachu)
const pikachu = new Pokemon('pikachu', 'elétrico');

// Exibe instâncias e verificações de instância
console.log(pikachu); // Exibe a instância Pikachu
console.log(pikachuDoAsh); // Exibe a instância Pikachu criada usando a classe Pikachu
console.log(pikachuDoAsh instanceof Pikachu); // Verifica se pikachuDoAsh é uma instância de Pikachu
console.log(pikachuDoAsh instanceof Pokemon); // Verifica se pikachuDoAsh é uma instância de Pokemon
