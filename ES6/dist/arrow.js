// "use strict";

// var _this = void 0;

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Função de seta que retorna a string "Diz Olá"
const minhaFuncao = () => "Diz Olá";

  const Carro = () => ({
      modelo: 'Versa',
      fabricante: 'Nissan'
  })

console.log(minhaFuncao());
console.log(Carro());
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Objeto representando uma moto
var Moto = {
  velocidade: 40,
  // Método para acelerar a moto (função regular)
  acelerar: function acelerar() {
    this.velocidade += 8;
  },
  // Método para frear a moto (função de seta - com problema)
  frear: function frear() {
    // Problema: Arrow functions não têm seu próprio 'this', 
    // então 'this.velocidade' não funciona conforme esperado aqui.
    this.velocidade -= 10;
  }
};
Moto.acelerar();
Moto.frear();
console.log(Moto.velocidade);