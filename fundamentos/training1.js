//Sistema de frases motivacionais

console.log("Bem vindo seu merda, aqui vai uma frase pra melhorar seu dia")

let numero = Math.floor((Math.random()* 8))
console.log(`Numero =  ${numero}`)

switch (numero){
    case 1:
        console.log("Pra que se esforçar se a derrota é certa?")
        break
    case 2:
        console.log("Desista enquanto há tempo")
        break
    case 3:
        console.log("Comece quando não houver mais tempo")
        break
    case 4:
        console.log("A luta de hoje é o cançasso de amanhã")
        break
    case 5:
        console.log("Estudar hoje é o futuro de amanhã")
        break
    case 6:
        console.log("Sem dor sem ganho irmão, vá a luta")
        break
    case 7:
        console.log("Para de culpar os outros pelo seus erros")
        break
    case 8:
        console.log("A vida não é um mar de rosas, mas tem sorvete")
        break
    default:
        console.log("Não tenha nada para te dizer")
}

//for in, não é muito usado

const notas = [2, 4, 6, 8]

for(i in notas){
    console.log(notas[i])
}