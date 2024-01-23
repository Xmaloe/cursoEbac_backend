let Chovendo: boolean = false

Chovendo = true

let idade: number = 22
let altura: number = 1.67
const nacionalidade: string = 'brasileira'

const colegas: string[] = ['Karen', 'Isabella', 'Vicente'] //array de strings
const tecnologias: Array<string> = ['html', 'javascript', 'css'] //array de strings
const notas: ReadonlyArray<number> = [7, 9, 11, 13] //marcado como somente leitura, não pode modificar os elementos do array


//Uma tupla é uma estrutura de dados em programação que permite armazenar um conjunto ordenado de elementos heterogêneos. 
//Em outras palavras, uma tupla é uma sequência imutável de valores de diferentes tipos. Cada valor na tupla é associado
//a uma posição específica, chamada de índice.
//Em linguagens de programação, como Python, TypeScript, e outras, as tuplas são uma forma de estruturar dados, e cada elemento na tupla 
//pode ter um tipo de dado diferente. Essa característica diferencia as tuplas dos arrays, que geralmente têm elementos do mesmo tipo.

const lista: [nome: string, estudadando: boolean, idade: number] = ['Karen', true, 22]// Tupla

let minhaIdade: number | string | boolean = 22// uso do any
minhaIdade = 22
minhaIdade = '22 anos'
minhaIdade = true

let Dados: any //any= qualquer tipo
Dados = 10
Dados = 'string'
Dados = true
Dados = [1, 2, 3]

let Curso = 'Full-Stack'
Curso = 'string'