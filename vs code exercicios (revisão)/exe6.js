function baskhara(ax2, bx, c){
    let delta = ((bx**2) - (4*ax2*c))

    let resultados = []

    if (delta < 0) {
       console.log("delta negativo")
       /* return "delta negativo" */
    }
    else{ /* usando return nao precisa do else */
         let X1 = (-(bx) + Math.sqrt(delta)) / 2*ax2
         let X2 = (-(bx) - Math.sqrt(delta)) / 2*ax2

        resultados = [X1, X2]

        console.log((resultados).toString().replace(","," e "))

        /* OUTRA FORMA DE MOSTRAR O RESULTADO USANDO O PUSH
        resultados.push(X1) 
        resultados.push(X2) */
        
    }
    
    }
     baskhara(1, 20, -525)
     baskhara(3,-5,12)

     /*USANDO O PUSH 

     console.log(baskhara(1, -10, 24)) */

     