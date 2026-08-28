// 1. Crea un array que almacene cinco animales

let myArray = []

console.log(myArray)

myArray = ["gato" , "perro" , "elefante", "vaca" , "pajaro"]

console.log (myArray)

// 2. Añade dos más. Uno al principio y otro al final

myArray.push (34 , "castor") // añade objetos al final
console.log (myArray)

myArray.unshift ("45 birds") //Añade objetos al principio
console.log (myArray)

// 3. Elimina el que se encuentra en tercera posición

console.log (myArray)
myArray.splice (2,1)

console.log(myArray)

// 4. Crea un set que almacene cinco libros

let mySet = new Set ()
mySet = new Set (["libro1" , "libro2" , "libro3" , "libro4" , "libro5" ])


// 5. Añade dos más. Uno de ellos repetido

console.log(mySet)

mySet.add("libro3")
mySet.add("libro6")

console.log(mySet)

// 6. Elimina uno concreto a tu elección

mySet.delete("libro4")
console.log(mySet)

// 7. Crea un mapa que asocie el número del mes a su nombre

let myMap = new Map ()
myMap = new Map ([["Enero",1] , ["Febrero" , 2] , ["Marzo" , 3] , ["Abril",4] , ["mayo",5] , ["junio",6] , ["julio",7]])

console.log(myMap.keys ())

console.log(myMap)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

myMap.has("mayo")
console.log(myMap.has("mayo"))
console.log(myMap.get("mayo"))

// 9. Añade al mapa una clave con un array que almacene los meses de verano

let mesesVerano = ["Marzo" , "Abril" , "Mayo"]
myMap.set("Meses de verano" , mesesVerano)

console.log(myMap)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map


let myArray2 = []

myArray2 = [1,2,3,4,5]

let mySet2 = new Set (myArray2)

console.log(mySet2)

let myMap3 = new Map ()
myMap3 = new Map ([["numeros" , mySet2]])

console.log(myMap3)