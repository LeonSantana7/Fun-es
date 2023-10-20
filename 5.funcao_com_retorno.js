// verficar se uma pessoa é maior de idade

function verificarMaioridade(idade) {
    if(idade >= 18){
        console.log("É maior de idade");
        return true;
    }else{
        console.log("É menor de idade");
        return false;
    }
}

const valorRetornadoPelaFuncao = verificarMaioridade(18);

console.log(valorRetornadoPelaFuncao);