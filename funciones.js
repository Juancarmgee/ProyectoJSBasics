
//Las funciones son bloques de código que se pueden invocar cuando querramos en el código.
//Simple

function firstFunction (){
    console.log ("Hola buenas")
}

for ( let numeros = 0; numeros <= 20; numeros++){
    firstFunction ()
}

//Funciones con parametros 

function firstFunction2 (func1){
    console.log (`Hola ${func1}`)
}

firstFunction2 ("Jc")

//FUnciones anonimas 

const firstFunction3 = function (func1){
    console.log (`Hola ${func1}`)
}
firstFunction3 ("Jcmg")

// Arrow functions 

const myfunc3 = (name) => {
    console.log (`Hola ${name}`)
}

myfunc3 ("Juan Carlos")

//Parametros 

function sum (a , b) { 
    console.log (a + b)
}

sum (34 , 56)


// Retorno de valores

function multi (a, b){
    return a*b
}
    
console.log (multi(2,5))

// Funciones anidadas 

function extern (){
    console.log ("Funcion interna")
    function intern (){
        console.log ("Si esto se llama fuera del scoper de extern no se toma en cuenta, por que está dentro del scope, pero si se llama dentro de extern, si se se ejecuta")
    }
    intern()
}

extern ()

//foreach 

myArray = [1,2,3,4]

myArray.forEach (function (value){
    console.log(value)
});

myArray.forEach((value) => console.log (value))