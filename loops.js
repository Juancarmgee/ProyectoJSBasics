//loops o bucles

//for 

for (let i = 0 ; i <5 ; i++ ){
    console.log (`Hola ${i}`)
}

const numbers = [1,2,3,4,5, 6,7,8]

for (let i = 0; i< numbers.length ; i++){
console.log(`Estos son los elementos del array: ${numbers[i]} `)
}


// while

let i = 0 

while (i < numbers.length) {
    console.log (`Hola, esta es el contenido de una posicion en el array ${numbers[i]}`)
    i++
} 

//do while // se tiene que ejecutar al menos una vez porque no se evalua nada al principio 

i = 0

do {
console.log (`Hola, esta es el contenido de una posicion en el array no  ${i}`)
    i++
} while (i <= 5)


//for of 
// recorrer valores de algo que sea iterable


myArray = ["gato" , "perro" , "elefante", "vaca" , "pajaro"]

for (let valor of myArray){
    console.log(valor)
}


/*Buenas practicas
CUIDADO CON LOS BUCLES INFINITOS*/


for (let i = 0; i<10; i++){
    if (i==5){
        continue // esto es para saltar u omitir un numero en el bucle
    } else if (i==3){
        break // detiene el bucle
    }
    console.log (`continue pa ${i}`)
}
