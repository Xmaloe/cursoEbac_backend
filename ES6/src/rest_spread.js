// rest
//function somar() {
//    let soma = 0;

//    for (let i = 0; i < arguments.length; i++) {
//        soma += arguments[i];
//    }

//    return soma;
    // arguments.map
    // console.log(arguments)
    // return a + b + c;
//}
//console.log(somar(10, 20, 30))

//No ECMA o Rest substituiu o arguments
function somarComRest(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)
    return soma;
}
console.log(somarComRest(10, 20, 30))

// spread (pode ser usado para concatenação)
// Criando um array de números
    const numeros = [1, 2, 3, 4];
    console.log(...numeros);

// Arrays de times de futebol de São Paulo e Rio de Janeiro
    const timesDeFutebolDeSp = ['santos', 'palmeiras', 'bragantino', 'são paulo'];
    const timesDeFutebolDoRio = ['vasco', 'botafogo', 'flamengo', 'fluminense'];

// Concatenando arrays usando spread operator
    const timesDeFutebol = [...timesDeFutebolDeSp, ...timesDeFutebolDoRio];
// Alternativa usando o método concat (comentado)
// const timesDeFutebol = timesDeFutebolDeSp.concat(timesDeFutebolDoRio);
    console.log(timesDeFutebol);

 // Objeto representando um carro da Julia
    const carroDaJulia = {
        modelo: 'gol',
        marca: 'vw',
        motor: 1.6
    };

// Criando um novo objeto (carroDaAna) baseado no objeto carroDaJulia, mas com motor 1.8
    const carroDaAna = {
        ...carroDaJulia,
        motor: 1.8
    };
    console.log(carroDaAna);

// Desestruturação para obter o valor da propriedade 'motor' do objeto carroDaAna
    const { motor: motorDoCarroDaAna } = carroDaAna;
// Obtendo o valor da propriedade 'motor' do objeto carroDaJulia
    const { motor: motorDoCarroDaJulia } = carroDaJulia;
    
    console.log(motorDoCarroDaAna);
    console.log(motorDoCarroDaJulia);

// Desestruturação de um array para obter elementos individuais e o restante em uma variável
    const [item1, item2, item3, ...outrosTimes] = timesDeFutebol;

    console.log(item1);
    console.log(item2);
    console.log(item3);
    console.log(outrosTimes);
