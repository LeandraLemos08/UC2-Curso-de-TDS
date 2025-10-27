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


