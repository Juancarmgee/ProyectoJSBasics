// set
//declaracion

let mySet = new Set()
let mySet2 = {} //  no es un set vacio

//inicializacion

mySet = new Set (["Juan Carlos" , "Marquez" , 24])

console.log(mySet)

//Metodos comunes

// add y deleate

mySet.add ("Juancarlos@atomchat.io")
console.log(mySet)

mySet.delete(24) // a difererncia del array, aca hay que indicar directamente el valor que queremos eliminar del set
console.log(mySet)

//has

mySet.has ("Marquez")

console.log(mySet.has ("Marquez")) // esto nos muestra si este dato existe dentro del set 

// size 

console.log (mySet.size)

//convertir un set a array

let myArray = Array.from (mySet) // esto sirve para convertir un set en un array
console.log(myArray)

mySet = new Set (myArray)
console.log(mySet)


mySet.add ("jkljalkfj") // La diferencia entre set y array es que en los sets no se pueden repetir elementos
console.log(mySet)