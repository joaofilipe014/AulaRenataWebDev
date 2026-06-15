const aluno = {
    nome: "Mirela",
    idade: 19,
    notas: [8, 7.5, 9, 8.5, 10]
};

let somaNotas = 0;

for (let i = 0; i < aluno.notas.length; i++) {
    somaNotas += aluno.notas[i];
}

const media = somaNotas / aluno.notas.length;
const situacao = media >= 7 ? "Aprovado" : "Reprovado";

console.log("Nome do aluno: " + aluno.nome);
console.log("Média: " + media.toFixed(2));
console.log("Situação: " + situacao);