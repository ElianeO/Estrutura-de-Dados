function avaliaPontuacoes(stPontuacoes){
    let pontuacoes = stPontuacoes.split(" ")
    let qtQuebraDeRecordes = 0
    let PiorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]
    
    for(let i = 1; i < pontuacoes.lenght; i++){
        let pontuacao = parseInt(pontuacoes[i])
        if(pontuacao > maiorPontuacao){
            maiorPontuacao = pontuacao
            qtQuebraDeRecordes++
        } else if (pontuacao < menorPontuacao){
            menorPontuacao = pontuacao
            PiorJogo = i + 1
        }
    }
    return [qtQuebraDeRecordes, PiorJogo]
}
    console.log(avaliaPontuacoes(" 10 20 20 8 25 3 0 35"))
    console.log(avaliaPontuacoes(" 10 20 4 8 9 22 12 43 22"))
