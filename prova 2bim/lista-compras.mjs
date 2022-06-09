/*
    1. O Professor Alexandre saiu para fazer compras com uma lista em mãos.
    Abaixo segue a lista de compras:
    - Sabonete
    - Detergente   
    - Cebola
    - Leite
    - Sabão em pó
    - Arroz
    - Feijão
    - Macarrão
    - Creme dental

    2. Iremos organizar a lista de compras, onde os produtos alimentícios ficarão
    entre os primeiros itens, e os produtos de limpeza e higiene pessoal ficarão no
    final da lista.
    O primeiro passo é importar a classe apropriada e depois criar o nosso "objeto" lista.
*/
    import Queue from './lib/Queue.mjs'

    let fila = new Queue()

/*
    3. Faça com que a lista de compras do Professor Alexandre fique na seguinte sequência:
    
    // Produtos Alimentícios
    1º Arroz
    2º Feijão
    3º Macarrão
    4º Cebola
    5º Leite */

    fila.enqueue('Arroz',0)
    fila.enqueue('Feijao',1)
    fila.enqueue('Macarrao',2)
    fila.enqueue('Cebola',3)
    fila.enqueue('Leite',4)

    /* Produtos de limpeza/higiene pessoal
    6º Sabonete
    7º Detergente   
    8º Sabão em pó
    9º Creme dental
*/
    fila.enqueue('Sabonete',5)
    fila.enqueue('Detergente',6)
    fila.enqueue('Sabão em pó',7)
    fila.enqueue('Creme dental',8)




/*
    4. Imprima a lista na ordem correta.
    */
    console.log('LISTA DE COMPRAS\n', fila.print())

/*
    5. A esposa do Professor Alexandre ligou pedindo que ele adicionasse mais 2 (dois)
    produtos alimentícios e 3 (três) produtos de limpeza e higiene pessoal na sua lista. São eles:

    /* Produtos Alimentícios
    - Banana (ficará como o primeiro item da lista)
    - Maçã (ficará como o segundo item da lista) */
   
    fila.enqueue('Banana',0)
    fila.enqueue('Maca',1)
    console.log('\nLISTA DE COMPRAS\n', fila.print())
 

    /* Produtos de limpeza/higiene pessoal
    (adicione os itens nesta sequência)
    - Água sanitária
    - Condicionador de cabelo
    - Álcool
*/
    fila.enqueue('Agua sanitária',9)
    fila.enqueue('Condicionador de cabelo',10)
    fila.enqueue('alcool',13)



/*
    6. Imprima a lista na ordem correta depois de adicionar os novos produtos.
*/

console.log('\nLISTA DE COMPRAS\n', fila.print())




/*
    7. O Professor Alexandre observou que 2 (dois) produtos já tinham na sua casa e decidiu
    removê-los da sua lista. São eles:
    - Banana
    - Álcool
*/
    let removido = fila.dequeue(0, 'banana')
    let removido1 = fila.dequeue(12,'alcool')

   

/*
    8. Mostre apenas os itens removidos da lista.
*/

    console.log('\n',{removido},)
    console.log({removido1}, '\n')




/*
    9. Consulte quem é o primeiro e o último item da lista atual.
*/
    console.log('primeiro intem da lista: ',fila.peek())
    console.log('ultimo item da lista: ',fila.back())




/*
    10. Imprima a lista correta depois de todas as alterações que foram feitas.
*/
console.log('\nLISTA DE COMPRAS\n', fila.print())

