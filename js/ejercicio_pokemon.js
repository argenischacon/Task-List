
var namePoke = ["Charmander", "Pikachu", "Bulbasur", "Squirtle"]
var skills = [[80, 75, 90],
[65, 55, 95],
[80, 70, 65],
[85, 90, 70]]

function avgSkillsPokemons(indexPokemon, skills) {
    let suma = 0
    for (let skill = 0; skill < skills[indexPokemon].length; skill++) {
        suma = suma + skills[indexPokemon][skill]
        console.log(suma)
    }

    return parseFloat(suma / skills[indexPokemon].length)
}

function verifyPokemon(promedio) {
    if (promedio >= 70) {
        return true
    } else {
        return false
    }
}

var namePoke = prompt("Ingrese el nombre del Pokemon: ")
var indexPokemon = namePoke.indexOf(namePoke)
var avgSkills = avgSkillsPokemons(indexPokemon, skills)
var isReady = verifyPokemon(avgSkills)

alert("Nombre del Pokemon: " + namePoke + "\n" +
    "Habilidades: " + skills[indexPokemon] + "\n" +
    "Promedio de habilidades: " + avgSkills + "\n" +
    "Listo para la competición: " + isReady
)



