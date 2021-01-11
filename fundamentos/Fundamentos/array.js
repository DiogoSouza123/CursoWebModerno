const valores = [2.2, 3.3, 4.4, 7.7, 'maria']
console.log(valores[2])
console.log(valores[4])

//em js podemos criar um array e colocar tipos de valores diferentes, como number, String, boolean, etc

valores[5] = 10
valores[8] = 20
//podemos deixar espaços vazios no meio do vetor

console.log(valores)
console.log(valores.length) // == 9 tembém é contabilizado os espaços vazios

valores.pop() // como na pilha vc tira o ultimo valor do array

delete valores[0]

console.log(valores)

valores.push({id: 3}, false, null, 'Diogo') // push adiciona novos elementos no array

console.log(valores)

