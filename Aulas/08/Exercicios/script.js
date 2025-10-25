const a = true
const b = false
const c = true

const resultado1 = a && b
console.log (resultado1)

const resultado2 = b && c
console.log (resultado2)

const resultado3 = a && c
console.log (resultado3)

const resultado4 = a && b && c
console.log (resultado4)

const resultado5 = a || b
console.log (resultado5)

const resultado6 = b || c
console.log (resultado6)

const resultado7 = a || c
console.log (resultado7)

const resultado8 = a || b || c
console.log (resultado8)

console.log (!a, !b)
console.log (!b, !c)
console.log (!a, !c)
console.log (!a, !b, !c)

let nome = prompt ("Qual é o seu nome?")
let anoDeNascimento = prompt ("Em que ano voce nasceu?")
let anoAtual = prompt ("Qual o ano atual?")
let idade = anoAtual - anoDeNascimento
console.log ("O seu nome é", nome, "e sua idade é", idade)
console.log ("Voce é maior de idade?", idade >= 18)
let anosEm2050 = 2050 - anoDeNascimento
console.log ("Em 2050 voce terá", anosEm2050)

// Exercicios de fixação - 1

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log ("a.", resultado)
// Vai imprimir a. false
resultado = bool1 && bool2 && bool3
console.log ("b.", resultado)
// Vai imprimir b. false
resultado = !resultado && (bool1 || bool2)
console.log ("c.", resultado)
// Vai imprimir c. true
console.log ("d.", typeof resultado)
// Vai imprimir d. Boolean
