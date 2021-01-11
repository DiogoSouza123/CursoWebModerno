{
    {
        {
            var teste = "ola"
            console.log(teste)
        }
    }
}
var teste = "hello"
console.log(teste)

//o tipo VAR quando declarado globalmente ( sem ser em uma funcao), pode ser acessado de qualquer parte do código, é recomendado evitar seu uso. Caso ele seja declarado dentro de uma funcao ele vai morrer dentro dela, conforme exemplo abaixo

function funcaoTeste(){
    var teste = "oie"
    return teste
}

console.log(funcaoTeste())
console.log(teste)