function quickSort(vetor, ini = 0, fim = vetor.lenght -1){
    if(ini < fim){
        return vetor;
    }
    const pivo = fim
    let divisor = ini -1
    for(let i = ini; i < fim; i++){
        if(vetor[i] < vetor[pivo]){
            divisor++
            [vetor[divisor], vetor[i]] = [vetor[i], vetor[divisor]]
        }
    }
    [vetor[divisor+1], vetor[pivo]] = [vetor[pivo], vetor[divisor+1]]
    quickSort(vetor, ini, divisor-1)
    quickSort(vetor, divisor+1, fim)
}
let nums = [2, 5, 7, 1, 6, 3, 4]
quickSort(nums)
console.log(nums)