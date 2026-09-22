const prompt = require("prompt-sync")();

// Uma empresa quer calcular o faturamento de 7 dias. 
// Para cada dia, peça o valor vendido e acumule todos os valores em uma variável. 
// Ao mesmo tempo, conte quantos dias tiveram faturamento acima de R$ 1.000. No final, 
// mostre o faturamento total e quantos dias ultrapassaram R$ 1.000. Use for, while, acumulador e contador.

let vendaTotal = 0
let diasMil = 0

for (let loop = 1 ; loop < 8 ; loop++) {

    let valorProd = Number(prompt("Qual o valor do " + loop + "º produto?"))

    while (valorProd < 0 || isNaN(valorProd)) {
        valorProd = Number(prompt("Erro.\nQual o valor do " + loop + "º produto?\n"))
    }

    vendaTotal += valorProd

    if (valorProd > 1000) {

        diasMil++

    }

} console.log("\nFaturamento total: " + vendaTotal + "\nProdutos acima de R$ 1000: " + diasMil)