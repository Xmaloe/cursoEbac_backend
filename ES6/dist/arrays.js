"use strict";

var redesSociais = ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'Pinterest'];
//for (let i = 0; i < redesSociais.length; i++) {
//   console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`); este i é = 0 e retorna todos, se colocasse como valor = 1, o terceiro item do array seria undefined 
//} 
// Dessa forma o i se inicia no 0 e se limita até o indice/item 2 do array
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//EcmaScript 6
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Array forEach
redesSociais.forEach(function (item) {
  console.log("Eu tenho perfil na rede social: ".concat(item));
});

redesSociais.forEach(function(nomeRede, i) { //Array forEach, porém dessa forma númera cada item 
  console.log(`#${i} Eu tenho perfil na rede social: ${nomeRede}`)
})
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Array maps
var alunos = ['Karen', 'Isabella', 'Vicente', 'Helena'];
var alunos2 = alunos.map(function (item) {
  return {
    nome: item,
    curso: 'Backend'
  };
});
console.log(alunos2);

const numeros = [1, 2, 3, 4, 5]
const dobraNumeros = numeros.map(function(numeroAtual) {
   return numeroAtual * 2;
})
console.log(dobraNumeros);
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Array find
var vicente = alunos2.find(function (item) {
  return item.nome == 'Vicente';
});
console.log(vicente);
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Array findIndex
var indicevicente = alunos2.findIndex(function (item) {
  return item.nome == 'Vicente';
});
console.log(indicevicente);
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Metodos

//every
alunos2.push({
  nome: 'Lucio',
  curso: 'Frontend'
});
var CargoAlunos = alunos2.every(function (item) {
  return item.curso === 'Backend';
});
console.log(CargoAlunos);

//Some para verificar se algum aluno tem o curso igual a 'Frontend' e 'Frontend' simultaneamente
var existeAlgumAlunoDeFrontend = alunos2.some(function (item) {
  return item.curso === 'Frontend' && item.curso === 'Backend';
});
console.log(existeAlgumAlunoDeFrontend);

//método filter() para criar um novo array (alunosDeFrontend) contendo apenas os alunos cujo curso é 'Frontend'
function filtraAlunosDeFrontend(aluno) {
  return aluno.curso === 'Frontend';
}
//Método arrow const filtraAlunosDeFrontend = aluno => aluno.curso === 'Frontend';

var filtraAlunosDeFrontend2 = function filtraAlunosDeFrontend2(aluno, indice) {
  return aluno.curso === 'Frontend';
};
var alunosDeFrontend = alunos2.filter(filtraAlunosDeFrontend);
console.log(alunosDeFrontend);

//método reduce() para calcular a soma dos elementos no array nums
var nums = [10, 20, 30, 10];
var soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log(soma);

//reduce(), mas usando um loop for tradicional
//let somaComFor = 0;
//for (let i = 0; i < nums.length; i++) {
//    somaComFor += nums[i];
//}
//console.log(somaComFor);

//reduce() para concatenar os nomes dos alunos em uma única string
var nomesDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  acumulador += "".concat(itemAtual.nome, " ");
  return acumulador;
}, '');
console.log(nomesDosAlunos);