/* let mivector = ["Argenis", "Luisina", "Anthony", "Pedro"]
let mivector2 = ["Faisal", "Luis", "Carleisis"]
let vector = [mivector, mivector2]

console.log(vector)
console.log("El tamaño de mi arreglo bidimensional es: "+vector.length)
console.log("El tamaño del arreglo con el indice 0 es de: "+vector[0].length)
console.log("El tamaño del arreglo con el indice 1 es de: "+vector[1].length)
console.log("El elemento con el indice 2 en el arreglo 1 es: "+vector[1][2]) */

let matriz = [[1, 2, 3], [4, 5, 6]]
//let matrizT = [];
let matrizT = new Array(3)
matrizT[0] = []
matrizT[1] = []
matrizT[2] = []
console.log(matriz)

/* for (let i = 0; i < matriz[0].length; i++) {
    matrizT[i] = [];
} */


for (let fila = 0; fila < matriz.length; fila++) {
    for (let colum = 0; colum < matriz[0].length; colum++) {
       matrizT[colum][fila]= matriz[fila][colum] 
    }
}


console.log("[\n{"+matrizT[0]+"}\n"+"{"+matrizT[1]+"}\n"+"{"+matrizT[2]+"}\n]")