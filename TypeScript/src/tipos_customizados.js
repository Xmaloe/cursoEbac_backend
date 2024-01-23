"use strict";
const alunos = [
    {
        nome: "Karen",
        cursos: ["Economia", "Full Stack"],
        idade: 22,
    },
    {
        nome: "Isabella",
        cursos: ["Administração", "Python"],
        idade: 20,
    },
];
alunos.push({
    nome: "Vicente",
    cursos: ["Engenheiro de Softawe"],
    idade: 18
});
const Novato = {
    nome: "Lucas",
    idade: 23
};
function Exibir(aluno) {
    console.log(aluno.nome);
}
// Declarando um array de produtos usando o tipo definido acima
const produtos = [
    {
        id: 1,
        nome: "Camiseta",
        preco: 29.99,
        disponivel: true,
    },
    {
        id: 2,
        nome: "Calça Jeans",
        preco: 59.99,
        disponivel: false,
    },
    {
        id: 3,
        nome: "Tênis",
        preco: 99.99,
    },
];
// Adicionando um novo produto ao array 'produtos'
produtos.push({
    id: 4,
    nome: "Boné",
    preco: 19.99,
    disponivel: true,
});
// Criando um novo produto usando o tipo definido
const novoProduto = {
    id: 5,
    nome: "Mochila",
    preco: 49.99,
};
// Função para exibir informações sobre um produto
function ExibirProduto(produto) {
    console.log(`Produto: ${produto.nome} | Preço: ${produto.preco.toFixed(2)} | Disponível: ${produto.disponivel ? 'Sim' : 'Não'}`);
}
// Exemplo de uso da função para exibir um produto
ExibirProduto(produtos[0]);
