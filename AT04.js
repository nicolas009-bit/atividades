var num1 = 10
var num2 = 2
var operacao = "/"
var resultado = 0

if(operacao == "+"){
resultado = num1 + num2
}

else{
    if(operacao == "-"){
        resultado = num1 - num2
    }
    else {
        if(operacao == "/"){
            resultado = num1 / num2
        }
        else {
            if(operacao == "*"){
                resultado = num1 * num2
            }
            else{
                console.log("voce nao colocou uma forma de operação valida")
            }

        }
    }
}

console.log("o resultado da sua operação é " + resultado)