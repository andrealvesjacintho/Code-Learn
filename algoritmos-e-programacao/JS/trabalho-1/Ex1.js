// Variável - Nome do Aluno.
let no = prompt("Nome: ")

// Variável - Nota do Aluno.
let n1 = Number(prompt("Nota: "))

// Checando se a nota é válida pra entrada do sistema.
if (n1 >= 0 && n1 <= 10) {

  // Checando se a nota é bate o requerimento para o usuário ter acesso.
  if (n1 > 6) {

    let turno = prompt("Escolha o turno (manhã, tarde ou noite): ") // Variável com instrução para o usuário preencher.

    // Abaixo, o 'if' está verificando se a variável "turno" está com um dos possíveis preenchimentos, perceba como estamos usando três símbolos de '='. Isso serve para comparar valores precisos, como o texto inserido pelo usuário.
    // Se bater com qualquer uma (||) das opções e for true, então padroniza o valor pra "manhã".
    if (turno === "manhã" || turno === "Manhã" || turno === "manha" || turno === "Manha") {
      turno = "manhã"

      // Mesma lógica, caso aqui o usuário inserir "Tarde" mesmo com a inicial maiúscula ou minúscula, o sistema padroniza para "Tarde".
    } else if (turno === "tarde" || turno === "Tarde") {
      turno = "tarde"

      // Novamente, o sistema lê se o usuário escreveu "noite" ou "Noite", e o padroniza para "noite".
    } else if (turno === "noite" || turno === "Noite") {
      turno = "noite"

      // Se o usuário escrever algo diferente ou que não se encaixe no sistema para ler, ele avisará o usuário para escrever novamente.
    } else {
      console.log("Turno inválido! Digite manhã, tarde ou noite.")
    }

    // O 'if' abaixo executa o 'switch' se a variável 'turno' foi padronizado com sucesso (manhã, tarde ou noite).
    // Se o usuário digitou algo inválido, 'turno' continua com o valor digitado pelo usuário e não bate com nenhuma opção aqui, bloqueando o 'switch' e parando na mensagem "Turno Inválido".
    if (turno === "manhã" || turno === "tarde" || turno === "noite") {
      
    // O 'switch' está servindo como um seletor de mensagem: ele compara o valor de disciplina com cada case e executa o bloco correspondente.

      let disciplina = prompt("Escolha uma disciplina (CC ou ADS): ") // Variável com instrução para o usuário preencher.
      
      switch (disciplina) {

      // Caso o usuário colocar uma das possíveis palavras para "CC", o sistema irá aceitar e então prosseguir com a mensagem abaixo.
      case "CC":
      case "Cc":
      case "cC":
      case "cc":
        console.log("Olá " + no + ", retornaremos com mais informações sobre sua vaga de Ciência da Computação (CC) no turno da " + turno + " em breve.")
        break

      // Caso o usuário colocar uma das possíveis palavras para "ADS", o sistema irá aceitar e então prosseguir com a mensagem abaixo.
      case "ADS":
      case "Ads":
      case "ADs":
      case "AdS":
      case "adS":
      case "aDs":
      case "aDS":
      case "ads":
        console.log("Olá " + no + ", retornaremos com mais informações sobre sua vaga de Análise e Desenvolvimento de Sistemas (ADS) no turno da " + turno + " em breve.")
        break
        
      // O 'default' está aqui caso nenhum dos casos for válido.
      default:
        console.log("Disciplina inválida")

      } // Fechamento do bloco do 'switch'.
 
    } // Fechamento do bloco do 'if'.

    // Caso a nota for inferior a 6, ou seja, não tem a nota mínima, o usuário receberá um aviso sobre este requerimento.
  } else {
    
    console.log(no + ", sentimos muito, mas você não possui a nota mínima necessária para acessar nosso sistema de cadastro.")
  }

  // Caso a nota não é válida pro sistema, ele retorna uma mensagem avisando o usuário do erro cometido.
} else {
  
  console.log("Sua nota tem que ser um número, e não pode ser negativa ou maior que 10.")

}