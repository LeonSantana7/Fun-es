// Faça uma função de apresentção que chama função que determina faixa etaria
// Olá! Meu nome é João, sou um JOVEM de 12 anos, 1.4m de altura e sou estudante
// A palavra jovem deve vir do retorno de uma função

function apresentar(idade) {
    if(idade < 18){
        return "Jovem";
    }else if(idade > 18 && idade < 60){
        return "Adulto(a)";
    }else{
        return "Idoso(a)";
    }
}

const faixaEtaria = apresentar(12);

console.log(`Olá! Meu nome é João, sou um ${faixaEtaria} de 12 anos, 1.4m de altura e sou estudante`);