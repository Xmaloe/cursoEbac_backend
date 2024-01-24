"use strict";
//Função Multiplicação
const multiplica = (a = 25, b = 10) => `O Resultado da multiplicação é: ${a * b}`;
//Função saudação
const saudacao = (nome = 'Instrutor') => `Olá ${nome}`;
console.log(saudacao());
console.log(multiplica());
