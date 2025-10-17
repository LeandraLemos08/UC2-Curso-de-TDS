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
const inSemiC1 = 1320.00 * 5.65
const inSemiC2 = 880.00 * 5.65
const inSemiC3 = 550.00 * 5.65
const inSemiC4 = 220.00 * 5.65
const inDeciC1 = 660.00 * 5.65
const inDeciC2 = 440.00 * 5.65
const inDeciC3 = 330.00 * 5.65
const inDeciC4 = 170.00 * 5.65
const inFinalC1 = 1980.00 * 5.65
const inFinalC2 = 1320.00 * 5.65
const inFinalC3 = 880.00 * 5.65
const inFinalC4 = 330.00 * 5.65
const domesticoSemiC1 = 1320.00 
const domesticoSemiC2 = 880.00 
const domesticoSemiC3 = 550.00
const domesticoSemiC4 = 220.00 
const domesticoDeciC1 = 660.00
const domesticoDeciC2 = 440.00 
const domesticoDeciC3 = 330.00 
const domesticoDeciC4 = 170.00 
const domesticoFinalC1 = 1980.00 
const domesticoFinalC2 = 1320.00
const domesticoFinalC3 = 880.00 
const domesticoFinalC4 = 330.00 
switch (tipoDeJogo && etapaDoJogo) {
 case "inSemiC1":
    console.log(1320.00 * 5.65)
    break
 case "inSemiC2":
    console.log(880.00 * 5.65)

}
console.log("Olá", nomeCompleto, "você selecionou um jogo de", tipoDeJogo,
"na etapa", etapaDoJogo, "sendo assim, o valor do seu ingresso será de", domesticoDeciC1)
