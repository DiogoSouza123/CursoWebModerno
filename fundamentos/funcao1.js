function imprimirSoma(v1, v2){
    console.log(v1+v2)
}

imprimirSoma(3,5)

function soma(a, b = 0){ //é possivel estabelecer um valor padrão caso você não mande nada como parametro
    return a+b;
}

console.log(2+3)
console.log(2)