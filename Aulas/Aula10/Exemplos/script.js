const nome = " Leandra Lemos "
let idade = 18
const frase = "O meu nome é " +nome+ " e minha idade é " +idade
console.log(frase)

// No Template, ou seja, é o tipa da String com crase

const frase2 = `O meu nome é ${nome} e minha idade é ${idade}`
console.log(frase2)
console.log(typeof frase2)

// Com aspas simples

const frase3 = 'O meu nome é ' +nome+ ' e minha idade é ' +idade
console.log(frase3)
console.log(typeof frase3)

// Calcula os caracteres
console.log(nome.length)

// Metodo to.LowerCase() - MAisculas ficam minusculas
const fraseInicial= "OláAaAaA"
const fraseMinuscula = fraseInicial.toLowerCase()
console.log(fraseInicial,fraseMinuscula)

// Metodo to.UpperCase() - Faz o contrario
const fraseUpper = fraseInicial.toUpperCase()
console.log(fraseInicial,fraseMinuscula)

// Retira os espaços antes e depois da string
console.log(nome.trim())

/* Metodo includes determina se um conjunto de caracteres
pode ser encontrado dentro de outra string*/

const fraseBunny = "Hoje, o coelho come cenoura"
console.log(fraseBunny.includes("cenoura")) // true
console.log(fraseBunny.includes("batata")) // false

// Troca uma palavra por outra palavra
const novaFrase = fraseBunny.replaceAll("cenoura","batata")
console.log(novaFrase)

// Arrays

const listaDeCompras = ["Abacate", "Banana", "Tomate"]
console.log(listaDeCompras[3])
