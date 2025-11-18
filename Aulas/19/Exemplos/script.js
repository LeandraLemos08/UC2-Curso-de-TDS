let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

// loop percorre a linha, matriz.lenght retorna 3
for(let i=0; i < matriz.length;i++){
    for(let j=0;j<matriz[i].length;j++){
        console.log(matriz[i][j])
    } 
}

let matrizinha = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let soma=0
for(let i=0; i < matrizinha.length;i++){
    for(let j=0;j<matrizinha[i].length;j++){
        soma+=matrizinha[i][j]
    } 
}
console.log("A soma dos valores da matriz é", soma)