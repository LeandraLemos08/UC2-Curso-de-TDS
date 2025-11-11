// 1 - Contador Simples:
for(let i=1;i<=10;i++){console.log(i)}

// 2 - Contador de Pares:
for(let i=2;i<=20;i+=2){console.log(i)}

// 3 - Tabuada:
const numeros =Number(prompt("usuario, selecione um número"))
for(let i=1;i<=10;i++){console.log(`${numeros} X ${i} = ${numeros*i}`)} 

// 4 - Soma de Números:
let soma = 0
let numeritos
for(let i=0;i<=4;i++){numeritos =Number(prompt("Insira 5 números"))
soma+=numeritos} console.log(soma)

// 5 - Média de Notas:
let Notas
let somaNotas = 0
for (let i=0;i<=4;i++){Notas = Number(prompt("Professor, insira a nota de 5 alunos"))
somaNotas = Notas / 5} console.log("A media das notas é", somaNotas)