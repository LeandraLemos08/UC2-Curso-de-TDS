// 1
function Welcome252N(){
    console.log("Bem vinda! Turma 25-2N!")
}
Welcome252N();

// 2
function numerosDois(){
 resultado = 2 + 3
 console.log("A soma é:", resultado)}
 numerosDois();

// 3

function oDobro (){
 let dobrinho = 20 * 2
  console.log("O dobro será", dobrinho)
} 
 oDobro();

// Parametros

// 1
function nomesDiferentes (nome){
    console.log(`Olá ${nome}`)
}
nomesDiferentes("Letitia");
nomesDiferentes("Sebastan");
nomesDiferentes("Mieczyslaw");

// 2
function Queridinhos (num1,num2){
    soma = num1 + num2
    console.log(`A soma é ${soma}`)
}
Queridinhos(567,89);
Queridinhos(333,942)


// Exercicios com return;
// 1
function TwoNumbers (numb1,numb2){
  const soma = numb1 + numb2
  return soma
}
 const foiSomado = TwoNumbers(6,9)
 console.log(foiSomado)

// 2

const arrayDeNumeros = [8,16,29,32,45,56,78,90]
function divisão (array){
 let novaArray = []
 novaArray.push(array[0] / 2)
 novaArray.push(array[array.length - 1] / 2)
 return novaArray
}

console.log(divisão(arrayDeNumeros));

// Fixação

