//Arrays
// Declaracion

let myArray = [] // recomendado
let myArray2 = new Array (5)

myArray = [1,2,3,4]
myArray = ["Juan" , "Carlos" , 1 , 3 ]
console.log(myArray)

myArray2 = new Array (3)

myArray2 [2]= "carlos" 
myArray2 [1]= "juan" 
myArray2 [0]= "Marquez" 

console.log(myArray2)

//Metodos comunes 

myArray = []


//push y pop
myArray.push ("Juan Carlos")
myArray.push ("Marquez guevara")
myArray.push (24 , "A;os")

console.log(myArray)

myArray.pop ("Juan Carlos")
myArray.pop () // elimina el ultimo elemento del array y lo devuelve

console.log(myArray)


// shift y unshift

myArray.shift () // Elimina el primer elemento del array 
console.log (myArray)

myArray.unshift ("Juan Carlos2", 24) // Agrega elementos al principio del array

// Lenght

myArray.length

console.log(myArray.length) // longitud de array 

// clear

myArray = [] // esto es para limpiar el array, se inicializa de nuevo en blanco

// slice 

myArray.slice (1,2) // es literalmente llamar al array por un trozo, los valores son es el rango entre los datos que se van a tomar 

//splice

myArray.splice (1,2) // Elimina los elementos dentro de rango que le hemos dado 

