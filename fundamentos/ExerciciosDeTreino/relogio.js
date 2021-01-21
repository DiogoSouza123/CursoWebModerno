//Relógio

function Relogio(){

    let hora = 0
    let minuto = 0
    let segundo = 0

    setInterval(function(){

        if(segundo < 59){
            segundo++
        }else{
            segundo = 0
            minuto++
        }

        if(minuto > 59){
            minuto = 0
            hora++
        }
        if(hora == 24){
            hora = 0
        }
        
        console.log(hora+" : "+minuto+" : "+segundo)
    }.bind(this), 1000)
}

new Relogio