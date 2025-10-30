// 1 - While

let i 
let soma = 0
while(i!==0){
   i = Number(prompt("Usuario, escolha uma sequencia de numeros"))
    soma+=i
} 

 console.log(`O resultado é: ${soma}`)

// 1 - For

let maiorNumero = 0
let meuArray = [11,15,18,14,12,13]
for (let i=0;i<6;i++){
if(meuArray[i]<maiorNumero){
    maiorNumero=maiorNumero[i]
}
    console.log("O maior numero é:", maiorNumero)
}

// 2 - For
let numerosPar = 0
let Arroz = [11,15,18,14,12,13]
for(let i=0;i<6;i++){
    if(Arroz[i]%2===0){
    numerosPar += Arroz[i]
    }}
    console.log("A soma dos números pares é:", numerosPar)

// 3 - for of
let vergonhaAlheias = ["Oi", "sumido","tudo", "bem?","Saudades"]
let maisVergonha = ""
for (let vergonhaAlheia of vergonhaAlheias){
    maisVergonha += vergonhaAlheia+" "
} console.log(maisVergonha)

// 4 - for of

let numerito = 0
let Arrozitos = [11, 15, 18, 14, 12, 13]
for (const Arrozito of Arrozitos){
    if (Arrozito%2===0) {
        numerito+=Arrozito
    }}    console.log("A soma dos números pares é:", numerito)

// 5 - for of



// Exercicios de fixação | Interpretação 1 -

let valor = 0 
for (let i=0;i<5;i++){
    valor += i 
} console.log(valor)

// O resultado será 10, pois o código esta somando o i e salvando ele em uma nova variavel para no final imprimir ela.
// Por exemplo, no loop, 0 + 1 = 1, 1 + 2 = 3, 3 + 3 = 6, 6 + 4 = 10.

// 2 -
// a - Vai ser impressso os numeros maiores que 18.
const lista = [10,11,12,15,18,19,21,23,25,27,30]
for(let numero of lista){
    if(numero>18){
        console.log(numero)
    }}

// b - Não, pois o for of não pega indices, para isso deve ser usado uma função.
const listinha = [10,11,12,15,18,19,21,23,25,27,30]
console.log(listinha.index.Of(23))

// 3 - O resultado seria a quantidade de linhas cada uma com a sua respectiva quantidade de asteriscos, na linha 1, um asterisco, linha 2, dois asteriscos.
// Linha 1 = *, linha 2 = **, basicamente aumenta asterisco a cada linha conforme sua posição.
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas?"))
let quantidadeAtual = 0 
while (quantidadeAtual < quantidadeTotal){
   let = ""
   for (let asteriscos = 0 ; asteriscos < qunatidadeAtual + 1 ; asteriscos++){
   linha +="*"}
   console.log(linha)
   quantidadeAtual++ }

// 1 -
// a.
const pets= Number(prompt("Quantidade pets?"))
// b.
if(pets === 0){console.log("Que pena! Você pode adotar um pet!")}
  else {let nomesPets = []}
    for (let i=0; i<pets;i++){
    nomesPets.push(prompt("Digite o nome do pet"))}
// c.
console.log(nomesPets)
// 2 -
// a.
const arrayOriginal = [10, 20, 30, 40, 50]
let maior = arrayOriginal[0]
let menor = arrayOriginal[0]
const arrayPares = []
console.log("Os valores do arroz original")
for (let numero of arrayOriginal){
    console.log(numero)
}
// b.
console.log("Os valores do arroz original divididos por 10 abaixo")
for (let numero of arrayOriginal){
    console.log(numero / 10)}
// c.
for (let numero of arrayOriginal){
    if (numero % 2 === 0){
        arrayPares.push(numero)
    }}console.log(arrayPares)
// d.
console.log("Novo arroz mas com strings")
const arrayStrings = []
for (let i = 0; i < arrayOriginal.length; i++) {
    arrayStrings.push("O elemento do índex" +i+ "é" +arrayOriginal[i])}
  console.log(arrayStrings)
// e.
let maiorNum = arrayOriginal[0]
let menorNum = arrayOriginal[0]
for (let numero of arrayOriginal){
    if(numero>maiorNum){maior = numero}
    if (numero<menorNum){menor = numero}
    console.log("O menor numero é:",menorNum, "O maior numero é:", maiorNum)
}

// Desafio 1 -
let numeroSecreto = Number(prompt("Ei primeiro jogador, digite o número secreto?"))
console.log("Agora sim! Bora jogar!")
let tentativas = 0
let chute
do {chute = Number(prompt("Agora é com você segundo jogador, chute um número!"))
    tentativas++
    console.log(`O número chutado foi: ${chute}`)
    if (chute === numeroSecreto){
        console.log("Acertou miseravi!!")
        console.log(`O número de tentativas foi: ${tentativas}`)} 
        else if (chute<numeroSecreto){console.log("Errrrrrrrou, é maior!")} 
        else{console.log("Errrrrrrrou, é menor!")}} while (chute !== numeroSecreto)

// Desafio 2 -

let numeroSecreto1 = Math.floor(Math.random() * 100) + 1;
console.log("Vamos jogar!");
do {chute = Number(prompt("Chute um número entre 1 e 100:"))
    tentativas++
    console.log(`O número chutado foi: ${chute}`)
    if (chute === numeroSecreto1){
        console.log("Acertou!!")
        console.log(`O número de tentativas foi: ${tentativas}`)} 
        else if (chute<numeroSecreto1){
        console.log("Errrrrrrrou, é maior!")} 
        else {console.log("Errrrrrrrou, é menor!")}
} while (chute !== numeroSecreto1) 

/*  Quando resolver o exercício, pare e faça a seguinte reflexão: foi fácil fazer esta
alteração?
Sim.
    O que você poderia ter feito para que fosse mais fácil? 
Provavelmente usado alguma função que teria me auxialiado.
  Deixe comentários no seu código sobre esta reflexão.
  Foi fácil, mas tornou mais fácil retirar o segundo jogador. Que se torna o proprio note apos isso. */

// Desafio 3 -
let vida = 5
let recursos = 0
let rodadasExploradas = 0
console.log("O jogo foi iniciado! O valor de sua vida é 5 e você tem 0 recursos")
while (recursos < 10 && vida > 0) {
    rodadasExploradas++ 
    let chance = Math.random() 
    if (chance < 0.5){
        recursos++
        console.log(`Rodada ${rodadasExploradas}: Encontrou um recurso! Recursos totais: ${recursos}`)
    }else if(chance < 0.75){
        console.log(`Rodada ${rodadasExploradas}: Encontrou um perigo! Vida permanece: ${vida}`)
    }else{vida--
        console.log(`Rodada ${rodadasExploradas}: Encontrou  um  Gamemaker ! vida reduzida para ${vida}`)
        if (vida <= 0 ){console.log("Os gamemakers acabaram com o jogo!")}}}
         console.log("GameOver pra você!")
         console.log(`Recursos  coletados ${recursos}`)
         console.log(`Rodadas exploradas${rodadasExploradas}`)
         if (vida <= 0 ){console.log("voce morreu!")} else{console.log(" voce sobreviveu !")}


