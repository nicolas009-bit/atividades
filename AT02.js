// Escreva um programa que leia o salário de um funcionário e aplique um aumento de acordo com a seguinte
//  regra: salários menores que R$1000 recebem 20% de aumento, entre R$1000 e R$2000 recebem 15%, e acima de
//  R$2000 recebem 10%.

var salario = 2500


var salarioAumentado = 0

if (salario > 1000){
    
    if(salario < 2001){
        salarioAumentado = (salario * 0.15) + salario
    }
    
    else {
        salarioAumentado = (salario * 0.10) + salario
    }
    
    
}
else {
    salarioAumentado = (salario * 0.20) + salario
    

}





console.log(salarioAumentado)

