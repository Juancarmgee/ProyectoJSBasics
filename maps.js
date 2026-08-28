//map

let myMap = new Map ()

// inicializacion 

myMap = new Map ([
    ["name" , "Juan"] , ["age", 24] , ["estudios" , "Ingenieria"]
])

console.log(myMap)

//metodos y propiedades

//set

myMap.set ("Alias" , "JC") // A;ade o actualiza valores 
console.log (myMap)

//get

myMap.get ("name")

console.log(myMap.get ("name")) // podemos trer un valor, pero con su clave 

//has

myMap.has ("age")
console.log(myMap.has ("age")) // podemos saber sobre la existencia de una clave en un map 

// delete

myMap.delete ("age")
console.log(myMap)


//key 

myMap.keys()
console.log(myMap.keys()) // trae todas las llaves de un mapa 

//values

myMap.values ()
console.log(myMap.values ()) // trae todos los valores de un mapa

//size

myMap.size

// clear 

myMap.clear()
console.log(myMap) // limpia el mapa 

