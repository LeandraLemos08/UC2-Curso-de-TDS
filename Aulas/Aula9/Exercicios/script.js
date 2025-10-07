// Exercícios de Fixação - 2
let primeiroNumero = prompt("Digite um numero")
let segundoNumero = prompt("Digite outro numero")

// O erro estápor ser do tipo string, é necessário transformar em Number.

primeiroNumero = Number(primeiroNumero)
segundoNumero = Number(segundoNumero)
const soma = primeiroNumero + segundoNumero
console.log(soma)


// EXERC. DE FIX. DE ESCRITA DE CÒDIGO>
// 1 -

let idadeUsuario =Number(prompt("Quantos anos voce tem?"))
let melhorAmigo =Number(prompt("Quantos anos tem seu melhor amigo(a)?"))
let menorOuMaior = idadeUsuario > melhorAmigo
console.log(menorOuMaior)
let diferenca = idadeUsuario - melhorAmigo
console.log(diferenca)

// 2 -

let numeroPar =Number(prompt("Querido usuario, insira um numero par"))
let restoDaDivisão = numeroPar % 2
console.log(restoDaDivisão)
// Desde numeros primarios como 2 e 4, ate 22 e 44, sempre acaba com resto em 0.
// Desde 7 a 9, o resto sempre é 1.

// 3 -

let idadeAnos =Number (prompt ("Querido usuario, pode me dizer sua idade?"))
let idadeMeses = 12
let idadeDias = 365
let idadeHoras = 24
let resultado1 = idadeMeses * idadeAnos
console.log("Sua idade em meses é",resultado1)
let resultado2 = idadeDias * idadeAnos
console.log("Sua idade em dias é",resultado2)
let resultado3 = idadeHoras * idadeAnos
console.log("Sua idade em horas é",resultado3)

// 4 -

let umNumero =Number(prompt ("Mais um numero, please?"))
let doisNumeros =Number(prompt ("Outro numero?"))
let resultado4 = umNumero > doisNumeros
console.log(resultado4)
let resultado5 = umNumero === doisNumeros
console.log(resultado5)
console.log((umNumero%doisNumeros)===0)
console.log((doisNumeros%umNumero)===0)









