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
function list(){
    alunos.sort(function(a, b){
        if(a.nome < b.nome) return -1;
        if(a.nome > b.nome) return 1;
        return 0;
    });


    for(let i = vetor.length; i < alunos.length; i--){
        console.log(alunos[i].nome + " " + alunos[i].ra + " " + alunos[i].idade + " " + alunos[i].sexo + " " + alunos[i].media + " " + alunos[i].resultado);
    }

    menu();
}


//listar os alunos em ordem decrescente por RA
function listRa(){
    alunos.sort(function(a, b){
        if(a.ra < b.ra) return -1;
        if(a.ra > b.ra) return 1;
        return 0;
    });


    for(let i = 0; i < alunos.length; i++){
        console.log(alunos[i].nome + " " + alunos[i].ra + " " + alunos[i].idade + " " + alunos[i].sexo + " " + alunos[i].media + " " + alunos[i].resultado);
    }

    menu();
}

//listar os alunos em ordem crescente por nome, apenas dos aprovados
function listA(){
    alunos.sort(function(a, b){
        if(a.nome < b.nome) return -1;
        if(a.nome > b.nome) return 1;
        return 0;
    });

    for(let i = 0; i < alunos.length; i++){
        if(alunos[i].resultado === "Aprovado"){
            console.log(alunos[i].nome + " " + alunos[i].ra + " " + alunos[i].idade + " " + alunos[i].sexo + " " + alunos[i].media + " " + alunos[i].resultado);
        }
    }

    menu();
}

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
}
