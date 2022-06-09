function formatar(valorDecimal){
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}
 formatar(4.523 + 4.61)