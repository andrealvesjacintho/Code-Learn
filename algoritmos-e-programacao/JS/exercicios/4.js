console.log("_______________ / Identificador de Sinal / _______________ / 1")

{let n = parseInt(prompt("Insira um número:"));

if (n < 0) {
  console.log("Negativo");
  
} else if (n == 0) {
  
  console.log("Zero");

} else {

  console.log("Positivo")
}}

console.log("_______________ / Maior Nº / _______________ / 2")

// Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.

{let a = parseInt(prompt("A = "));
let b = parseInt(prompt("B = "));
let c = parseInt(prompt("C = "));

if (a > b && a > c) { // Basicamente: Se a é maior que B e C, então é A
  
  console.log("Maior é: " + a);
  
} else if (b > a && b > c) {
  
  console.log("Maior é: " + b);
  
} else {
  
  console.log("Maior é: " + c)
  
}}

console.log("_______________ / Somar 2 Nº Maiores / _______________ / 3")

// Ler 3 valores (considere que não serão informados valores iguais) e escrever os 2 maiores.

{let a = parseInt(prompt("A="));
let b = parseInt(prompt("B="));
let c = parseInt(prompt("C="));

if (a < b && a < c) { // Comparando pra ver se A é menor que B e C
  
  console.log("Menor N: " + a , " // " , "Soma dos 2 maiores: ", b+c);
  
} else if (b < a && b < c) {
  
  console.log("Menor N: " + b , " // " , "Soma dos 2 maiores: ", a+c);
  
} else if (c < a && c < b) {
  
  console.log("Menor N: " + c , " // " , "Soma dos 2 maiores: ", a+b)
  
}}

console.log("_______________ / Times de Futebol / _______________ / 4")

// Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome do vencedor. Caso não haja vencedor deverá ser impressa a palavra "EMPATE"

{let time1 = (prompt("Nome do 1o time: "));
let time2 = (prompt("Nome do 2o time: "));

let sctime1 = parseInt(prompt("Pontuação do 1o time: "));
let sctime2 = parseInt(prompt("Pontuação do 2o time: "));

if (sctime1 > sctime2) {
  
  console.log(time1 + " é vencedor!");
  
} else if (sctime1 < sctime2) {
  
  console.log(time2 + " é vencedor!");
  
} else {
  
console.log("Empate!")

}}

console.log("_______________ / Identificador de Nº Iguais /_______________ / 5")

// Ler dois valores e imprimir uma das três mensagens a seguir: ‘Números iguais’, caso os números sejam iguais ‘Primeiro é maior’, caso o primeiro seja maior que o segundo; ‘Segundo maior’, caso o segundo seja maior que o primeiro.

{let a = parseInt(prompt("Insira o 1º valor: "));
let b = parseInt(prompt("Insira o 2º valor: "));

if (a > b) {
  
  console.log("1º valor é maior.");
  
} else if (a < b) {
  
  console.log("2º valor é maior.");
  
} else {
  
  console.log("Os números são iguais.")

}}

console.log("_______________ / Respostas A, B, C / _______________ / 6")

{let x = (prompt("Insira X: "));
let y = (prompt("Insira Y: "));

z = (x * y) + 5

if (z <= 0) {
  
  console.log(z , " <- Z / Resposta A");

} else if (z <= 100) {
  
  console.log(z , " <- Z / Resposta B");

} else {

  console.log(z , " <- Z / Resposta C")

}}
/*

 X | Y | Z | Resposta
 3 | 2 | 11|    B
150| 3 |455|    C
 7 | -1| -2|    A
-2 | 5 | -5|    A
50 | 3 |155|    C

*/

console.log("_______________ / Saldo e Créditos / _______________ / 7")

// Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. O Algoritmo deve calcular e escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'.

{let nConta = parseInt(prompt("Insira o Número da conta: "));
let nSaldo = parseInt(prompt("Insira o Saldo da conta: "));
let nDebito = parseInt(prompt("Insira o Débito da conta: "));
let nCredito = parseInt(prompt("Insira o Crédito da conta: "));

let saldoAtual = ((nSaldo - nDebito) + nCredito);

if (saldoAtual >= 0) {

  console.log(saldoAtual + " / Saldo Positivo!");

} else {
  
  console.log(saldoAtual + " / Salvo Negativo!")

}}

console.log("_______________ / Produtos e Descontos / _______________ / 8")

//Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o preço unitário.
//Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total a pagar (total a pagar = total - desconto), sabendo-se que:
// - Se quantidade <= 5 o desconto será de 2%
// - Se quantidade > 5 e quantidade <=10 o desconto será de 3%
// - Se quantidade > 10 o desconto será de 5%

