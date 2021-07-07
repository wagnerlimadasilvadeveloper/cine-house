const catalogo = require("./catalogo");
// console.log(catalogo);

function adicionarFilme(titulo,duracao,atores,anoDoLancamento,emCartaz){
const novoFilme = {
    codigo:catalogo.length +1,
    titulo,
    duracao,
    atores,
    anoDoLancamento,
    emCartaz,
}
catalogo.push(novoFilme)
console.log("Filme Adicionado com sucesso!")
console.log(catalogo)

};

// executando a função adicionarFilme
//adicionarFilme('Nos embalos de sábado a noite',2,['a','b'],2021,true)
// executando a função adicionarFilme 

function  buscarFilme(codigo){
const filmeProcurado = catalogo[codigo-1]
if(!filmeProcurado){
console.log('Ops!:[ Não encontramos esse código!')
}
console.log(filmeProcurado)

};

// executando a função buscar filme 
//buscarFilme(1)
//executando a função buscar filme 

function  alterarStatusEmCartaz(codigo,novoStatus){
const filmeProcurado = catalogo[codigo-1]

if(!filmeProcurado){
console.log('Ops!:[ Não encontramos esse Filme!')
}
catalogo[codigo-1].emCartaz = novoStatus

console.log('Status alterado com sucesso ')

};

// executar a função alterarStatusEmCartaz
// alterarStatusEmCartaz(2,false)
// executar a função alterarStatusEmCartaz

const listarFilmeEmCartaz = ()=>{
    for(let i = 0;i<catalogo.length;i++){
    console.log(catalogo[i].emCartaz ? "Filme em Cartaz":"Não está em cartaz")    
    }
};

// executar a função alterarStatusEmCartaz
listarFilmeEmCartaz(6)
// executar a função alterarStatusEmCartaz

