// 2 -

const frase = prompt ("Digite uma frase")
console.log(frase.toLocaleUpperCase().replace("A","I"),frase.length)

/* Subi num morro em marrocos | SUBI NUM ONIBUS EM MIRROCOS -
26 caracteres, será oque estará impresso no console. */

// 3 -

const nameDoUsuario= prompt ("Qual é o seu nome usuario?")
const email = prompt ("Usuario, qual é o seu email?")
console.log(`O email do usuario ` +email+ `foi cadastrado com sucesso. Seja bem vindo(a) ` +nameDoUsuario)

// 4 -

const comidaPreferida = ["Carne","Bolo","Sorvete","Chocolate","Lasanha","Batata"]
console.log(comidaPreferida)
console.log(`Essas são minhas comidas preferidas`)
console.log(comidaPreferida[0])
console.log(comidaPreferida[1])
console.log(comidaPreferida[2])
console.log(comidaPreferida[3])
console.log(comidaPreferida[4])
console.log(comidaPreferida[5])
const comidaUsuario = prompt (`Usuario, sua comida preferida?`)
console.log(comidaPreferida[1]=comidaUsuario)
console.log(comidaPreferida)

// 5 -

let listaDeTarefas = []
const tarefaUsuario1 = prompt ("Usuario, me diga uma tarefa do seu cotidiano?")
let novaTarefa1 = tarefaUsuario1
const tarefaUsuario2 = prompt ("Outra tarefa?")
const novaTarefa2 = tarefaUsuario2
const tarefaUsuario3 = prompt ("Mais uma?")
const novaTarefa3 = tarefaUsuario3
console.log(listaDeTarefas[0]=novaTarefa1, listaDeTarefas[1]=novaTarefa2, listaDeTarefas[2]=novaTarefa3)
console.log(listaDeTarefas)
const indice = prompt ("Qual o indice da tarefa voce ja realizou?")
console.log(listaDeTarefas.splice(indice, 1))
console.log(listaDeTarefas)

// Desafio -

const aFrase = prompt ("Uma frase?")
const palavras = aFrase.split(" ")
const asFrutas = ["Banana","Morango","Abacaxi","Laranja","Ameixa"]
const indiceDoAbacaxi = asFrutas.indexOf("Abacaxi")
const tamanhoArray = asFrutas.length
console.log("Indice do Abacaxi", indiceDoAbacaxi)
console.log("Tamanho da Array", tamanhoArray)



