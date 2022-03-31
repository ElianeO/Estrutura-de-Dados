function buscaSequencial(vetor, valorBusca){
    for(let i=0;i < vetor.length; i++){
        if(vetor[i] === valorBusca) return i //encontrou valorBusca
    }
    return -1 // valorBusca mão existe
}
const nomes = require('./data/vetor-nomes')
console.log('Posição de JULIO', buscaSequencial(nomes, 'JULIO'))