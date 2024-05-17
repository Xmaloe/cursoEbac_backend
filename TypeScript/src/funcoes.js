"use strict";
// Função que calcula a área de um retângulo
function calculaArea(base, altura) {
    return base * altura;
}
// Arrow function que calcula a área de um retângulo
const calculaArea2 = (base, altura) => base * altura;
// Função que soma um número indefinido de argumentos
function somar(...numeros) {
    // Aqui poderia ser implementada a lógica para somar os números usando reduce()
    console.log(numeros);
}
// Função que retorna uma string ou um número baseado em uma condição
function teste() {
    // Retorna 'dez maior que cinco' se 10 for maior que 5, senão retorna 5
    return 10 > 5 ? 'dez maior que cinco' : 5;
}
// Utilizando if e else
// function teste(): string | number {
//     if (10 > 5) {
//         return  'dez maior que cinco';
//     } else {
//         return 5
//     }
// }
