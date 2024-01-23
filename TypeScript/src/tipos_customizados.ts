type aluno = {
    nome: string;
    cursos?: string[];
    idade: number;
}

const alunos: aluno[] = [
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
]

alunos.push({
    nome: "Vicente",
    cursos: ["Engenheiro de Softawe"],
    idade: 18
})

const Novato: aluno = {
    nome: "Lucas",
    idade: 23
}

function Exibir(aluno: aluno) {
    console.log(aluno.nome)
}

// outro exemplo

// Definindo um tipo 'Produto' que representa a estrutura de dados de um produto
type Produto = {
    id: number;
    nome: string;
    preco: number;
    disponivel?: boolean; // O campo 'disponivel' é opcional
}

// Declarando um array de produtos usando o tipo definido acima
const produtos: Produto[] = [
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
]

// Adicionando um novo produto ao array 'produtos'
produtos.push({
    id: 4,
    nome: "Boné",
    preco: 19.99,
    disponivel: true,
})

// Criando um novo produto usando o tipo definido
const novoProduto: Produto = {
    id: 5,
    nome: "Mochila",
    preco: 49.99,
}

// Função para exibir informações sobre um produto
function ExibirProduto(produto: Produto) {
    console.log(`Produto: ${produto.nome} | Preço: ${produto.preco.toFixed(2)} | Disponível: ${produto.disponivel ? 'Sim' : 'Não'}`);
}

// Exemplo de uso da função para exibir um produto
ExibirProduto(produtos[0]);
