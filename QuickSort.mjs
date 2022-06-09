function quickSort(vetor, ini = 0, fim = vetor.lenght -1){
    if(fim <= ini){
        return vetor;
    }
    const pivo = fim
    let divisor = ini -1
    for(let i = ini; i < fim; i++){
        if(vetor[i] < vetor[pivo]){
            divisor++
            if (divisor !== i){
            [vetor[i], vetor[divisor]] = [vetor[divisor], vetor[i]]
        }
    }
}
divisor++
if(vetor[divisor] > vetor[pivo] && divisor !== pivo){
    [vetor[divisor], vetor[pivo] == vetor[pivo], vetor[divisor]]
}
quickSort(vetor, ini, divisor -1)
quickSort(vetor, divisor + 1, fim)
}
let nums = [2, 5, 7, 1, 6, 3, 4]
quickSort(nums)
console.log(nums)