var temperatura = 40
var tipoTemperatura = "A"
var temperaturaConvertida

if(tipoTemperatura == "C"){
    temperaturaConvertida = ((temperatura * 1.8) + 32)
    
}

else {
    if(tipoTemperatura == "F"){
        temperaturaConvertida = ((temperatura - 32) / 1.8)
        
    }
    else{
        console.log("voce nao selecionou uma temperatura valida")
        temperaturaConvertida = "invalida"
    }
}
    

console.log("o valor convertido é:" + temperaturaConvertida)