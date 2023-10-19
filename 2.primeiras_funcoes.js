// criar uma função que imprimi "Olá" na tela

function imprimirOla() {
    console.log("Olá!");
}

imprimirOla();

let variaveis = {
    a : 10,
    b: 5,
}

console.log(calculo(variaveis));

// função executa em qualquer ordem
function calculo(variaveis) { 
    return variaveis.a + variaveis.b;
}