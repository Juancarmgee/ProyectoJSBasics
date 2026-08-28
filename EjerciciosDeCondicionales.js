// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let nombre = "Juan Carlos Marquez"

if (nombre == "Juan Carlos Marquez"){
    console.log(`Hola ${nombre}`) 
}
    else
{
console.log("Tu no eres Juan Carlos")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña coincide con unos establecidos

let usuario = "Jcmg"
let pw = 12345

if (usuario == "Jcmg"){
    console.log(`Bienvenido ${usuario}`)
}
else {
       console.log (" Usuario no reconocido")
}
if (pw == 12345){
    console.log("contras;a exitosa")
} 
else{ console.log("Contrase;a erronea, intentelo de nuevo")
}



if (usuario == "Jcmg"){
    console.log ("Bienvenido Juan Carlos")
} 
else if (usuario != "Jcmg")
{
console.log("quien chota sos")
}
    else
        {
console.log ("Escribe un usuario y contrase;a valido")
    }

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let numero = -6

if (numero > 0){
    console.log ("El numero es positivo")
}
else if (numero < 0){
console.log("el numero es negativo")
    }
    else {

    }

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad =  45

if (edad >= 18)
    {
    console.log("claro, tu puedes votar")
}
else {console.log('Definitivamente no puedes votar')
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad

let personaMayor

edad >=18 ? personaMayor = "si es mayor" : personaMayor = "No es mayor"

console.log(personaMayor)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = "Marzo"

if (mes == "Enero"){
    console.log("Es invierno")
} else if (mes == "Febrero"){
    console.log("Sigue siendo invierno en Guatemala al menos")
} else if (mes == "Marzo"){
    console.log("Aqui comienza el verano en Guatemala")
} else {
    console.log("Ingresa un mes del a;o")
}




// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior


if (mes == "Enero"){
    console.log("31 dias")
} else if (mes == "Febrero"){
    console.log("30 dias")
} else if (mes == "Marzo"){
    console.log("31 dias")
} else {
    console.log("Necesito un mes valido para decirte cuantos dias tiene")
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = "German"

switch (idioma) {
    case "Spanish":
        console.log("Hola mucho gusto de conocerte")
        break;
    case "English":
        console.log("Nice to meet you")
        break;
    case "German":
        console.log("Hola mucho gusto de conocerte en aleman")
        break;
    case "French":
        console.log("Hola mucho gusto de conocerte en frances")
        break;
    default:
        console.log("Ingresa un idioma valido")
        break;
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

switch (mes) {
    case "Enero":
 console.log("Invierno")       
        break;
case "Febrero":
 console.log("Invierno")       
        break;
case "Marzo":
 console.log("Verano")       
        break;
case "Abril":
 console.log("Verano")       
        break;
case "Mayo":
 console.log("Verano")       
        break;
case "Junio":
 console.log("Luvia")       
        break;
case "Julio":
 console.log("Lluvia")       
        break;
case "Agosto":
 console.log("Mes de lluvia")       
        break;
case "Septiembre":
 console.log("Lluvia")       
        break;
case "Octubre":
 console.log("Invierno")       
        break;
case "noviembre":
 console.log("Invierno")       
        break;
case "OcDiciembre":
 console.log("Invierno")       
        break;
    default: ("No es un mes valido")
        break;
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7

switch (mes) {
    case "Enero":
 console.log("31 dias")       
        break;
case "Febrero":
 console.log("30 dias")       
        break;
case "Marzo":
 console.log("31 dias")       
        break;
case "Abril":
 console.log("30 dias")       
        break;
case "Mayo":
 console.log("31 dias")       
        break;
case "Junio":
 console.log("30 dias")       
        break;
case "Julio":
 console.log("31 dias")       
        break;
case "Agosto":
 console.log("30 dias")       
        break;
case "Septiembre":
 console.log("30 dias")       
        break;
case "Octubre":
 console.log("31 dias")       
        break;
case "noviembre":
 console.log("30 dias")       
        break;
case "OcDiciembre":
 console.log("31 dias")       
        break;
    default: ("30 dias")
        break;
}