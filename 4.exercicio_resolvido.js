// Declarar uma variavel que armazena um objeto com nome, idade, profissão e altura
// Faça uma função que não retorna valores
// Deve imprimir:  "Olá! Meu nome é João, sou um jovem de 12 anos, 1.4m de altura e sou estudante"

const pessoa = {
    nome: "João",
    idade: 25,
    profissao: "estudante",
    altura: 1.4,
}

function apresentacao(pessoa) {
    if(pessoa.idade < 15){
        console.log(`Olá! Meu nome é ${pessoa.nome}, sou um(a) jovem de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}!`);
    }else if(pessoa.idade < 30){
        console.log(`Olá! Meu nome é ${pessoa.nome}, sou um(a) adulto de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}!`);
    }else{
        console.log(`Olá! Meu nome é ${pessoa.nome}, sou um(a) idoso de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}!`);
    }
}

apresentacao(pessoa);