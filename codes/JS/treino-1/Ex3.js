const prompt = require("prompt-sync")();

// Uma pesquisa precisa registrar 10 pessoas e contar quantas delas possuem 18 anos ou mais. 
// Seu programa deve pedir a idade de cada pessoa, verificar com um if se ela é maior ou igual a 18 e, 
// caso seja, aumentar um contador. No final, mostre quantas pessoas são maiores de idade.

let contMaior = 0

for (let loop = 1; loop < 11 ; loop++) {

    let nome = prompt("Qual o nome da " + loop +  "ª pessoa? ")
    let idade = Number(prompt("Qual a idade da " + loop + "ª pessoa? "))

    while (idade < 0) {

        idade = Number(prompt("Essa idade é inválida.\nQual a idade da " + loop + "ª pessoa? "))

    }

    if (idade >= 18) {

        contMaior++

    }

} console.log("A quantidade de pessoas com 18 anos ou mais é de: " + contMaior)