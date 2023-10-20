// Melhorando o codigo de apresentação
function apresentacao(pessoa) {
    if(pessoa.idade < 25){
        console.log(`Meu nome é ${pessoa.nome}, sou um(a) jovem de ${pessoa.idade} anos e sou ${pessoa.profissao}!`);
    }else if(pessoa.idade < 65) {
        console.log(`Meu nome é ${pessoa.nome}, sou um(a) adulto ${pessoa.idade} anos e sou ${pessoa.profissao}!`);
    } else {
        console.log(`Meu nome é ${pessoa.nome}, sou um idoso de ${pessoa.idade} anos e sou ${pessoa.profissao}!`);
    }
}

const pessoa1 = {
    nome : "José",
    idade: 30,
    profissao: "professor",
}

apresentacao(pessoa1);

const pessoa2 = {
    nome : "Pedro",
    idade: 65,
    profissao: "médico",
}

apresentacao(pessoa2);

const pessoa3 = {
    nome : "Ana",
    idade: 19,
    profissao: "estudante",
}

apresentacao(pessoa3);
