"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

// Criando um novo Map
var meuMap = new Map();

// Adicionando valores ao Map
meuMap.set("nome", "karen");
meuMap.set("stack", "html, css, js");
console.log(meuMap);

// Obtendo o valor associado à chave "nome"
var nome = meuMap.get("nome");
console.log(nome);

// Imprimindo o tamanho do Map
console.log(meuMap.size);

// Verificando se o Map contém a chave "sobrenome"
console.log(meuMap.has("sobrenome"));

// Limpando o Map (comentado)
// meuMap.clear();
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Iterando sobre as chaves do Map

// var _iterator = _createForOfIteratorHelper(meuMap.keys()),
//   _step;
// try {
//   for (_iterator.s(); !(_step = _iterator.n()).done;) {
//     var chave = _step.value;
//     console.log(chave);
//   }
// } catch (err) {
//   _iterator.e(err);
// } finally {
//   _iterator.f();
// }

// var _iterator2 = _createForOfIteratorHelper(meuMap.values()),
//   _step2;
// try {
//   for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
//     var valor = _step2.value;
//     console.log(valor);
//   }
// } catch (err) {
//   _iterator2.e(err);
// } finally {
//   _iterator2.f();
// }

// _iterator.s(): Este método (s provavelmente significa start) inicializa o iterador.
// _iterator.n(): Este método (n provavelmente significa next) obtém o próximo valor do iterador e verifica se a iteração está concluída. 
// Ele retorna um objeto com uma propriedade done que indica se a iteração terminou e uma propriedade value que contém o valor atual.
// // !(_step = _iterator.n()).done: Este é o coração do loop. A expressão _iterator.n() é chamada para obter o próximo valor. _step armazena o resultado, 
// e !(_step.done) verifica se a iteração deve continuar. Se done for false, a iteração continua.
// _step.value: Acessa o valor atual do iterador, que neste caso é uma chave do Map.
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Iterando sobre as chaves do Map

// var _iterator3 = _createForOfIteratorHelper(meuMap.entries()),
//   _step3;
// try {
//   for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
//     var _step3$value = _slicedToArray(_step3.value, 2),
//       _chave = _step3$value[0],
//       _valor = _step3$value[1];
//     console.log("".concat(_chave, ": ").concat(_valor));
//   }
// } catch (err) {
//   _iterator3.e(err);
// } finally {
//   _iterator3.f();
// }
//Iterando sobre as chaves do Map com ECMA6

for (let chave of meuMap.keys()) {
  console.log(chave);
}
for (let valor of meuMap.values()) {
  console.log(valor);
}
for (let entrada of meuMap.entries()) {
  console.log(entrada);
}
//Forma desestruturada
// for (let [chave, valor] of meuMap.entries()) {
//   console.log(`${chave}: ${valor}`);
// }

// Removendo um item do Map pela chave "stack"
meuMap.delete("stack");
console.log(meuMap);

// Criando um novo Set para armazenar CPFs
var cpfs = new Set();
cpfs.add('92811369023');
cpfs.add('01957537043');
cpfs.add('59654996049');
console.log(cpfs);

// Não existem métodos .keys() e .values() em Set, então estes retornam o próprio Set
console.log(cpfs.keys());
console.log(cpfs.values());

// Iterando sobre os valores do Set usando forEach
cpfs.forEach((valor) => {
  console.log(valor);
});

// Criando um array com itens duplicados
var array = ['Gian Souza', 'José Paulo', 'Maria Isabel', 'Luana', 'Luana', 'Gian Souza'];

// Convertendo o array em um Set para remover itens duplicados
var arrayComoSet = new Set([...array]);

// Convertendo o Set de volta para um array
var arraySemItensDuplicados = _toConsumableArray(arrayComoSet);

console.log(arrayComoSet);
console.log(arraySemItensDuplicados);



//Explicação:

// Um iterador é uma ferramenta que ajuda a percorrer elementos de uma coleção de dados. Neste caso, estamos criando um iterador para as chaves (keys) do objeto Map meuMap