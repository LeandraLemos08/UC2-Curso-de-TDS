/*
1 -
a) o teste que ele realiza é se uma pessoa foi aprovada ou não em um teste que calcula o número escolhido do usuário pelo do sistema.
b) Pra números cujo resto sempre será zero, ou seja, qualquer número par por dois.
c) Para números impares */

/* 
2 -
a) Este código serve para encontrar o preço de uma fruta escolhida pelo usuário.
b) A mensagem impressa será "O preço  da fruta Maçã é R$ 2.25"
c) Seria "O preço da fruta Pêra é R$ 5" devido ao fato de que o uso de "break" faz distinção entre os itens,
por isso, o console não para ali e continua para o próximo caso, que vem a ser o Default,
que executa seu preço e substitui o valor anterior, assim o console.log é executado.
*/

/*
3 -
a) A primeira linha cria uma variável Number que em um prompt pede ao usuário que escolha um número 
b) Se fosse dez, a mensagem no terminal seria a de que o número passou no teste, afinal dez é maior que zero,
porém se fosse dez negativo, ele seria menor que zero, logicamente não passando no teste.
c) Como observei acima, parece que haveria sim um erro no console, visto que, usando os conceitos de bloco ou escopo,
o usuário insere o número, em seguida é pedido ao console que calcule se esse número é maior que zero, logo
se o numero for maior o console será executado, uma variavel nova é criado dentro do if após isso, 
porém deveria ter sido fora por ter sido executada fora do escopo.
*/

// 4 -

const idadeMinima = 18
let podeDirigir =Number (prompt("Usuário, quantos anos você tem?"))
if (podeDirigir >= idadeMinima) { 
 console.log("Você pode dirigir")
} else if (podeDirigir < idadeMinima) {
 console.log("Você não pode dirigir")}

 // 5 -

 let turnoEstudante1 = prompt("Usuário, me diga em que turno você estuda?") 
if (turnoEstudante1 = "M") {
   console.log("Bom dia!")
} else if (turnoEstudante1 = "V") {
  console.log("Boa tarde!")
} else if (turnoEstudante1 = "N") {
  console.log("Boa noite!")
} else {
  console.log ("Horário não encontrado.") 
}

// 6 - 

let turnoEstudante = prompt ("Usuário, me diga em que turno você estuda?")
switch (turnoEstudante) {
 case 'M': 
   console.log("Bom dia!")
 break
 case 'V':
  console.log("Boa tarde!")
 break
 case 'N':
  console.log("Boa noite!")
  break
   default: 
 console.log ("Horário não encontrado.")
}

// 7 -

let idaNoCine = prompt("Qual é o gênero do filme?")
let preçoNoCine = Number (prompt("Qual é o preço  do ingresso para este filme?"))
idaNoCine = "Fantasia" 
let eMenor = preçoNoCine < 15
 if (idaNoCine && eMenor) {
 console.log("Bom filme, miga!")
} else if (!idaNoCine && !preçoNoCine) {
 console.log("Escolha outro filme :c")
}


