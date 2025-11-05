// DECLARAÇÃO DA FUNÇÃO
function imprimirOlamundo(){
    console.log("Olá mundo!")
}

// Invocação da função.
imprimirOlamundo();

// Com loop
for(let i=0;i<3;i++){
    imprimirOlamundo();
}

// Escopo - Escopo da função
const a = 1 // escopo global
function imprimeVariavel(){
    // escopo local
    const b = 2
    console.log("A variavel a:", a)
    console.log("A variavel b:", b)
}
// invoca função
imprimeVariavel();
console.log("A variavel a:", a)
console.log("A variavel b:", b) // a variavel não é definida no global, pois foi feita no local, por isso é undefined.

// Função de retorno - return
function calculaArea (altura,largura){
    const area = altura * largura
    return area
}
// Atribui retorno a uma variavel.
const areaCalculada = calculaArea(2,3)
// Imprime retorno no console.
console.log(areaCalculada)
// mas tambem pode ser feito assim;
console.log(calculaArea(2,3))





