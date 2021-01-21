const notasas = [7.7, 6.5, 9.0, 8.7, 4.3, 5.0]

//Sem callback

let notasBaixas = []
for(let i in notasas){
    if(notasas[i]<7){
    notasBaixas.push(notasas[i])
    }
}

console.log(notasBaixas)

//com callback
notasBaixas = notasas.filter(function (nota){
    return nota <= 7
})

console.log(notasBaixas)