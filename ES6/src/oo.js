    //pikachu é uma instância do Pokemom
    // const pikachu = new Pokemon("Pikachu", "elétrico")    
    // function Pokemon(nome, tipo) {
    //     this.nome = nome;
    //     this.tipo = tipo;
    // }

    class Pokemon {
//encapsulamento
        #hp = 100;

        constructor(nome, tipo) {
            this.nome = nome;
            this.tipo = tipo;
        }

        atacar(nomeDoAtaque) {
            console.log(`${this.nome} atacou com ${nomeDoAtaque}`)
        }
//encapsulamento
        recebeuAtaque() {
            this.#hp -= 10;
        }
//encapsulamento
        exibeHp() {
            console.log(this.#hp)
        }
    }

//Pikachu herda Pokemon     
    class Pikachu extends Pokemon {
        constructor() {
//super recebe os argumentos do Pokemon(classe Mãe)
            super('Pikachu', 'Elétrico')
        }
//polimorfismo para não ter que repertir a função de atacar
        atacar() {
            console.log(`${this.nome} atacou com choque do ${this.tipo}`)
        }
    }

    const pikachuDoAsh = new Pikachu();

    pikachuDoAsh.recebeuAtaque();
    pikachuDoAsh.hp = 5000;

    console.log(pikachuDoAsh.hp)

    pikachuDoAsh.atacar()
    pikachuDoAsh.exibeHp()

    const pikachu = new Pokemon('pikachu', 'elétrico');
    // pikachu.atacar('choque do trovão')
    // pikachu.nome = 'pikachu';
    // pikachu.tipo = 'elétrico'

    console.log(pikachu);
    console.log(pikachuDoAsh)

    console.log(pikachuDoAsh instanceof Pikachu);
    console.log(pikachuDoAsh instanceof Pokemon);