const readline = require('readline');
const alunos = [];
const estudante = {
    nome: "",
    ra: "",
    idade: "",
    sexo: "",
    media: "",
    resultado: ""
  };
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function menu(){
    rl.question('Entre com uma das opções abaixo\n\n 1 - Cadastrar alunos\n 2 - Relatorio de alunos por ordem crescente por nome\n 3 - Relatorio de alunos por ordem decrescente por RA\n 4 - Relatorio de alunos por ordem crescente por nome, apenas dos aprovados\n 5 - Encerre a execução do programa\n\n Opção: ', (answer) => {
        switch(answer){
        case '1':
            add();
            break;
        case '2':
            list();
            break;
        case '3':
            listRa();
            break;
        case '4':
            listA();
            break;
        case '5':
            console.log("Programa encerrado")
            quit();
            break;
        default:
            console.log('Erro! Escolha somente as opções a abaixo');
            menu();
        }
    });
}

menu()

function quit(){
    rl.close();
}


//listar os alunos em ordem crescente por nome
let comparacoes, trocas
function list(){
    for(let posSel=0; posSel<vetor.length -1;posSel++){
        let posMenor = posSel +1
        for(let i = posMenor +1; i < vetor.length; i++){
            if(vetor[posMenor] > vetor[i]){
                posMenor = i
            }
        }
        if(vetor[posSel] > vetor[posMenor]){
            [ vetor[posSel], vetor[posMenor]]
        }
    }
    list(estudante.nome)
    console.log(estudante.nome)


//listar os alunos em ordem decrescente por RA
function listRa(){
    for(let posSel=0; posSel<vetor.length -1;posSel++){
        let posMenor = posSel +1
        for(let i = posMenor +1; i < vetor.length; i++){
            if(vetor[posMenor] > vetor[i]){
                posMenor = i
            }
        }
        if(vetor[posSel] > vetor[posMenor]){
            [ vetor[posSel], vetor[posMenor]]
        }
    }
} 
    listRa(estudante.ra)
    console.log(estudante.ra)


    menu();



//listar os alunos em ordem crescente por nome, apenas dos aprovados
function listA(){
    for(let posSel=0; posSel<vetor.length -1;posSel++){
        let posMenor = posSel +1
        for(let i = posMenor +1; i < vetor.length; i++){
            if(vetor[posMenor] > vetor[i]){
                posMenor = i
            }
        }
        if(vetor[posSel] > vetor[posMenor]){
            [ vetor[posSel], vetor[posMenor]]
        }
    }

    for(let i = 0; i < alunos.length; i++){
        if(alunos[i].resultado === "Aprovado"){
               listA(estudante.nome)
               console.log(estudante.nome)
        }
    }
}
    menu();


//adicionar alunos
function add(){
    rl.question('Entre com o nome do aluno: ', (answer) => {
        estudante.nome = answer;
        rl.question('Entre com o RA do aluno: ', (answer) => {
            estudante.ra = answer;
            rl.question('Entre com a nota do aluno: ', (answer) => {
                estudante.media = answer;
                rl.question('Entre com o sexo do aluno: ', (answer) => {
                    estudante.sexo = answer;
                    rl.question('Entre com a idade do aluno: ', (answer) => {
                        estudante.idade = answer;
                        rl.question('Entre com o resultado do aluno: ', (answer) => {
                            estudante.resultado = answer;
                            alunos.push(estudante);
                        
                            menu();


                        });
                    });
                });
            });
        });
    });
}}
