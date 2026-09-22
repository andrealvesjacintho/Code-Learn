const prompt = require("prompt-sync")();

// Crie um programa que fique mostrando um menu até o usuário escolher sair: 
// 1 — Cadastrar nome, 
// 2 — Mostrar quantos nomes foram cadastrados, 
// 3 — Sair. Quando escolher 1, peça um nome e aumente o contador de cadastrados; quando escolher 2, 
// mostre a quantidade atual; quando escolher 3, encerre o programa; 
// se digitar qualquer outra opção, mostre uma mensagem de opção inválida. 
// Use while para manter o menu funcionando e if/else para decidir o que fazer em cada opção.


let fim = 0
let nomes = 0

while (fim == 0) {

    let menu = Number(prompt("- Bem-Vindo ao Menu de testes. -\n1 - Cadastrar nome\n2 - Quantos nomes já foram cadastrados.\n3 - Sair.\n\nOpção: "))

    switch (menu) {

        case 1: {

            let nome = prompt("\nQual nome você deseja Cadastrar? ")
            nomes++
            console.log("\nNome registrado com êxito!\n")
            break

        }

        case 2: {

            console.log("\nForam cadastrados " + nomes + " nome(s).\n")
            break

        }

        case 3: {

            fim = 1
            break

        }

        default: {

            console.log("\nOcorreu um erro, verifique se você digitou tudo corretamente.\n")

        }

    }

} console.log("\nMenu Encerrado.")