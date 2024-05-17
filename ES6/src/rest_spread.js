// Função Arguments
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
function somarComRest() {
    //No ECMA6 o Rest substituiu o arguments
    function Rest(...numeros) {
        const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
        }, 0)
        return soma;
    }
    console.log(Rest(10, 20, 30))
    //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //Função arguments
    function somaArguments() {
        const numeros = Array.from(arguments);
        const soma = numeros.reduce((total, numeroAtual) => {
            total += numeroAtual;
            return total;
        }, 0);
        return soma;
    }
    console.log(somarComRest(10, 20, 30));
    console.log(somaArguments(10, 20, 30));
    
    // Explicação:
    
    // spread (pode ser usado para concatenação)
    // Criando um array de números
    // Parâmetros rest:
    // for (var _len = arguments.length, numeros = new Array(_len), _key = 0; _key < _len; _key++) { numeros[_key] = arguments[_key]; }
    // Esse loop converte o objeto em uma matriz real. Isso é necessário porque não é uma matriz real e não possui métodos de matriz como o .argumentsnumerosargumentsreduce
    
    // Redução de matriz:
    // var soma = numeros.reduce(function (total, numeroAtual) { total += numeroAtual; return total; }, 0);
    // O método é chamado na matriz. Ele usa uma função de retorno de chamada e um valor inicial (0 neste caso).reducenumeros
    // A função de retorno de chamada usa dois parâmetros: (o acumulador) e (o elemento atual).totalnumeroAtual
    // Dentro do retorno de chamada, cada um é adicionado ao , e o novo total é retornado.numeroAtualtotal
    
    // Devolva a soma: Finalmente, a função retorna a soma calculada .soma
    //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
    // Spread Operator (pode ser usado para concatenação)

    // Criando um array de números no caso de arguments 
    var numeros = [1, 2, 3, 4];
    (_console = console).log.apply(_console, numeros);
    
    // Arrays de times de futebol de São Paulo e Rio de Janeiro
    // Spread Operator ES6 usando o Rest
    var numeros = [1,2,3,4]
    console.log(...numeros)
    //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
    var timesDeFutebolDeSp = ['santos', 'palmeiras', 'bragantino', 'são paulo'];
    var timesDeFutebolDoRio = ['vasco', 'botafogo', 'flamengo', 'fluminense'];
    
    // Concatenando arrays usando spread operator
    var timesDeFutebol = [...timesDeFutebolDeSp, ...timesDeFutebolDoRio];
    console.log(timesDeFutebol)
    
    // Alternativa usando o método concat 
    var timesDeFutebol = timesDeFutebolDeSp.concat(timesDeFutebolDoRio);
    console.log(timesDeFutebol)
    
    var timesDeFutebol = [].concat(timesDeFutebolDeSp, timesDeFutebolDoRio);
    // Alternativa usando o método concat (comentado)
    // const timesDeFutebol = timesDeFutebolDeSp.concat(timesDeFutebolDoRio);
    console.log(timesDeFutebol);
    
    // Objeto representando um carro da Julia
    // Resumo das Diferenças
    // Operador Spread (...):
    
    // Sintaxe mais moderna e concisa.
    // Introduzido no ES6.
    // Espalha os elementos dos arrays diretamente em um novo array.
    // Método concat:
    
    // Método de array tradicional para combinar arrays.
    // Retorna um novo array concatenando os arrays fornecidos.
    // Funciona bem, mas pode parecer mais verboso que o operador spread.
    // Método concat com Array Vazio:
    
    // Combina a flexibilidade do concat com a inicialização de um array vazio.
    // Útil quando se deseja começar com um array vazio e adicionar múltiplos arrays.
    // Mais explícito na criação de um novo array a partir de um array vazio.
    // Qual Usar?
    // Operador Spread é preferível se você está trabalhando com código moderno e deseja uma sintaxe mais concisa.
    // Método concat é uma boa escolha se você está mantendo compatibilidade com versões mais antigas do JavaScript ou prefere a semântica explícita do método concat.
    // Método concat com Array Vazio pode ser útil em cenários específicos onde você precisa começar com um array vazio e adicionar vários arrays de forma clara.
    
    // Objeto representando um carro da Julia,  função _objectSpread
    var carroDaJulia = {
        modelo: 'gol',
        marca: 'vw',
        motor: 1.6
    };
    
    // Criando um novo objeto (carroDaAna) baseado no objeto carroDaJulia, mas com motor 1.8
    var carroDaAna = _objectSpread(_objectSpread({}, carroDaJulia), {}, {
        motor: 1.8
    });
    console.log(carroDaAna);
    
    // Função com o Spred Operator e Rest
    var carroDaJulia = {
        modelo: 'gol',
        marca: 'vw',
        motor: 1.6
    };
    
    var carroDaAna = {
        ...carroDaJulia,
        motor: 1.8
    }
    console.log(carroDaAna);
    
    // Desestruturação para obter o valor da propriedade 'motor' do objeto carroDaAna
    var motorDoCarroDaAna = carroDaAna.motor;
    // Obtendo o valor da propriedade 'motor' do objeto carroDaJulia
    var motorDoCarroDaJulia = carroDaJulia.motor;
    var {motor: motorDoCarroDaAna} = carroDaAna;
    var {motor: motorDoCarroDaJulia} = carroDaJulia;
    
    console.log(motorDoCarroDaAna);
    console.log(motorDoCarroDaJulia);
    
    // Desestruturação de um array para obter elementos individuais e o restante em uma variável
    var _timesDeFutebol = _toArray(timesDeFutebol),
        item1 = _timesDeFutebol[0],
        item2 = _timesDeFutebol[1],
        item3 = _timesDeFutebol[2],
        outrosTimes = _timesDeFutebol.slice(3);
    console.log(item1);
    console.log(item2);
    console.log(item3);
    console.log(outrosTimes);

    
    // Com Ecma6 Spread Operator e Rest
    var [item1, item2, item3, ...outrosTimes] = timesDeFutebol;
    console.log(item1);
    console.log(item2);
    console.log(item3);
    console.log(outrosTimes);

}
    
    // explicação detalhada do objeto 'argumentos':
    
    // 1. **Natureza semelhante a uma matriz**:
    //  - O objeto 'arguments' é semelhante a uma matriz, o que significa que ele tem uma propriedade length e você pode acessar 
    // elementos usando índices (por exemplo, 'arguments[0]', 'arguments[1]'), mas não é uma matriz completa. 
    // Por exemplo, ele não tem métodos de matriz como 'push', 'pop', 'map' ou 'forEach'.
    
    // 2. **Uso**:
    //  - Você pode usar o objeto 'arguments' para manipular funções com um número desconhecido de argumentos. 
    // Isto era particularmente útil antes da introdução dos parâmetros de repouso ('...').
    
    // 3. **Não disponível nas funções de seta**:
    //  - O objeto 'argumentos' não está disponível nas funções de seta. As funções de seta não têm seu próprio objeto 'argumentos'; em vez disso, eles o herdam do escopo pai.
    
    // Aqui está um exemplo para ilustrar seu uso:
    
    // '''Javascript
    // função sum() {
    //  deixe total = 0;
    //  para (deixe i = 0; i < arguments.length; i++) {
    //  total += argumentos[i];
    //  }
    //  total de retorno;
    // }
    
    // console.log(soma(1, 2, 3)); Saídas: 6
    // console.log(soma(10, 20, 30, 40)); Saídas: 100
    // ```
    
    // ### Limitações e a alternativa moderna
    
    // Embora "argumentos" possam ser úteis, ele tem algumas limitações:
    
    // - Não é uma matriz real, então você não pode usar diretamente métodos de matriz.
    // - Código usando "argumentos" pode ser menos legível e mais difícil de entender.
    
    // #### Alternativa Moderna: Parâmetros de Descanso
    
    // O ES6 introduziu parâmetros de repouso, que fornecem uma maneira mais elegante e legível de lidar com funções com um número desconhecido de argumentos. 
    // Os parâmetros rest reúnem todos os argumentos restantes em uma matriz real.
    
    //Em resumo, o Rest "reúne" elementos em um array, enquanto o Spread "espalha" os elementos de um array ou objeto.