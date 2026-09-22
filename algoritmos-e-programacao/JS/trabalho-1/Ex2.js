// Variável - Nome do Aluno.
let no = prompt("Insira o Nome do Aluno: ")

// Variável - Notas do Aluno.
// A 1ª nota é pedida primeiro e validada antes de pedir a próxima, evitando pedir todas de uma vez sem checar nada.
let n1 = Number(prompt("1ª Nota: "))

// Checando se a 1ª nota é válida (entre 0 e 10) antes de seguir pra próxima.
if (n1 >= 0 && n1 <= 10) {

    let n2 = Number(prompt("2ª Nota: "))

    // Checando se a 2ª nota é válida, só continua se a anterior também foi.
    if (n2 >= 0 && n2 <= 10) {

      let n3 = Number(prompt("3ª Nota: "))

      // Checando se a 3ª nota é válida, seguindo a mesma lógica das anteriores.
      if (n3 >= 0 && n3 <= 10) {

        let n4 = Number(prompt("4ª Nota: "))

        // Checando se a 4ª e última nota é válida.
        if (n4 >= 0 && n4 <= 10) {

          // Como todas as notas passaram na validação, calcula a média das 4.
          let me = (n1 + n2 + n3 + n4) / 4

          // 'if' que define a classificação da média, do maior valor pro menor.
          if (me >= 9 && me <= 10) {
            
            console.log("Parabéns! " + no + " está com Nota: " + me + ". A.")
            
          } else if (me >= 7) {
            
            console.log("Ótimo! " + no + " está com Nota: " + me + ". B.") // Bloco executado caso a nota não for entre 9 e 10, porém ser igual ou maior que 7.
            
          } else if (me >= 5) {
            
            console.log("Cuidado! " + no + " está com Nota: " + me + ". C.") // Bloco executado caso a nota não for igual ou maior que 7, mas ser igual ou maior que 5.
            
          } else {
            
            console.log("Sinto muito! " + no + " está com Nota: " + me + ". D.") // Bloco executado caso nenhuma das condições forem verdadeiras.
            
          }

        // Caso a 4ª nota seja inválida, avisa o erro e não calcula a média. Parando aqui.
        } else {
          
          console.log("Sua nota deve ser um número, e não pode ser negativa ou maior que 10.")
          
        }

      // Caso a 3ª nota seja inválida, avisa o erro e não pede a 4ª. Parando aqui.
      } else {
        
        console.log("Sua nota deve ser um número, e não pode ser negativa ou maior que 10.")
        
      }

    // Caso a 2ª nota seja inválida, avisa o erro e não pede a 3ª. Parando aqui.
    } else {
      
      console.log("Sua nota deve ser um número, e não pode ser negativa ou maior que 10.")
      
    }

// Caso a 1ª nota seja inválida, avisa o erro e não pede as demais. Parando aqui.
} else {
  
  console.log("Sua nota deve ser um número, e não pode ser negativa ou maior que 10.")
  
}