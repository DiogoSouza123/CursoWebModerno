//criar funcao de forma literal

//a funcao pode ou nao retornar um valor, caso n retorne nada ela retorna undefined
//ou seja, sempre ela vai retornar algo 
function fun1(){}

//armazenar funcao em uma variavel
const fun2 = function(){}

//armazenar em um array
const array = [function(a,b){return a+b}, fun1, fun2]
console.log(array[0](2,3))

//armazenar em um atributo de objeto
const obj = {}
obj.falar = function(frase) {
    console.log(frase)
}

obj.falar("Oooooola mundo")

//passar funcao como parametro
function run(fun) {
    fun()    
}
run(function() {
    console.log("oi")
})

//Uma funcao pode retornar/conter funcao
function soma(a,b) {
    return function (c) {
        console.log(a+b+c)
    }
    
}

soma(2,3)(4)
