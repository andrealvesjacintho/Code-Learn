// ___________________________________ EXEMPLO ___________________________________

let a=15;
let b=30;
let c=0;

console.log("Valor Pré Troca","// Var A: ",a,"// Var B: ",b);

c=a // 'C' PEGA O VALOR DE 'A' // 'A' FICA LIVRE
a=b // 'A' PEGA O VALOR DE 'B' // 'B' FICA LIVRE
b=c // 'B' PEGA O VALOR DE 'C'

console.log("Valor Pós Troca","// Var A: ",a,"// Var B: ",b)

// ___________________________________ 2-A ___________________________________ O

let a = 10;
let b = 20;
console.log("B:",b);

b = 5;

console.log("A:",a,"/ B:",b)

// ___________________________________ 2-B ___________________________________ O

let a = 30;
let b = 20;
let c = a+b;

console.log("C:",c);

b = 10;
console.log("B:",b,"/ C:",c);

c = a + b;
console.log("A:",a,"/ B:",b,"/ C:",c)

// ___________________________________ 2-C ___________________________________ O

let a = 10;
let b = 20;

c = a;
b = c;
a = b;

console.log("A:",a,"/ B:",b,"/ C:",c)

// ___________________________________ 2-D ___________________________________ O

let a = 10;

b = a + 1; // B = 11
a = b + 1; // A = 12
b = a + 1; // B = 13

console.log("A:",a);

a = b + 1; // A = 14

console.log("A:",a,"B: ",b)

// ___________________________________ 2-E ___________________________________ O

let a = 10;
let b = 5;
let c = a + b;

b = 20;
a = 10;

console.log("A:",a,"/ B:",b,"/ C:",c)

// C = 15 // PERMANECEU 15 POIS NÃO HOUVE ATUALIZAÇÃO DA MEMÓRIA
// ___________________________________ 2-F ___________________________________ O

let x = 1;
let y = 2;
let z = y - x;

console.log("Z:",z);

x = 5;
y = x + z;

console.log("/ X:",x,"/ Y:",y,"/ Z:",z)

// X = Tinha apenas 1 mas ficou com 5
// Y = Mudou seu valor e ficou com 6
// Z = Sempre ficou com 1 desde o início
// ___________________________________ 3 ___________________________________ O

let a = (4 / 2) + (2 / 4);
let a2 = 4 / 2 + 2 / 4;

console.log("A:",a,"/ A2:",a2);

let b = 4 / (2 + 2) / 4;
let b2 =  4 / 2 + 2 / 4;

console.log("B:",b,"/ B2:",b2);

let c = (4 + 2) * 2 - 4;
let c2 = 4 + 2 * 2 - 4;

console.log("C:",c,"/ C2:",c2)

// ___________________________________ 4 ___________________________________ O
// Pré retirada das parênteses

let a = 6 * (3 + 2)
let b = 2 +(6 * (3 + 2))
let c = 2 + (3 * 6) / (2 + 4)
let d = 2 * (8 / (3 + 1))
let e = 3 + (16 - 2) / (2 * (9 - 2))
let f = (6 / 3) + (8 / 2)
let g = ((3+(8/2))*4)+(3*2)
let h = (6*(3*3)+6)-10
let i = (((10*8)+3)*9)
let j = ((-12)*(-4))+(3*(-4))

// Pós retirada das parênteses

let a2 = 6 * 5;
let b2 = 2 + 6 * 5;
let c2 = 2 + 18 / 6;
let d2 = 2 * 8 / 4;
let e2 = 3 + 14 / 14;
let f2 = 6 / 3 + 4;
let g2 = 28 + 3 * 2;
let h2 = 6 * 9 + 6 - 10;
let i2 = 84 * 9;
let j2 = 48 - 12;

// Comparação
console.log("// Comparação entre os resultados");
console.log(a," | ",a2);
console.log(b," | ",b2);
console.log(c," | ",c2);
console.log(d," | ",d2);
console.log(e," | ",e2);
console.log(f," | ",f2);
console.log(g," | ",g2);
console.log(h," | ",h2);
console.log(i," | ",i2);
console.log(j," | ",j2)

