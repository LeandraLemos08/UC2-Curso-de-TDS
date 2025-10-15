let condicao1 = true
if (condicao1){
    // Como o valor da condição é true,
    // o código desse bloco é executado.
console.log("Entrei no if 1") }

let condicao2 = false
if (condicao1){
     // Como o valor da condição é false,
     // o código desse bloco não será executado.
console.log("Entrei no if 2") }

let condicao3=true

let number1=Number(prompt("Me diga um numero?"))
let number2=Number(prompt("Outro?"))
if(number1!==number2){
    console.log('Os numeros são diferentes')
}
else{
    console.log("Os numeros são iguais")
}

if (condicao1){
    console.log("Entrou no if 1")
} else if(condicao2){
    console.log("Entrou no else if 1")
} else if(condicao3){
    console.log("Entrou no else if 2")
} else console.log("Entrou no else")
