let myName = "juan Carlos"
let Edad = "24 anos    "

// 1. Concatena dos cadenas de texto

console.log(myName + "," + Edad)

// 2. Muestra la longitud de una cadena de texto

console.log(myName.length)

// 3. Muestra el primer y último carácter de un string

console.log(myName[0])
console.log(myName[10])

// 4. Convierte a mayúsculas y minúsculas un string

console.log(myName.toUpperCase())
console.log(myName.toLowerCase())

// 5. Crea una cadena de texto en varias líneas

console.log(`Hola esta es una cadena de texto de varias lineas
    que se estara
    mostrando en consola
    en un momento`)

// 6. Interpola el valor de una variable en un string

console.log(`Hola, mucho gusto ${myName}, se que tienes ${Edad}, tienes la edad suficiente para tomarnos unas cervezas`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log(myName.replace(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(myName.includes("juan"))

// 9. Comprueba si dos strings son iguales

console.log (myName == Edad)

// 10. Comprueba si dos strings tienen la misma longitud

console.log(myName.length == Edad.length)