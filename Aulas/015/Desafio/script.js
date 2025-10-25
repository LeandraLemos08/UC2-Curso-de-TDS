// 1 -

let idaNoCine = prompt("Qual é o gênero do filme?")
let preçoNoCine = Number (prompt("Qual é o preço  do ingresso para este filme?"))
let lanchinhoSeu = prompt("Qual lanche você vai levar?")
idaNoCine = "Fantasia" 
let eMenor = preçoNoCine < 15
 if (idaNoCine && eMenor) {
 console.log("Bom filme, miga! Aproveite seu ", lanchinhoSeu)
} else if (!idaNoCine && !preçoNoCine) {
 console.log("Escolha outro filme :c")
}

// 2 -

let nomeCompleto = prompt ("Qual é o seu nome completo?")
let tipoDeJogo = prompt ("Que tipo de jogo procura?")
let etapaDoJogo = prompt ("Qual seria a etapa do jogo?") 
switch (tipoDeJogo && etapaDoJogo) {
 case "inSemiC1":
    console.log(1320.00 * 5.65)
    break
 case "inSemiC2":
    console.log(880.00 * 5.65)
    break
 case "inSemiC3":
     console.log(550.00 * 5.65)
     break
 case "inSemiC4":
     console.log(220.00 * 5.65)
     break
 case "inDeciC1":
     console.log(660.00 * 5.65)
     break
 case "inDeciC2":
     console.log(440.00 * 5.65)
     break
   case "inDeciC3": 
     console.log(330.00 * 5.65)
     break
 case "inDeciC4":
     console.log(170.00 * 5.65)
     break
 case "inFinalC1":
     console.log(1980.00 * 5.65)
     break
 case "inFinalC2": 
     console.log(1320.00 * 5.65)
     break
 case "inFinalC3": 
     console.log(880.00 * 5.65)
     break
 case "inFinalC4": 
     console.log(330.00 * 5.65)
     break
 case "domesticoSemiC1":
     console.log(1320.00) 
     break
 case "domesticoSemiC2": 
     console.log(880.00)
     break
 case "domesticoSemiC3":
     console.log(550.00)
     break
 case "domesticoSemiC4":
     console.log(220.00)
     break
 case "domesticoDeciC1":
     console.log(660.00)
     break
 case "domesticoDeciC2":
     console.log(440.00)
     break 
 case "domesticoDeciC3":
     console.log(330.00)
     break 
 case "domesticoDeciC4":
     console.log(170.00)
     break
 case "domesticoFinalC1":
     console.log(1980.00)
     break
 case "domesticoFinalC2":
     console.log(1320.00)
     break
 case "domesticoFinalC3":
     console.log(880.00) 
 case "domesticoFinalC4":
     console.log(330.00)
     break
 default: 
     console.log("O jogo não foi selecionado")
}

