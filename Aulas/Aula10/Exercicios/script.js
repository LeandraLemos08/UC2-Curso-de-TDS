// EXER. 1 -

const yourName = prompt ("Por favor, caro leitor, poderia me dizer seu nome?")
const yourColor = prompt ("E sua cor favorita?")
const nameAndColor = 'O seu nome é ' +yourName+ ' e sua cor favorita é ' +yourColor
console.log(nameAndColor)
console.log(typeof nameAndColor)

// EXER. 2 -
const nameAndColor2 = `O seu nome é ${yourName} e sua cor favorita é ${yourColor}`
console.log(nameAndColor2)
console.log(typeof nameAndColor2)

const nameAndColor3 = "O seu nome é " +yourName+ " e sua cor favorita é " +yourColor
console.log(nameAndColor3)
console.log(typeof nameAndColor3)

// EXER. Aleatorio
const escrevaAFrase = prompt ("Usuario, escreva uma frase")
console.log(escrevaAFrase.toUpperCase())
console.log(escrevaAFrase.replaceAll("o","i"))
console.log(escrevaAFrase.length)


