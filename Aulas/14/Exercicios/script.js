let number1=Number(prompt("Me diga um numero?"))
let number2=Number(prompt("Outro?"))
const resultado1=number1===number2
if(resultado1){
console.log("Sucesso! Os dois numeros são iguais.")}

num1 =Number(prompt("Digite o primeiro número"))
num2=Number(prompt("Digite o segundo número"))
if (num1 > num2){
console.log("O primeiro número é maior que o segundo número.")}
else if (num1 < num2){
console.log ("O primeiro número é menor que o segundo número.")}
else if (num1===num2){
console.log("O primeiro número é igual ao segundo número.")} 
else console.log("Não entrou no else")

let escolhaUmPokemon = prompt ("Usuário, escolha um pokemon")
switch (escolhaUmPokemon) { 
    case 'Bulbasaur': 
        console.log("Planta e Veneno")
        break
    case 'Charmander':
    console.log("Fogo")
       break
       case 'Squirtle':
    console.log("Água")
        break
      default:
    console.log("Pokemon não encontrado")}

let casasDeHogwarts= prompt ("Usuário, escolha uma aluna de Harry Potter")
switch (casasDeHogwarts) 
{ case "Fred Weasley": console.log("Grifinória")
break
 case "Terrence Boot":
  console.log("Corvinal")
  break
   case "Cedric Diggory":
  console.log("Lufa-Lufa")
break
 case "Blaise Zabini":
  console.log("Sonserina")
break 
default:
console.log("Aluno não encontrado")}

const ensinoMedio= prompt ("Você concluiu o ensino médio?")
const maiorDeIdade= prompt ("Você é maior de idade?")
const outraFaculdade = prompt ("Não está cursando outra faculdade?")
let condição1 = true
let condição2 = true
let condição3 = true
condição1 = ensinoMedio
condição2 = maiorDeIdade
condição3 = outraFaculdade 

if (condição1 && condição2 && condição3) {
console.log ("Pode entrar na faculdade")}