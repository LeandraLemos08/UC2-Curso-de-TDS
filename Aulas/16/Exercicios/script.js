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
/*
function minhaFuncao(variavel){
  return variavel * 5
}
console.log(minhaFuncao(2)) // Vai ser impresso 10.
console.log(minhaFuncao(10)) // Vai ser impresso 50.
// b
// Não apareceria nada, pois se trata de uma função com return, o console.log deveria estar lá dentro do escopo.
// 2

let textoDoUsuario = prompt("Insira um texto")

const outraFuncao = function(texto){
 return texto.toLowerCase().includes("cenoura")
}
const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

// a - essa função define que o texto do usuario tem letras minisculas e que inclui a palavra cenoura.
// b - i. true, ii. true, iii. true;

// Escrita de código
// 1
function eu (){
  console.log("Eu sou Leandra, tenho 18 anos, moro em São Leopoldo e sou estudante")
}
eu();

// 2
// a
function doisDeles (One,Two){
  const soma = One + Two
}
doisDeles(6,99);
// b
function numberNumber (Um,Dois){
  console.log(Um >=Dois)
}
numberNumber(7,77);
// c

function parisHilton (BOOL){
 console.log(BOOL % 2 === 0)
}
parisHilton(3);
// d

function miString (perguntinha){
  perguntinha = prompt("escreva algo")
 console.log(perguntinha.toUpperCase(),perguntinha.length)
} 
 miString("")  */
// 3

function Sominha(soma1, soma2) {
  return soma1 + soma2
}

function Diferinha(soma1,soma2) {
  return soma1 - soma2
}

function Multipliquinha(soma1, soma2) {
  return soma1 * soma2
}

function Divisinha (soma1,soma2) {
  return soma1 / soma2
}

console.log("Numeros inseridos:",soma1,soma2)
console.log("Soma:",Sominha(soma1,soma2))
console.log("Diferença:",Diferinha(soma1,soma2))
console.log("Multiplicação:",Multipliquinha(soma1,soma2))
console.log("Divisão:",Divisinha(soma1,soma2))

// Desafio
// 1
// a
const imprimindo = (valor) => {
  console.log(valor)
};

// b
const somandoEImprimindo = (a, b) => {
  const resultado = a + b 
  imprimindo(resultado)
};
somandoEImprimindo(5, 7);

// 2

function adicionarItem(inventario, item) {
  if (inventario.length >= 5) {
    console.log("O inventário está cheio! Não é possível adicionar mais itens.");
    return inventario;
  }
  inventario.push(item);
  console.log(`Item ${item} adicionado ao inventário.`);
  return inventario;
}

function removerItem(inventario, item) {
  const index = inventario.indexOf(item);
  if (index === -1) {
    console.log(`Item ${item} não foi encontrado no inventário.`);
    return inventario
  }
  inventario.splice(index, 1)
  console.log(`Item ${item} removido do inventário.`);
  return inventario
}

function listarItens(inventario) {
  if (inventario.length === 0) {
    console.log("O inventário está vazio.")
  } else {
    console.log("Itens no inventário:")}
   for (const item of inventario){
  }}


let inventario = []

adicionarItem(inventario, "Espada");
adicionarItem(inventario, "Escudo");
adicionarItem(inventario, "Poção de Cura");
adicionarItem(inventario, "Arco");
adicionarItem(inventario, "Flechas");

listarItens(inventario);
removerItem(inventario, "Poção de Cura");
