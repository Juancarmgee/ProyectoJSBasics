// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for ( let numeros = 0; numeros <= 20; numeros++){
    console.log(numeros)
}

const array1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

let numero = 0

while (numero <= array1.length) {
    console.log (`Hola, esta es el contenido de una posicion en el array ${array1[numero]}`)
    numero++
} 

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let suma = 1

for (let i = 0; i <= 100 ; i++){
    suma += i
console.log ("estos son los dos valores sumados:", suma)
} 

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50


for (let par = 2 ; par <= 50 ; par +=2){
    console.log (par)
}
    
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

const nombres = [ "Juan" , "Carlos" , "Marquez" , "Guevara"]


for (let names of nombres){
    console.log (names)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto


const string1 = "Me cago en todo lo que se menea"
let totalDeLetras = 0


for ( let vowel of string1){
   if (vowel == "a"||vowel == "e"||vowel == "i"||vowel == "o"||vowel == "u"){
            totalDeLetras++
   } else {

   }
    }
    console.log ("Este es el numero de vocales del string" , totalDeLetras)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto


const setso = [ 1 , 2 , 3 , 4 , 5]
let resultadoMulti = 1

for (let multi of setso){
    resultadoMulti = resultadoMulti * multi
    
}
console.log ("Este es el resultado de la multiplicacion:" , resultadoMulti)


// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

const tablas = [1,2,3,4,5,6,7,8,9,10]

for (let letra1 of tablas){ 
    console.log ("tabla del 5:", letra1 , "x" , 5, "=" , letra1*5 )
}

// 8. Usa un bucle para invertir una cadena de texto


const name = "pato"

for (let posicion = name .length - 1 ; posicion >= 0 ; posicion--){
    console.log (name [posicion])
}























// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10 