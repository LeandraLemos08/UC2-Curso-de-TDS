let i = 0 // começo do laço, por padrão a variavel i sempre é de loop.
while(i<=109){ // enquanto a condição, que é i, for verdade sendo menor que igual a 100
    console.log("Loop:", i) // executa o console.log
    i++ // incrementa o iterador, adiciona os valores, de um em um.
} // se o while estiver falso ele simplismente não executa.

console.log("Você chegou ao final do loop")

let estomago = 0 // começo, é o iterador
while(estomago<100){ // < pede que seja menor que 100, se adicionado = ao <, como em <=, seria menor e igual, não precisando ser menor que 100.
    console.log("Quero comer mais chocolateeeee!", estomago)
    estomago = estomago + 10 // diferente de i++, conta apartir do valor i + 10, oque significa, de dez em dez.
}

/* Definição de variavel */

let c = 1
do{
    console.log("O valor de c é:",c)
    c++
}while(c<=6) // o do while executa a acão/teste antes...

for (let i=0;i<=9;i++){ // começo/iterador,teste/ação,incrementador.
    console.log("O valor de i é:",i)
}

let arrayZinha = [10,4,7,8,200,77,98]
for (let i=0;i<=6;i++){
    console.log(arrayZinha[i])
}
let maiorNumero = 0
let meuArray = [11,15,18,14,12,13]
for (let i=0;i<6;i++){
if(meuArray[i]<maiorNumero){
    maiorNumero=maiorNumero[i]
}
    console.log("O maior numero é:", maiorNumero)
}