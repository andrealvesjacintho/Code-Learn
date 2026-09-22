/*
5) Desafio: Elaborar um algoritmo (pequeno sistema) envolvendo os conteúdos abordados nas aulas anteriores com o objetivo de propor uma solução para um problema real. Pode ser no contexto de uma farmácia, locadora, itens de um mercado ou outro. O algoritmo deverá envolver funcionalidades envolvendo: variáveis, funções IF, Case, enquanto. O algoritmo deverá pedir algumas informações de entrada ao usuário e entregar respostas.
*/
console.log("------------------- 1 & 2 -------------------")



{
var x = Number(prompt("Insira o primeiro valor: "))
var y = Number(prompt("Insira o segundo valor: "))

while (y == 0) {

  console.log("VALOR INVÁLIDO")
  var y = Number(prompt("Insira o segundo valor: "))
  
} console.log(x + " / " + y + " = " + x / y)
}



console.log("------------------- 3 & 4 -------------------")



{
var i = "S"

while (i === "S") {

var n1 = Number(prompt("Insira a primeira nota: "))

  while (n1 < 0 || n1 > 10) {
  
    console.log("VALOR INVÁLIDO")
    n1 = Number(prompt("Insira a primeira nota: "))
  
}

var n2 = Number(prompt("Insira a segunda nota: "))

  while (n2 < 0 || n2 > 10) {
  
    console.log("VALOR INVÁLIDO")
    n2 = Number(prompt("Insira a segunda nota: "))
  
} console.log("Sua média é: " + (n1 + n2) / 2 + "\nVocê deseja refazer o cálculo? S/N")

i = prompt("")
    
} console.log("Calculadora de média de 2 notas encerrada.")
}



console.log("------------------- 5 -------------------")



//code