// Faça um função que tem um parâmetro chamado idade e que determina a faixa etaria
// de uma pessoa a partir dessa idade
// Deve retornar uma string que informa se a pessoa é jovem, adulto ou idoso.

function determinarFaixaEtaria(idade) {
    if(idade <= 21){
        return "Jovem";
    }else if(idade > 22 && idade < 65){
        return "Adulto(a)";
    }else{
        return"Idoso(a)";
    }
}

const faixaEtaria = determinarFaixaEtaria(64);

console.log(faixaEtaria);