const prompt = require("prompt-sync")();

// Uma locadora quer registrar a quantidade de cópias disponíveis de 5 filmes. 
// Seu programa deve pedir o nome de cada filme e quantas cópias existem em estoque, 
// somar todas as quantidades e, no final, mostrar o total de cópias disponíveis. 
// Use um 'for' para repetir o processo 5 vezes e uma variável acumuladora para guardar a soma.

let somaTotal = 0

for (let loop = 0; loop < 5; loop++) {
    let filmeNome = prompt("Qual o nome do filme? ")
    let filmeEsto = Number(prompt("Quantas cópias existem em estoque desse filme? "))

    somaTotal += filmeEsto
}

console.log("A quantia de cópias disponíveis total é de: " + somaTotal)