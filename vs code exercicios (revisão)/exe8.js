function cardapio(codigo, qtde){
    switch (codigo){
        case 100:
            return qtde * 3.0;
        case 200:
            return qtde * 4.0;
        case 300:
            return qtde * 5.5;
        case 400:
            return qtde * 7.5;
        case 500:
            return qtde * 3.5;
        case 600:
            return qtde * 2.8;
        default:
            return "produto inexistente"
    }
} console.log(cardapio(400, 2))