{let pro = (prompt("Nome do Produto: "));
let qnt = parseInt(prompt("Quantidade: "));
let val = parseInt(prompt("Valor de cada Item: "));
let valT = (qnt * val); // Valor TOTAL

if (qnt <= 5) {

  let valF = (valT - (valT * 2) / 100);
  console.log("Valor Total: " + valT);
  console.log("Valor Final: " + valF + " / Desconto de 2%!");
  
} else if ((qnt > 5) && (qnt <= 10)) {

  let valF = (valT - (valT * 3) / 100);
  console.log("Valor Total: " + valT);
  console.log("Valor Final: " + valF + " / Desconto de 3%!");
  
} else {

  let valF = (valT - (valT * 5) / 100);
  console.log("Valor Total: " + valT);
  console.log("Valor Final: " + valF + " / Desconto de 5%!");
  
}}

console.log("_______________ / Aposentadoria / _______________ / 9")

// Uma empresa quer verificar se um empregado está qualificado para a aposentadoria ou não. Para estar em condições, um dos seguintes requisitos deve ser satisfeito:
// - Ter no mínimo 65 anos de idade.
// - Ter trabalhado no mínimo 30 anos.
// - Ter no mínimo 60 anos e ter trabalhado no mínimo 25 anos.
// Com base nas informações acima, faça um algoritmo que leia: o número do empregado (código), o ano de seu nascimento e o ano de seu ingresso na empresa. O programa deverá escrever a idade e o tempo de trabalho do empregado e a mensagem 'Requerer aposentadoria' ou 'Não requerer'.

{let nome = (prompt("Nome: "))
let nIda = parseInt(prompt("Idade: "))
let nTra = parseInt(prompt("Anos de Trabalho: "))

if (nIda >= 60 & nTra >= 25) {

  console.log("Parabéns " + nome + ", você pode se aposentar! Com base nos seus dados, você nasceu em " + (2026 - nIda) + ". Com incríveis " + nTra + " anos de trabalho!")

} else if (nIda < 65) {
  
  console.log("Você não cumpre o requisito de idade mínima")
  
} else if (nTra < 30) {
  
  console.log("Você não cumpre o requisito de anos de trabalho mínimo.")

} else {

  console.log("Você não cumpre nenhum requisito para se aposentar.")
  
}}

console.log("_______________ / H>Novo + M>Velha / _______________ / 11")

//11 (já que a 10 e a 5 são a mesma coisa)
//Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idades dos homens serão sempre diferentes entre si, bem como as das mulheres).
//Calcule e escreva a soma das idades do homem mais velho com a mulher mais nova, e o produto das idades do homem mais novo com a mulher mais velha.

{let h1 = parseInt(prompt("Idade do 1º homem: "));
let h2 = parseInt(prompt("Idade do 2º homem: "));
let m1 = parseInt(prompt("Idade da 1ª mulher: "));
let m2 = parseInt(prompt("Idade da 2ª mulher: "));

// VALORES USADOS
//  v          v
if (h1 < h2 && m1 > m2) {
  console.log("Homem mais novo + Mulher mais velha = " + (h1 + m1));
  console.log("Soma das restantes = " + (h2 + m2));
  
} else if (h1 > h2 && m1 > m2) {
  
  console.log("Homem mais novo + Mulher mais velha = " + (h2 + m1));
  console.log("Soma das restantes = " + (h1 + m2));
  
} else if (h1 < h2 && m1 < m2) {
  
  console.log("Homem mais novo + Mulher mais velha = " + (h1 + m2));
  console.log("Soma das restantes = " + (h2 + m1));
  
} else if (h1 > h2 && m1 < m2) {
  
  console.log("Homem mais novo + Mulher mais velha = " + (h2 + m2));
  console.log("Soma das restantes = " + (h1 + m1));
  
} else

  console.log("Algum erro ocorreu! Verifique se as idades inseridas são diferentes.")}

console.log("_______________ / Morangos e Maças / _______________ / 12")

// Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente

// SET DE VARIAVEIS

let kgMor = parseInt(prompt("Kg de morangos: "));
let kgMac = parseInt(prompt("Kg de maças: "));
let kgTot = (kgMor + kgMac);
let valMor = 2.50
let valMac = 1.80
let totMor = (valMor * kgMor);
let totMac = (valMac * kgMac);
let valTot = (totMor + totMac);
let valAju = (valTot - ((valTot * 10) / 100));
let ajuste = ((valTot * 10) / 100);

