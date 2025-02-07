function suma(numero1, numero2) {
    let suma = numero1 + numero2
    return suma
}

function resta(numero1, numero2){
    return numero1-numero2
}

var numero1 = parseInt(prompt("Ingrese el numero 1: "))
var numero2 = parseInt(prompt("Ingrese el numero 2: "))

alert("La suma es: "+suma(numero1, numero2))
alert("La resta es: "+resta(numero1, numero2))


