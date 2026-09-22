const prompt = require("prompt-sync")();

let sair = 0
let notaQuant = 0
let maiorNota = 0
let menorNota = 0
let notasTotal = 0

while (sair === 0) {
    let menu = Number(prompt(" - Sistema de gerenciamento de notas 1.0 - \n1 - Cadastrar Nota\n2 - Mostrar quantidade de notas\n3 - Mostrar média das notas.\n4 - Mostrar maior nota.\n5 - Mostrar menor nota.\n6 - Sair.\n\nOpção: "))
    switch (menu) {
        
        case 1:
            // 1 - Cadastrar Nota
            let nota = Number(prompt("| Insira a nota: "))
                while (nota < 0 || nota > 10 || isNaN(nota)) {
                    console.log("ERRO! A nota deve estar entre 0 e 10 e não deve possuir letras.")
                    nota = Number(prompt("| Insira a nota: "))
                }
                notaQuant++
                notasTotal += nota
                if (notaQuant === 1) {
                    maiorNota = nota
                    menorNota = nota
                }
                if (nota > maiorNota) {
                    maiorNota = nota
                }
                if (nota < menorNota) {
                    menorNota = nota
                }
                console.log("\nNota registrada com sucesso!\n")
        break;

        case 2:
            // 2 - Mostrar quantidade de notas
            if (notaQuant === 0) {
                console.log("\nERRO! Não há nenhuma nota registrada ainda.\n")
            } else if (notaQuant > 0) {
                console.log("\nA quantidade de notas no sistema é de: " + notaQuant + "\n")
            }
        break;

        case 3:
            // 3 - Mostrar média das notas
            if (notaQuant < 2) {
                console.log("\nERRO! Não há notas suficientes registradas para calcular a média.\n")
            } else if (notaQuant >= 2) {
                console.log("\nA média das notas no sistema é de: " + (notasTotal / notaQuant) + "\n")
            }
        break;

        case 4:
            // 4 - Mostrar maior nota
            if (notaQuant === 0) {
                console.log("\nERRO! Não há nenhuma nota registrada ainda.\n")
            } else if (notaQuant > 0) {
                console.log("\nA maior nota encontrada no sistema foi: " + maiorNota + "\n")
            }
        break;
            
            case 5:
                // 5 - Mostrar menor nota
            if (notaQuant === 0) {
                console.log("\nERRO! Não há nenhuma nota registrada ainda.\n")
            } else if (notaQuant > 0) {
                console.log("\nA menor nota encontrada no sistema foi: " + menorNota + "\n")
            }
            break;

        case 6:
            // 6 - Sair
            sair++
        break;

        default:
            // Opção inválida
            console.log("ERRO! Você deve escolher um número de 1-6.")
        break
    }

} console.log(" - Sistema Encerrado. - ")