// IF CHECANDO DE TEM MAIS DE 5KG DE MORANGOS

if (kgMor > 5) {
  
  valMor = 2.20
  totMor = (valMor * kgMor);
  
}

// IF CHECANDO DE TEM MAIS DE 5KG DE MAÇAS

if (kgMac > 5) {
  
  valMac = 1.50
  totMac = (valMac * kgMac);
  
}

// SOMA DOS VALORES

valTot = (totMor + totMac);
ajuste = ((valTot * 10) / 100);

// Condição para 

if (kgTot > 8 || valTot > 25) {
  valAju = (valTot - ((valTot * 10) / 100));
  console.log("Seu total é de: " + valAju + ". Você recebeu um desconto de " + ajuste + " reais.");
  
} else {

  console.log("Seu total é de: " + valTot + ". Você não recebeu um desconto.")
  
}

console.log("_______________ / Sistema de Login / _______________ / 13")

//Faça um algoritmo para ler um número que é um código de usuário. Caso este código seja diferente de um código armazenado internamente no algoritmo (igual a 1234) deve ser apresentada a mensagem ‘Usuário inválido!
//Caso o Código seja correto, deve ser lido outro valor que é a senha. Se esta senha estiver incorreta (a certa é 9999) deve ser mostrada a mensagem ‘senha incorreta’. Caso a senha esteja correta, deve ser mostrada a mensagem ‘Acesso permitido’.

{const userCode = 1234
const userPass = 9999

// v Tentativa de Login. v

let tentCode = (prompt("Insira o código: "));

// v Condição caso o código estiver certo. v

if (tentCode == userCode) {
  
  let tentPass = (prompt("Insira a Senha: "));

  if (tentPass == userPass) {

  console.log("Acesso permitido.");
    
  } else { // v Caso a senha não estiver certa. v
    
    console.log("Senha incorreta.");
  }
  
} else { // v Caso o código não estiver certo. v

  console.log ("Usuário inválido!")
  
}}

console.log("_______________ / Média de Aproveitamento / _______________ / 14")

//Faça um algoritmo para ler as 3 notas obtidas por um aluno nas 3 verificações e a média dos exercícios que fazem parte da avaliação. Calcular a média de aproveitamento, usando a fórmula abaixo e escrever o conceito do aluno de acordo com a tabela de conceitos mais abaixo:

// Média de Aproveitamento(n1 + n2 * 2 + n3 * 3 + me) / 7


{let nota1 = parseInt(prompt("Primeira nota:"));
let nota2 = parseInt(prompt("Segunda nota:"));
let nota3 = parseInt(prompt("Terceira nota:"));
let media = (nota1 + nota2 + nota3) / 3
let mApro = (nota1 + nota2 * 2 + nota3 * 3 + media) / 7

if (mApro >= 9) {
  
  console.log(mApro + "Nota: A!");
  
} else if (mApro >= 7.5 && mApro < 9) {
  
  console.log(mApro + " | Nota: B");
  
} else if (mApro >= 6 && mApro < 7.5) {
  
  console.log(mApro + " | Nota: C");

} else {

  console.log(mApro + " | Nota: D")
  
}}

console.log("_______________ / Formar Triângulo / _______________ / 15")

{let a = parseInt(prompt("A = "));
let b = parseInt(prompt("B = "));
let c = parseInt(prompt("C = "));                        // ler a,b,c

if (a < (b + c) && (b < (a + c)) && (c < (a + b))) {    // se...
                                                        //
  if ((a == b) && (b == c)) {                           //   se...
                                                        //
    console.log("Triângulo Equilátero");                //     mens...
                                                        //
  } else {                                              //   senão 
                                                        //
    if ((a == b) || (b == c) || (a == c)) {             //     se
                                                        //
      console.log("Triângulo Isósceles");               //       mens...
                                                        //
    } else {                                            //   senão...
                                                        //
      console.log("Triângulo Escaleno");                //     mens...
    }                                                   //
                                                        //
  }                                                     //
                                                        //
} else {                                                // senão...
                                                        //
  console.log("Não é possível formar um triângulo")     //   mens...
  
}}

console.log("_______________ / Teste de Mesa / _______________ / 16")

// 1 2 3 | Não é possível formar um triângulo
// 3 4 5 | Triângulo Escaleno
// 2 2 4 | Não é possível formar um triângulo
// 4 4 4 | Triângulo Equilátero
// 5 3 3 | Triângulo Isósceles