const prompt = require("prompt-sync")();

// Uma lista possui 10 números. Seu programa deve pedir cada número ao usuário e, 
// durante o cadastro, descobrir quantos desses números são pares e quantos são ímpares. 
// No final, mostre as duas quantidades. Use um for para receber os 10 números, um if para 
// verificar se cada número é par e dois contadores para registrar os resultados.

let num = 0
let par = 0
let imp = 0

for (let loop = 0; loop < 10; loop++) {

    num = Number(prompt("Entre um número: "))

    while (isNaN(num)) {

        num = Number(prompt("Erro.\nEntre um número: "))

    }
    
    if (num % 2 === 0) {

        par++

    } else {

        imp++

    }

} console.log("Pares: " + par + " / Ímpares: " + imp)