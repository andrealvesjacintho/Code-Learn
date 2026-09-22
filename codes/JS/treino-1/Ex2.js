const prompt = require("prompt-sync")();

// Uma loja quer descobrir qual de 5 produtos possui o maior preço. 
// Seu programa deve pedir o nome e o preço de cada produto e, depois de receber os 5 produtos, 
// mostrar o nome do produto mais caro e seu preço. Use um for para repetir o processo e 
// um if para comparar o preço atual com o maior preço encontrado até aquele momento.

let filmeCaro = 0
let filmeCaroNome = ""

for (let loop = 0; loop < 5; loop++) {
    let filmeNome = prompt("Qual o nome do filme? ")
    let filmeCusto = Number(prompt("Qual o preço desse filme? "))

    if (filmeCusto > filmeCaro) {

        filmeCaro = filmeCusto
        filmeCaroNome = filmeNome

    }

} console.log("O Filme mais caro encontrado é: " + filmeCaroNome + ". Com um valor de: " + filmeCaro)