//1

const oFilme ={
    nome: "Up: Altas Aventuras",
    direcao: "Pete Docter",
    ano: "4 de Setembro de 2009",
       elenco:["Ed Asner", "Bob Peterson", "Jordan Nagai", "Christopher Plummer"],
       jaAssistiu: "Sim",
   publico: "Infantil"
}

console.log(oFilme.nome)
console.log(oFilme["direcao"])
console.log(oFilme.ano)
console.log(oFilme["elenco"])
console.log(oFilme.jaAssistiu)
console.log(oFilme["publico"])

// 2
let coleguinha ={
    nome: "Julia",
    idade: 21,
    generoMusica: "Pop"
}

console.log("O nome da pessoa é",coleguinha.nome,"ela tem",coleguinha.idade,"anos e gosta muito de",coleguinha.generoMusica)

// 3
oFilme["elenco"][0]="Xuxa"

console.log(oFilme+personagens["Velho Frideriksen", "Narceja", "Russel", "Doug"])
console.log(oFilme["elenco"[0]]["personagens"[0]])
console.log(oFilme["elenco"[1]]["personagens"[1]])
console.log(oFilme["elenco"[2]]["personagens"[2]])
console.log(oFilme["elenco"[3]]["personagens"[3]])
console.log(oFilme)

// 4

let maisColeguinha={
    ...coleguinha,
      comidasPreferidas:["alface", "tomate", "açafrão", "azeitona", "paprika"],
     melhorAmigo:{
        nome: "Aluisio de Azevedo",
        idade: 44
    }}
 console.log ("O nome da pessoa é", coleguinha.nome, "e suas comidas preferidas são", maisColeguinha.comidasPreferidas[0],maisColeguinha.comidasPreferidas[1],maisColeguinha.comidasPreferidas[2], maisColeguinha.comidasPreferidas[3], maisColeguinha.comidasPreferidas[4], "e", maisColeguinha.comidasPreferidas[5],".", "Seu melhor amigo se chama", maisColeguinha.melhorAmigo.nome, "e tem",maisColeguinha.melhorAmigo.idade, "anos.")

// 5 - Faltei no dia em que essa aula foi continuada, quando estiver livre darei andamento ao que perdi.






