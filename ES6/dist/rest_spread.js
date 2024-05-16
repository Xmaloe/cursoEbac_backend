"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _console;
function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

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
  for (var _len = arguments.length, numeros = new Array(_len), _key = 0; _key < _len; _key++) {
    numeros[_key] = arguments[_key];
  }
  var soma = numeros.reduce(function (total, numeroAtual) {
    total += numeroAtual;
    return total;
  }, 0);
  return soma;
}
console.log(somaArguments(10, 20, 30));

// Explicação:

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
console.log(timesDeFutebol);

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