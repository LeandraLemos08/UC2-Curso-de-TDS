// 1
let numberOne = 3
let numberTwo = 4
let resultOne = numberOne + numberTwo
console.log (resultOne)

// 2
let numberThree = 5
let numberFive = 2
let resultThree = numberOne * numberThree / numberFive
console.log (resultThree)

// 3
let numberFour = -1
let resultTwo = numberTwo - numberThree * numberFour
console.log (resultTwo)

// 4
let numberSix = 234
const restoDivison = numberSix % numberThree
console.log (restoDivison) 

// 1/2 - Não é igual, é diferente.
const numberSeven = 8
const numberEight = 9
console.log ("O primeiro é igual ao segundo numero?", 8 === 9)
console.log ("O primeiro numero é diferente do segundo?", 8 !== 9)
// 3/4 - O primeiro numero não é maior, ele é menor que o segundo.
console.log ("O primeiro numero é maior que o segundo?", 8 > 9)
console.log ("O primeiro numero é menor que o segundo?", 8 < 9)

number = prompt ("Me de um numero?")
number2 = prompt ("Me de outro numero?")
console.log ("O primeiro é igual ao segundo numero?", number === number2)
console.log ("O primeiro numero é diferente do segundo?", number !== number2)
console.log ("O primeiro numero é maior que o segundo?", number > number2)
console.log ("O primeiro numero é menor que o segundo?", number < number2)

// One Piece
let ouroTotal = 75000
let membrosBando = 9
let recompensaBaseLuffy = 3000000000
let aumentoRecompensa = 150000000
let bonusExperiencia = 500
let forcaBando = 95
let ouroPorMembro = ouroTotal/membrosBando
console.log ("O valor total dividido por cada membro é de", ouroPorMembro)
let restoOuro = ouroTotal%membrosBando
console.log ("Apos a divisão sobrou de ouro para cada membro", restoOuro)
let novaRecompensa = recompensaBaseLuffy + 150000000
console.log ("A soma da recompensa apos o aumento foi de", novaRecompensa)
let poderLuffy = recompensaBaseLuffy * bonusExperiencia
console.log ("O poder temporário foi de", poderLuffy)
aumentoRecompensa -= 50000000
console.log ("A redução foi de", aumentoRecompensa)

let forcaInimigo = 120
let chanceVitoria = 0.7
let limiteSeguranca = 0.8
let temAkumaNoMi = true
let inimigoTemHaki = true
let combateJusto = "Sim"
let combateRapido = "Sim"
let podeVencer = forcaBando >= forcaInimigo
console.log (podeVencer)
let riscoAlto = chanceVitoria < limiteSeguranca
console.log (riscoAlto)
let batalhaFacil = combateJusto == combateRapido
console.log (batalhaFacil)

