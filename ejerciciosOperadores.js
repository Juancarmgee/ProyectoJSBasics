// 1. Crea una variable para cada operación aritmética
let suma = 45
let resta = 43
let multi = 4
let div = 53
let expon = 4

// 2. Crea una variable para cada tipo de operación de asignación, que haga uso de las variables utilizadas para las operaciones aritméticas
suma += 3
resta -= 6
multi *= 9
div /= 2
expon **= 4

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación

console.log ( suma > resta )
console.log ( resta < suma )
console.log ( suma >= multi )
console.log ( expon == expon )
console.log ( suma === suma )

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log ( suma < resta )
console.log ( resta > suma )
console.log ( suma <= multi )
console.log ( expon == div )
console.log ( suma === multi )

// 5. Utiliza el operador lógico and

console.log (45>6 && 56<4)

// 6. Utiliza el operador lógico or

console.log (56>3 || 4<5)

// 7. Combina ambos operadores lógicos

console.log (45>=48 && 87< 232 || 45 == 45 && 45< 5)

// 8. Añade alguna negación

console.log (!(45>=48 && 87< 232 || 45 == 45 && 45< 5))

// 9. Utiliza el operador ternario

const estoyFeliz = true

estoyFeliz ? console.log ("se antoja beber") : console.log ("solo quiero dormir")

// 10. Combina operadores aritméticos, de comparación y lógicos

console.log (54+100 == 154 && 56/7 >7 || 45-5 >= 40)
