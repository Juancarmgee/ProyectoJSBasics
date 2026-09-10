
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