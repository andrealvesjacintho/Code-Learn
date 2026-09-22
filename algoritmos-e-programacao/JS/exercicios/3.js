# EXERCICIO (IA)
/*
Exercício: Classificação de Atendimento Bancário

Um banco quer um algoritmo que decida se um cliente pode fazer um saque,
com base em três informações lidas pelo programa:

- saldo (saldo atual da conta)
- valorSaque (valor que o cliente quer sacar)
- correntista (se for true, o cliente tem conta corrente há mais de 1 ano;
  se false, é um cliente novo)

Regras:

1. Primeiro, verifique se valorSaque é maior que saldo. Se for, mostre a
   mensagem "Saldo insuficiente" e pare por aí (nenhuma outra verificação
   deve rodar nesse caso).

2. Se o saldo for suficiente, aí sim entra a segunda camada de decisão:
   verifique se o cliente é correntista antigo.

   - Se FOR correntista antigo, ele pode sacar até R$5000 por vez.
     Se valorSaque for maior que R$5000, mostre
     "Limite excedido para este tipo de conta".
     Caso contrário, mostre "Saque autorizado".

   - Se NÃO for correntista antigo (cliente novo), o limite de saque é
     de apenas R$1000.
     Se valorSaque for maior que R$1000, mostre
     "Limite excedido para clientes novos".
     Caso contrário, mostre "Saque autorizado".
*/

let val = parseInt(prompt("Valor: "));
let saq = parseInt(prompt("Saque: "));
let acc = parseInt(prompt("Meses de Conta: "));

if (saq < val) {
  
  if (acc >= 12) {

    if (saq > 5000) {

    console.log("Limite excedido para este tipo de conta.")
      
    } else {

  console.log("Saque autorizado.")
      
    }
    
  } else {

    if (saq > 1000) {

    console.log("Limite excedido para clientes novos.")
      
    } else {

      console.log("Saque autorizado.")
      
    }
    
  }
  
} else {
  
  console.log("Saldo Insuficiente.")
  
}