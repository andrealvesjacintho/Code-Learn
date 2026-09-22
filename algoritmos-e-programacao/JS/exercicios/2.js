___________________________________ 1 ___________________________________ O

let n1 = parseInt(prompt("Nota 1: "));
let n2 = parseInt(prompt("Nota 2: "));
let nf = (n1 + n2) / 2;

if (nf >= 7) {
    console.log("aprovado");
}

___________________________________ 1-1 ___________________________________ O

let n1 = parseInt(prompt("Nota 1: "));
let n2 = parseInt(prompt("Nota 2: "));
let nf = (n1 + n2) / 2;

if (nf >= 7) {
    console.log("aprovado");
} else {
    console.log("reprovado");
}

___________________________________ 1-2 ___________________________________ X

let n1 = parseInt(prompt("Nota 1: "));
let n2 = parseInt(prompt("Nota 2: "));
let nf = (n1 + n2) / 2;

if (nf >= 7) {
    console.log("aprovado");
} else {
    n2 = parseInt(prompt("substituição: "));
    nf = (n1 + n2) / 2;
if (nf >=7) {
    console.log("aprovado");
} else {
    console.log("reprovado");}
}

___________________________________ 2 ___________________________________ O


let x = parseInt(prompt("Digite um número: "))

    if (x == 1){
        console.log("A")}

        else if (x == 2){
        console.log("B")}
    
            else if (x == 3){
                console.log("B")}

                else if (x == 4){
                    console.log("C")}

                    else if (x == 5){
                        console.log("D")}

                        else
                            console.log("E")

___________________________________ 3 ___________________________________ O

let n1 = parseInt(prompt("1ª Nota: "));
let n2 = parseInt(prompt("2ª Nota: "));
let NF = (n1 + n2) / 2;

if

    (NF == 10){
    console.log("Nota:" + NF);
    console.log("Aprovado. Parabéns!!!");
    }

else if

    (NF >= 7 && NF <= 9){
    console.log("Nota:" + NF);
    console.log("Aprovado. Podia ter sido melhor!");
    }

else if

    (NF >= 5 && NF <= 6){
    console.log("Nota:" + NF);
    console.log("Reprovado. Foi por pouco!");
    }

else if

    (NF >= 0 && NF <= 4){
    console.log("Nota:" + NF);
    console.log("Reprovado. A culpa foi do professor!");
    }

else

    console.log("Ocorreu um erro.")

    /*
    
    Traução: Se a Nota Final for exatamente 10, parabenizar!
    Se não, se a NF for entre 7 e 9, dizer que poderia ser melhor!
    Se não, se a NF for entre 5 e 6 (5 ou 6), dizer que foi reprovado, e que foi por pouco!
    Se não, se a NF for entre 0 e 4, dizer que foi reprovado, e dizer que a culpa foi do professor!

    */