//Função Multiplicação
const multiplica = (a: number = 25, b: number = 10): string => `O Resultado da multiplicação é: ${a * b}`;

//Função saudação
const saudacao = (nome: string = 'Instrutor'): string => `Olá ${nome}`;

console.log(saudacao());
console.log(multiplica());
