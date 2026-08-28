let myName = "Juan Carlos"
//concatenacion de cadenas
let saludo = "Que pedo mi," + myName

console.log(saludo)
console.log(typeof saludo)

//longitud de saludo

console.log(saludo.length)

//acceso a caracteres
console.log(saludo [0]) //Se accede al caracter del valor de la varible, comenzando desde el 0 [] son corchetes cuadradoss

// metodos comunes
console.log(saludo.toUpperCase())
console.log(saludo.toLowerCase() )
console.log(myName.indexOf ("Juan") ) //Va y dice el numero de la posicion en la que empieza el valor que se le indica
console.log(saludo.includes("Juan") )
console.log(saludo.slice(0,11))
console.log (saludo.replace("pedo", "sexo"))

//template literals 
let mensaje = `Hola esta es una prueba de salto
de linea en esta mamada` // podemos crear un texto de varias lineas con el acento invertido (el que esta al fondo del todo del lado izquierdo)
console.log (mensaje)

console.log (`hola ${myName}, como estas`) // esta es una forma de usar una variable dentro de una cadena de texto, se usan los acentos invertidos, el signo del dolar y los corchetes

let email = "juancarmge.e@gmail.com"

console.log(`Hola ${myName}, es un gusto tenerte de vuelta, tu correo actual es ${email}, cieto?`)

