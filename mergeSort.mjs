/* let numeros = [8, 4, 3, 14, 26, 6, 12, 1]
function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    }
    let meio = Math.floor(arr.length / 2);

    let vetorEsq = arr.slice(0, meio);
    let vetorDir = arr.slice(meio);

    vetorEsq = mergeSort(vetorEsq);
    vetorDir = mergeSort(vetorDir);

    let posicaoEsq = 0;
    let posicaoDir = 0;
    let vetorRes = [];

    while(posicaoEsq < vetorEsq.length && posicaoDir < vetorDir.length){
        if(vetorEsq[posicaoEsq] < vetorDir[posicaoDir]){
            vetorRes.push(vetorEsq[posicaoEsq]);
            posicaoEsq++;
        }else{
            vetorRes.push(vetorDir[posicaoDir]);
            posicaoDir++;
        }
    }
    let sobra
    if(posicaoEsq < posicaoDir){
        sobra = vetorEsq.slice(posicaoEsq);
    }else{
        sobra = vetorDir.slice(posicaoDir);
    }
    return [vetorRes, sobra];
}

let numerosOrd = mergeSort(numeros);
console.log({numerosOrd}); */

function mergeSort(vetor){
    if(vetor.length < 2){
        return vetor;
    }
    let meio = Math.floor(vetor.length / 2);

    let vetEsq = vetor.slice(0, meio);
    let vetDir = vetor.slice(meio);

    vetEsq = mergeSort(vetEsq);
    vetDir = mergeSort(vetDir);

    let posEsq = 0;
    let posDir = 0;
    let vetRes = [];

    while(posEsq < vetEsq.length && posDir < vetDir.length){
        if(vetEsq[posEsq] < vetDir[posDir]){
            vetRes.push(vetEsq[posEsq]);
            posEsq++;
        }else{
            vetRes.push(vetDir[posDir]);
            posDir++;
        }
    }
    let sobra
    if(posEsq < posDir){
        sobra = vetEsq.slice(posEsq);
    }else{
        sobra = vetDir.slice(posDir);
    }
    return [...vetRes, ...sobra];
}

let nums = [ 77, 44, 22, 33, 99, 55, 88, 0, 66, 11 ];

let numsOrd = mergeSort(nums);
console.log({numsOrd});