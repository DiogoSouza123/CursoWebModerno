//é possivel criar usando parenteses no parametro, e chavez na funcao
let x = (y) => {console.log(y)}
x("oi")

//caso o parametro seja unico e o bloco da funcao seja apenas umas linha pode eliminar o parenteses e as chaves
let z = a => console.log(a)
z("Olá")


// !! o this da arrow é constante, então tente sempre usar ela !!