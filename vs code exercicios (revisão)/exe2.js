function triangulo(lado1, lado2, lado3){
    if(lado1 == lado2 && lado2 == lado3){
        return `Triangulo Equilátero`
    }
    else if(lado1 == lado2 || lado2 == 3 || lado1 == lado3){
        return `Triangulo Isóceles`
    }
    else{
        return `Triangulo Escaleno`
    }
}
console.log(triangulo(3,3,3))
console.log(triangulo(2,3,3))
console.log(triangulo(3,2,1))