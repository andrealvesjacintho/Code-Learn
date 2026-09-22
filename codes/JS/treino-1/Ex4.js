const prompt = require("prompt-sync")();

// Uma professora precisa registrar as notas de 5 alunos. Para cada aluno, peça o nome e a nota, 
// acumule todas as notas e, ao final, calcule e mostre a média da turma. Além disso, durante o cadastro, 
// conte quantos alunos tiraram nota maior ou igual a 7. Use um for, um acumulador e um if.

let somasNotas = 0
let alunosBons = 0

for (let loop = 1; loop <6; loop++) {
    
    let alunoNome = prompt("Qual o nome do " + loop + "º aluno? ")
    let alunoNota = Number(prompt("Qual a nota do " + loop + "º aluno? "))
    
    while (alunoNota < 0 || alunoNota > 10 || isNaN(alunoNota)) {

        alunoNota = Number(prompt("Nota inválida.\nQual a nota do " + loop + "º aluno? "))

    }

    somasNotas += alunoNota

    if (alunoNota >= 7) {

        alunosBons++

    }

} let mediaNotas = somasNotas / 5
console.log("Média da turma: " + mediaNotas + "\nQuantidade de alunos com nota acima de 6: " + alunosBons)