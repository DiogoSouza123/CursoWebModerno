function Carro(velocidadeMax = 200, delta = 5){
    //atribulo privado
    let velocidadeAtual = 0

    //metodo publico, graças ao this
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMax){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMax
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }

    this.setVelocidadeAtual = (novaVelocidade) => {
        velocidadeAtual = novaVelocidade
    }
}

const uno = new Carro

uno.acelerar()
uno.acelerar()
uno.acelerar()

console.log(uno.getVelocidadeAtual())

uno.setVelocidadeAtual(200)

console.log(uno.getVelocidadeAtual())


const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())