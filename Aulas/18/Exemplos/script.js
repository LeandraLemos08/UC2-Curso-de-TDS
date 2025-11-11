const poeta = {
 nome: "Dante",
 sobrenome: "Alighieri",
 idade: 28,
   tarefas: ["Escreve poemas", "Reflete sobre questões da vida e do universo"],
     filosofar:function(){
        console.log("Vos que entrais, deixas toda a humanidade")
     }
}

// imprimindo

console.log(poeta.nome) // pode ser (poeta["nome"]) tambem.
console.log(poeta["sobrenome"])
console.log(poeta.idade)

// mudando | alterando

console.log(poeta.nome = Carlos)
console.log(poeta.sobrenome = Drumond)
console.log(poeta.idade = 99)

// Algo do mundo real

const notebook ={
    tela: 15,
    processador: "Ryzen",
    marca: "Lenovo",
    modelo: "K14",
      aparencia: ["É quadrado e preto", "Tem muitos botões"]
}

// é possivel colocar objetos dentro de objetos, arrays dentro de objetos e objetos dentro de arrays,
const professores =[
    {nome:"Lucas",modulo:2},
    {nome:"Dal",modulo:1},
    {nome:"Valtér",modulo:1}
]

console.log("O professor:",professores[0].nome,"deu o modulo",professores[0].modulo)