// Desafio 1 -
/* Os valores das variaveis referentes a velocidade dos materiais para as picaretas são designados,
em seguida, pedimos ao usuario que escolha um minerio para poder escolher sua picareta que será melhor na velocidade, logo executamos os consoles de if,
no primeiro devolvemos a resposta para a comparação entre diamante e obsidiana caso o usuario tenha escolhido 
um deles, no segundo console uma resposta se ele tiver escolhido pedra e no terceiro se não tiver escolhido, 
sendo a madeira mais simples. */

const velocidadeMadeira = 35
const velocidadePedra = 65
const velocidadeFerro = 75
const velocidadeDiamante = 85
let blocoMinerar = prompt ("Escolha um material para sua picareta.")
if (blocoMinerar = "Diamante" || "Obsidiana") {
    console.log("Use Picareta de Diamante: Velocidade",velocidadeDiamante,"!");
} else if (blocoMinerar = "Pedra") {
    console.log("Picareta de Ferro ou Pedra é o ideal: Velocidade",velocidadePedra,"!");
} else {
    console.log("Qualquer ferramenta funciona, mas a de Madeira é a mais simples.");
}

// Desafio 2 -
/* Após terem sido declarados os valores das variaveis, criamos uma nova variavel
calculando o danoBruto multiplicando o danoEspada com a forçaEncantamento, em seguida,
em outra variavel calculamos o danoFinal sendo o danoBruto menos a armaduraInimiga, logo,
calculamos a vidaInimiga para saber se é menos ou igual ao danoFinal, então  a variavel
comparacaoFinal é igual a vidaInimiga menor ou igual a zero, sendo assim, executamos nos consoles, 
os diferentes casos, onde o inimigo é derrotado e outro onde o inimigo está vivo. */


let danoEspada = 6 
let forcaEncantamento = 1.5 
let armaduraInimiga = 2 
let vidaInimiga = 20
let danoBruto = danoEspada*forcaEncantamento
let danoFinal = danoBruto- armaduraInimiga
vidaInimiga-= danoFinal
let comparacaoFinal = vidaInimiga<= 0 
if (comparacaoFinal) {
    console.log("O creeper foi derrotado, voce sobreviveu á explosão")
} else {
    console.log("O Creeper ainda está vivo com",vidaInimiga, "de vida. Corra ")
}


// Desafio 3 -
/* A variavel mesa declara que as variaveis temGravetos e nivelMesaCrafting devem ser iguais
e que tem diamantes, ou seja, igual a true, e mais que oito de ferro. Se as condicões
são atendidas, o console assim é executado com a informação de que a picareta foi criada,
do contrario, ele é executado devolvendo a informação de que faltam recursos. */

const temDiamantes = true
 const nivelMesaCrafting = 2
const temGravetos = false
 let temFerro = 10
   let mesa 

if ((!temGravetos || nivelMesaCrafting <= 3) && (temDiamantes && temFerro >= 8)) {
    console.log("Picareta de Diamante criada! Hora de buscar Obsidiana!")
} else {
    console.log("Faltam recurso  ou as condições de crafting não são atendidas!")
}