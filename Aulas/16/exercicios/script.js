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

// O resultado será 10.

// 2 -

const lista = [10,11,12,15,18,19,21,23,25,27,30]
for(let numero of lista){
    if(numero>18){
        console.log(numero)
    }}





