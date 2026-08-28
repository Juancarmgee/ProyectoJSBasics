//operadores

let a = 340
let b = 450

// operadores aritmeticos 
console.log (4+10) // suma
console.log (4-10) // resta
console.log (4*10) // multi
console.log (4/10) // division
console.log (4%10) // Modulo/cocinete
console.log (a/b)
console.log (a**b) //exponente

a++ //incremento = se incrementa su valor en 1
console.log (a)

b-- // decremento = se decrementa su valor en =1
console.log(b)


//operadores de asignacion

let myVariable = 2
 console.log (myVariable)
 myVariable += 6 // es el valor de la variable con la suma de valor declarado en la linea
 console.log (myVariable)

 myVariable -= 6 
 myVariable *= 6 
 myVariable /= 6 
 myVariable %= 6
 myVariable **= 6 

 console.log(myVariable)
 
 // operadores de comparacion

console.log (a>b)
console.log (a<b)
console.log (a>=b)
console.log (a<=b)
console.log (a==b) //igualdad por valor, no por tipo
console.log (a===a) //igualdad por identiidad, por lo que va a variar si es un string y un int o float
console.log (a!=b) // desigualdad, si a es distinto a b en este ejemplo
console.log (a!==b) // tambien esto es por igualdad de valor
console.log (undefined == null)

//operadores logicos

//and (&&)

console.log(13 > 45 && 1 < 3) // 1X1 1 TRUE   1X0 FALSE UNA QUE LAS EXPRESIONES SON FALSAS ES FALSA 

 // or (||)
console.log(324 < 43 || 45 > 5 ) // cuando una es verdadera todas son verdaderas aunque haya un falso

console.log (45 > 5 && 65 < 405 || 56 > 45 && 56 > 3 )

// NOT (!)

console.log (!(45 > 5 && 65 < 405 || 56 > 45 && 56 > 3))

//OPERADORES TERNARIOS

const isRaining = false

isRaining ? console.log ("is raingin") : console.log("is not raining") // si verdadero, si falso ?:
