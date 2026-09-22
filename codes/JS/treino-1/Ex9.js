const prompt = require("prompt-sync")();

// Uma professora quer analisar as notas de 8 alunos. Para cada aluno, 
// peça o nome e a nota, valide para aceitar somente notas entre 0 e 10, calcule a 
// média da turma, descubra qual aluno tirou a maior nota e descubra qual aluno tirou a menor nota. 
// No final, mostre a média, o nome e a nota do aluno com a maior nota e o nome e a nota do aluno com a 
// menor nota.

let nomeMenor = ""
let notaMenor = 0
let nomeMaior = ""
let notaMaior = 0
let soma = 0

for (let loop = 1 ; loop < 9 ; loop++) {
    let nome = prompt("Nome do " + loop + "º aluno: ")
    let nota = Number(prompt("Nota do " + loop + "º aluno: "))
    while (nota < 0 || nota > 10 || isNaN(nota)) {
        console.log("Erro. Insira um número de 0 a 10.\n")
        nota = Number(prompt("Nota do(a) aluno(a): "))
    } soma += nota
     if (loop === 1) {
         notaMaior = nota
         nomeMaior = nome
     	   notaMenor = nota
    	   nomeMenor = nome
     } if (nota > notaMaior) {
        notaMaior = nota
        nomeMaior = nome
     } if (nota < notaMenor) {
        notaMenor = nota
        nomeMenor = nome
     }
} let media = soma / 8
console.log("Média da turma: " + media + "\n\nAluno com maior nota: " + nomeMaior + " / " + notaMaior + "\n\nAluno com menor nota: " + nomeMenor + " / " + notaMenor)