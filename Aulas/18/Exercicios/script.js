// 1
/*
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

// Arrow e expressão
// 2
const numerosDois2 =function(){
resultado2 = 2 + 3
console.log("A soma é:", resultado2)}
numerosDois2();

// 3

const oDobro2 = ()=>{
let dobrinho2 = 20 * 2
console.log("O dobro será", dobrinho2)
} 
oDobro2();

// O Monstro!!!!!!!

function determineOMonstro (temPeleQuente, temSedeDeSangue, temProblemasAoLuar){
  if (!temPeleQuente && temSedeDeSangue && !temProblemasAoLuar) {
    return "Vampiro";
  } else if (!temPeleQuente && !temSedeDeSangue && temProblemasAoLuar) {
    return "Lobisomem";
  } else if (temPeleQuente && !temSedeDeSangue && !temProblemasAoLuar) {
    return "Humano";
  } else {
    return "Criatura Desconhecida ou Híbrida";
  }
}
console.log(`A Criatura 1 é: ${determineOMonstro(false, true, false)}`); 
console.log(`A Criatura 2 é: ${determineOMonstro(false, false, true)}`);
console.log(`A Criatura 3 é: ${determineOMonstro(true, false, false)}`); 
console.log(`A Criatura 4 é: ${determineOMonstro(false, false, false)}`); */

// Fixação - interpretação de código.
// 1 
// a
function minhaFuncao(variavel){
  return variavel * 5
}
console.log(minhaFuncao(2)) // Vai ser impresso 10.
console.log(minhaFuncao(10)) // Vai ser impresso 50.
// b
// Não apareceria nada, pois se trata de uma função com return.
// 2

let textoDoUsuario = prompt("Insira um texto")

const outraFuncao = function(texto){
 return texto.toLowerCase().includes("cenoura")
}
const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

// a - essa função define que o texto do usuario tem letras minisculas e que inclui a palavra cenoura.
// b - i. true, ii. false, iii. true;

// Escrita de código
// 1
function eu (){
  console.log("Eu sou Leandra, tenho 18 anos, moro em São Leopoldo e sou estudante")
}
eu();

// 2
function DoisDeles (One,Two){
  
}



