//VARIABLES

// Declaracion
//se puede usar let o const
let comprar="pan"
const edad=23
let boolean=false
let conjunto=[12,"hola",false,18.5]
let informacion={
    curso:"octavo",
    edad:15
}

//STRING
let colegio="Eloy Alfaro"
let sector='ofelia'


//comprobar si es string
console.log(typeof colegio)
console.log(typeof sector)

//existen metodos para contabilizar, cortar o cambiar una cadena de texto

//verificar si exite dentro del string
console.log(colegio.includes("la"))

//convertir a mayusculas
console.log(colegio.toUpperCase())

//reemplazar palabra
console.log(colegio.replace('Alfaro', 'Benigno'))


//templates con string
let local="etafashion"

let trabajadores="25 tr"

console.log(local+trabajadores)

//espaciado
console.log(local+" "+trabajadores)
console.log(`${local}  ${trabajadores}`)

//backtic, mezclar variables y texto
console.log(`${local} tiene ${trabajadores}`)






//NUMEROS
const numeroIntentos = "4"
const numeroPuntos = 40

console.log(numeroPuntos,numeroIntentos);
console.log(typeof(numeroPuntos), typeof(numeroIntentos));

//Reliazamos algunos ejemplos
console.log("suma:",numeroPuntos+20);
console.log("resta:",numeroPuntos-20);
console.log("multiplicación:",numeroPuntos*20);
console.log("división:",numeroPuntos/20);
console.log("módulo:",numeroPuntos%20);










// BOOLEANOS
let saldoTarjetaUsuario = 1500
let saldoTarjeta = 400
let estadoCuenta
let emailConfirmado=null


saldoTarjetaUsuario += 100
console.log(saldoTarjetaUsuario);

saldoTarjetaUsuario="1000"
console.log(saldoTarjeta == saldoTarjetaUsuario)

console.log(saldoTarjeta === saldoTarjetaUsuario)
console.log(estadoCuenta === emailConfirmado);

console.log(saldoTarjeta + parseInt(saldoTarjetaUsuario));

console.log(saldoTarjeta != saldoTarjetaUsuario);

console.log(saldoTarjeta !== parseInt(saldoTarjetaUsuario));



//CONDICIONALES
let edad = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

//BUCLES
for (let i = 0; i < 5; i++) {
  console.log("El valor de i es: " + i);
}


