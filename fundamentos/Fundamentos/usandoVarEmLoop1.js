
for (var index = 0; index < 10; index++) {
    console.log(index)
}

//ele vai imprimir o index pq ele é do tipo var, para ele perder o valor deveria ser let
console.log('i = '+index)

for (let index = 0; index < 10; index++) {
    console.log(index)    
}

//agora ele ira perder o valor pois é let
console.log(index)