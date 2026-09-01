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


for (let Nombres of nombres){
    console.log (nombres)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto


string1 = "Juan Carlos"
for ( let vowel of string1){
    if (vowel == "a"){
        continue
    } else if (vowel == "e"){
        continue
    } else if (vowel == "i"){
        continue
    } else if (vowel == "o"){
        continue
    } else if (vowel == "o"){
        continue
    } else 
console.log ("Este es el numero de vocales del string" , vowel)
}























// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

// 8. Usa un bucle para invertir una cadena de texto

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10