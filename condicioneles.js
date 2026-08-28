//Condicionales if, else if. else

    let age =50

if (age <= 17) {
    //bloque
    console.log("Eres menor de edad")
}

// else (si no)

if (age <= 17) {
    console.log("Eres menor de edad")
} else {
    console.log("Eres mayor de edad")
}


// else if 

if (age <= 17) {
    console.log("Eres menor de edad")
}
else if (age >= 19)
    {  
console.log("tienes mas de 18")
}
 else {
console.log("Eres mayor de edad")
}

/*let day = 0
let dayName = 

if (dayName== 0){
dayName = "lunes"
console.log(dayName)
}
if else (dayName == 1){
dayName = "martes"
 console.log (dayName)
} */


//operadores ternarios x2 / combinacion rapida de if else simple

age == 18 ? console.log ("tienes 18 a;os"): console.log( `tienes ${age} a;os `)






//switch 
// condiciones que se validan sobre una sola variable

let day = 10
let dayName 


switch (day) {
    case 0:
       dayName = "lunes" 
           case 1:
            break
           case 2:
       dayName = "miercoles" 
       break
           case 3:
       dayName = "jueves" 
       break
           case 4:
       dayName = "viernes" 
       break
       default : 
       dayName = "Numero de dia incorrecto"
}

console.log(dayName)
console.log(dayName)