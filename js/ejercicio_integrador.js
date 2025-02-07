// Lista de nombres predefinida
let listaNombres = ["Luisina", "Gabriel", "Ibra", "Juan"]

var nombreIngresado = prompt("Introduzca un nombre a buscar: ")

function isNameInclude(listaNombres, nombreIngresado) {
    nombreIngresado = nombreIngresado.toLowerCase()
    var nombreCorregido = nombreIngresado.replace(nombreIngresado.charAt(0), nombreIngresado.charAt(0).toUpperCase())
    return listaNombres.includes(nombreCorregido)
}

if (isNameInclude(listaNombres,nombreIngresado)) {
    alert("El nombre esta incluido")
} else {
    alert("El nombre no esta incluido")
}
