/*
    1. Veja, na imagem "torres-hanoi.png", como funciona o jogo das Torres de Hanoi.

    2. Cada uma das torres do jogo se comporta como uma pilha. Importe a classe
        apropriada e crie três pilhas, representando as três torres.
*/

    import Stack from './lib/Stack.mjs'

    let torreA = new Stack()
    let torreB = new Stack()
    let torreC = new Stack()



/*
    3. Use os valores 1, 2 e 3 para representar os discos. Empilhe-os na primeira
        torre.
*/
    torreA.push(3)
    torreA.push(2)
    torreA.push(1)

    console.log('\ntorre A', torreA.print())
    console.log('torre B', torreB.print())
    console.log('torre c',torreC.print())





/*
    4. Desempilhe um dos discos da primeira torre e empilhe-o na terceira.
*/
    torreC.push(torreA.pop(1))

    console.log('\ntorre A', torreA.print())
    console.log('torre B', torreB.print())
    console.log('torre c',torreC.print())



/*
    5. Desempilhe o disco remanescente da primeira torre e coloque-o na segunda.
*/
    torreB.push(torreA.pop(2))
    console.log('\ntorre A', torreA.print())
    console.log('torre B', torreB.print())
    console.log('torre c',torreC.print())



/*
    6. Desempilhe o disco da terceira torre e coloque-o sobre o disco da segunda torre.
*/
    torreB.push(torreC.pop(1))

    console.log('\ntorre A', torreA.print())
    console.log('torre B', torreB.print())
    console.log('torre c',torreC.print())


/*
    7. Desempilhe o disco da primeira torre e coloque-o na terceira torre.
*/
    torreC.push(torreA.pop(3))

    console.log('\ntorre A', torreA.print())
    console.log('torre B', torreB.print())
    console.log('torre c',torreC.print())


/*
    8. Desempilhe um dos discos da segunda torre e coloque-o na primeira torre.
*/
    torreA.push(torreB.pop(1))

    console.log('\ntorre A', torreA.print())
    console.log('torre B', torreB.print())
    console.log('torre c',torreC.print())


/*
    9. Desempilhe o disco da segunda torre e coloque-o sobre o disco da terceira torre.
*/
    torreC.push(torreB.pop(2))


    console.log('\ntorre A', torreA.print())
    console.log('torre B', torreB.print())
    console.log('torre c',torreC.print())


/*
    10.Finalmente, desempilhe o disco da primeira torre e coloque-o na terceira torre.
*/
    torreC.push(torreA.pop(1))

/*
    11.Use o método print() para exibir as três pilhas. As duas primeiras devem estar
        vazias e a terceira deve conter os três discos, na ordem (3 na base, 1 no topo).      
*/   
    console.log('\ntorre A', torreA.print())
    console.log('torre B', torreB.print())
    console.log('torre c',torreC.print())
