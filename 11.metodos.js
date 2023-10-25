// Função dentro de um objeto
const pessoa1 = {
    nome : "José",
    idade: 30,
    profissao: "professor",
    //Palavra reservada: "This", sempre diz respeito ao objeto que está chamando
    apresentar : function (){
        const faixaEtaria = this.determinarFaixaEtaria(this.idade);

        console.log(`Sou ${this.nome}, sou um(a) ${faixaEtaria} de ${this.idade} anos 
        e sou ${this.profissao}`);    
    } ,
    determinarFaixaEtaria : function (){
        if(this.idade <= 21){
            return "Jovem";
        }else if(this.idade < 66){
            return "Adulto(a)";
        }else{
            return "Idoso(a)";
        }
    }
}

pessoa1.apresentar();
console.log(pessoa1.determinarFaixaEtaria());