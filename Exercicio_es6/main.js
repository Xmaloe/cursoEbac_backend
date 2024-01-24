const alunos = [
    { nome: 'Karen', nota: 9 },
    { nome: 'Isabella', nota: 8 },
    { nome: 'Vicente', nota: 6 },
    { nome: 'Helena', nota: 3 },
];

const Aprovados = listagem => listagem.filter(aluno => aluno.nota >= 6);
const aprovacao = Aprovados(alunos);

const MaiorNota = alunos.reduce((alunoMax, alunoAtual) => {
    return alunoAtual.nota > alunoMax.nota ? alunoAtual : alunoMax;
}, alunos[0]);

const alunoComMenorNota = alunos.reduce((alunoMin, alunoAtual) => {
    return alunoAtual.nota < alunoMin.nota ? alunoAtual : alunoMin;
}, alunos[0]);

console.log(aprovacao);
console.log('Aluno com a Maior nota:',MaiorNota.nome,MaiorNota.nota);
console.log('Aluno com a menor nota:', alunoComMenorNota.nome, 'Nota:', alunoComMenorNota.nota);





