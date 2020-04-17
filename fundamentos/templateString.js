//Eu posso usar a concatenação igual na linguagem Java
const nome = 'Diogo'
const concatenacao = 'Olá '+nome
console.log(concatenacao)

//E posso usar essa forma de template String
const template = `
Olá
${nome}!`

//se deve usar o caractere ` para fazer sua template

console.log(template)

const up = texto => texto.toUpperCase(); //criação de uma função simples para demonstrar que é possivel usar no templete String

console.log(`Ei... ${up('cuidado')}!`)

console.log(`1+1 = ${1+1}`) //é possivel resolver operações matemáticas
