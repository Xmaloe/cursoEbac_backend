    // Função de seta que retorna a string "Diz Olá"
    const minhaFuncao = () => "Diz Olá";
    // Função de seta que retorna um objeto representando um carro
    const Carro = () => ({
        modelo: 'Versa',
        fabricante: 'Nissan'
    });
    console.log(minhaFuncao());
    console.log(Carro());

    // Objeto representando uma moto
    const Moto = {
        velocidade: 40,
        // Método para acelerar a moto (função regular)
        acelerar: function() {
            this.velocidade += 10;
        },
        // Método para frear a moto (função de seta - com problema)
        frear: () => {
            // Problema: Arrow functions não têm seu próprio 'this', 
            // então 'this.velocidade' não funciona conforme esperado aqui.
            this.velocidade -= 10;
        }
    };
    Moto.acelerar();
    Moto.frear();
    console.log(Moto.velocidade);
