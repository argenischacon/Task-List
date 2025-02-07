var cadena = "Hola mundo en Javascript"
console.log("Cadena original: "+cadena)

// Cadena en mayusculas
var cadenaUpperCase = cadena.toUpperCase()
console.log("Cadena en mayusculas: "+cadenaUpperCase)

// Cadena en minusculas
var cadenaLowerCase = cadena.toLowerCase()
console.log("Cadena minusculas: "+cadenaLowerCase)

// Longitud de la cadena
var longitudCadena = cadena.length
console.log("Longitud de la cadena: "+longitudCadena)

// Slice
var cadenaExtraida = cadena.slice(0,4)
console.log("Seccion de la cadena (slice): "+cadenaExtraida)

// split
var arrayCadena = cadena.split(" ")
console.log("Cadena separada (split): "+arrayCadena)

// substr
var subcadena =  cadena.substring(0,4)
console.log("Sub String: "+subcadena)

// concatenar
var segundaCadena = " Texto concatenado"
var cadenaConcatenada = cadena.concat(segundaCadena, " Tercera cadena")
console.log("Cadena concatenada: "+cadenaConcatenada)

// indice de
var indice = cadena.indexOf("mundo")
console.log("Indice de la primera aparicion de la subcadena: "+indice)

// includes
var isInclude = cadena.includes("en")
console.log("La cadena incluye 'en': "+isInclude)