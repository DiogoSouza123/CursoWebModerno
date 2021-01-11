const pessoa = { 
    nome: "Diogo",
    endereco: "Rua top",
    idade: 22
}

const { nome, idade} = pessoa
console.log(nome, idade)

//para mudar nome das variaveis
const { nome: n, idade:i} = pessoa
console.log(n + i)

//é possivel associar valores padrão caso não tenha dado
const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome+ " " + bemHumorada)

