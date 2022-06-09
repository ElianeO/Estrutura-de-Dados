/*
    1. O Professor Alexandre estava com febre e decidiu ir ao plantão médico.
    Quando ele chegou, havia 7 (sete) pessoas na sua frente:
    João, Maria, Pedro, Joaquim, José, Isabela e Rafael.
    
    2. Para que as pessoas sejam atendidas de forma correta e por ordem de chegada, como uma fila,
    o primeiro passo é importar a classe apropriada e depois criar o nosso "objeto" atendimento.
*/


    import Deque from './lib/Deque.mjs'

    let atendimento = new Deque()

/*
    3. Faça com que a fila esteja na sequência a seguir para que o atendimento do plantão possa começar:
    
    1. João
    2. Maria
    3. Pedro
    4. Joaquim
    5. José
    6. Isabela
    7. Rafael
    8. Alexandre
    
*/

atendimento.insertFront('João')
atendimento.insertFront('Maria')
atendimento.insertFront('Pedro')
atendimento.insertFront('Joaquim')
atendimento.insertFront('José')
atendimento.insertFront('Isabela')
atendimento.insertFront('Rafael')
atendimento.insertFront('Alexandre')



/*
    4. Imprima a fila na ordem correta.
*/

console.log(atendimento.print())


/*
    5. O médico pediu ao atendente que chamasse a pessoa que estava na frente da fila.
    Logo ela foi removido da fila.
*/

let removido = atendimento.removeFront()




/*
    6. Mostre a pessoa que foi atendida e logo em seguida Imprima como ficou a fila depois do atendimento.
*/

console.log({removido})
console.log(atendimento.print())



/*
    7. Equanto todos aguardavam o atendimento, chegaram mais 2 (duas) pessoas na seguinte sequência:
    - Otávio
    - Luís
    Adicione eles na ordem da fila
*/

atendimento.insertBack('Otávio')
atendimento.insertBack('Luís')



/*
    8. Imprima a fila na ordem correta depois das alterações.
*/

console.log(atendimento.print())



/*
    9. O médico pediu ao atendente qual o nome da próxima pessoa a ser atendida:
    Mostre qual o nome da próxima pessoa que será atendida.
*/
let proximo = atendimento.peekFront()
console.log({proximo})





/*
    10. O médico pediu ao atendente que chamasse essa pessoa que estava na frente da fila.
    Logo ela foi removido da fila.
*/

removido = atendimento.removeFront()
console.log({removido})



/*
    11. Imprima a fila na ordem correta depois de todas as alterações.
*/
console.log(atendimento.print())