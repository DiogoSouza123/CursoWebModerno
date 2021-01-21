//usando arrow function eu acesso o this sem precisar usar a função bind(this)

function Pessoa(){
    this.idade = 0

    setInterval(()=>{
        console.log(this.idade++)
    }, 1000)
}

new Pessoa