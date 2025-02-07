var numero1 = prompt ("Ingrese el numero 1: ")
var numero2 = prompt ("Ingrese el numero 2: ")
var resta = numero1 - numero2

if(resta > 0 ){
    console.log ("es mayor a cero")
    if(resta%2 == 0){
        console.log("es par")
    }else{
        console.log("es impar")
    }
}else{
    console.log("Es menor o igual a cero")
}
