const prompt = require("prompt-sync")();

// Uma loja quer descobrir qual foi o menor preço informado entre 5 produtos. 
// Seu programa deve pedir o nome e o preço de cada produto, comparar cada preço com o menor preço 
// encontrado até aquele momento e, no final, mostrar o nome do produto mais barato e seu preço. 
// Use um for e um if; pense com cuidado em qual valor inicial você deve dar à variável que guardará o 
// menor preço.

let menorValor = 0
let menorVNome = ""

for (let loop = 1 ; loop < 6 ; loop++) {
    let inputNom = prompt("Qual o nome do " + loop + "º produto?")
    let inputVal = Number(prompt("Qual o valor do " + loop + "º produto?"))

    while (inputVal < 0 || isNaN(inputVal)) {
        inputVal = Number(prompt("Erro.\nQual o valor do " + loop + "º produto?"))
    }

    if (loop === 1) {
        menorVNome = inputNom
        menorValor = inputVal

    } else if (inputVal < menorValor) {
        menorValor = inputVal
        menorVNome = inputNom

    }
    
} console.log("O produto mais barato encontrado foi " + menorVNome + ". Com um valor de " + menorValor)