// ___________________________________ 5 ___________________________________ O

let b = parseInt(prompt("Insira o valor da Base: "));
let a = parseInt(prompt("Insira o valor da Altura: "));
let r = a * b;

console.log("Valor da Base:",b);
console.log("Valor da Altura:",a);

console.log("Área:",r)

// ___________________________________ 6 ___________________________________ O

let n1 = 21;
let n2 = 82;
let nf = (n1 + n2) / 2;

console.log("Nota Final:",nf)
// ___________________________________ 7 ___________________________________ O

let n1 = 21;
let n2 = 82;
let n3 = 54;
let n4 = 90;
let nf = (n1 + n2 + n3 + n4) / 4;

console.log("Nota Final:",nf)

// ___________________________________ 8 ___________________________________ O

let anos = parseInt(prompt("Digite a quantidade de anos: "));
let meses = parseInt(prompt("Digite a quantidade de meses: "));
let dias = parseInt(prompt("Digite a quantidade de dias: "));

let totaldias = (anos * 365) + (meses * 30) + dias;

console.log("Total de dias:",totaldias)

// ___________________________________ 9 ___________________________________ O

let brancos = parseInt(prompt("Digite a quantidade de votos brancos: "));
let nulos = parseInt(prompt("Digite a quantidade de votos nulos: "));
let validos = parseInt(prompt("Digite a quantidade de votos válidos: "));
let total = brancos+nulos+validos;

let porBrancos = brancos / total * 100;
let porNulos = nulos / total * 100;
let porValidos = validos / total * 100;

// Sempre dividir o menor pelo maior!
console.log("Total de Votos:",total);
console.log("Votos Brancos:",porBrancos,"%");
console.log("Votos Nulos:",porNulos,"%");
console.log("Votos Válidos:",porValidos,"%")

// ___________________________________ 10 ___________________________________ O

let funcionario = (prompt("Nome do funcionário:"));
let salario = parseInt(prompt("Salário do funcionário:"));
let ajuste = parseInt(prompt("Ajuste (%) a ser feito:"));

let valorfinal = salario * (ajuste / 100);

console.log("O funcionário " , funcionario , " iria receber " , salario, " reais. Porém, dado o percentual de ajuste, seu salário final ficou em " , valorfinal , " reais.")

// ___________________________________ 11 ___________________________________ O

let custofabrica = parseInt(prompt("Custo de fábrica do carro: "));
let porcdistrib = (custofabrica * 28) / 100;
let porcimposto = (custofabrica * 45) / 100;

let custototal = (custofabrica + porcdistrib + porcimposto);

console.log("Custo de fábrica: ", custofabrica);
console.log("Valor total do carro: ", custototal)

// ___________________________________ 12 ___________________________________ O

/*
Escrever um algoritmo que leia o número de carros por ele vendidos, o
valor total de suas vendas, o salário fixo e o valor que ele recebe por
carro vendido. Calcule e escreva o salário final do vendedor.
*/

let salariofixo = parseInt(prompt("Valor do salário fixo:"));
let ncarrosvendidos = parseInt(prompt("Número de carros vendidos:"));
let carvalor = parseInt(prompt("Quanto os carros valem:"));
let carcom = parseInt(prompt("Comissão fixa de cada carro:"));

let comissaofixa = (ncarrosvendidos * carcom);
let carrosfinal = (carvalor * ncarrosvendidos);
let comissao = (carrosfinal * 5) / 100;

let salariofinal = (comissao + salariofixo + comissaofixa);

console.log("____________________"); // SEPARADOR

console.log("Salário fixo definido: " , salariofixo);
console.log("Valor da comissão de cada carro: " , carcom);
console.log("Número de carros vendidos: " , ncarrosvendidos);
console.log("Ganhos com os carros: " , carrosfinal);
console.log("Ganhos da comissão fixa:" , comissaofixa);
console.log("Ganhos da comissão (5%):" , comissao);
console.log("Salário final" , salariofinal)