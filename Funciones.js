//Anónimas y Autoejecutadas 
function ejecutarOperacion(a, b, operacion) {
  return operacion(a, b);
}

let resultadoSuma = ejecutarOperacion(2, 3, function (a, b) {
  return a + b;
});
console.log(resultadoSuma); 

//Función Autoejecutada que Retorna un Valor: 
let resultado = (function (a, b) {
  return a + b;
})(6, 3);

console.log(resultado); 


//Argumentos y Parámetros 

// Parámetros 
//Los parametros en esta funcion son C Y D que se utilizan como variables
function sumar(c, d) {
  return c + d;
}

let resulSuma = sumar(10, 15);
console.log(resulSuma); 

//Argumentos
//El argumento en esta funcion es el nombre Nayeli
function saludar(nombre) {
  console.log("¡Hola, " + nombre + "!");
}
saludar("Nayeli");
//Retorno de una Función 

function calcularImpuestos(salario) {
    const impuesto = salario * 0.2; // Calcula el impuesto como el 20% del salario
    return impuesto;
  }
  
  const salarioJuan = 450;
  const impuestosJuan = calcularImpuestos(salarioJuan);
  console.log(`Juan debe pagar ${impuestosJuan} en impuestos.`);
  

//Funciones Flecha

const numeros = [1, 2, 3, 4, 5];
const numerosDuplicados = numeros.map(numero => numero * 2); // Duplicar cada número usando una función flecha en el mapeo
console.log(numerosDuplicados); // Resultado: [2, 4, 6, 8, 10]


//This 

const coche = {
    marca: 'Toyota',
    modelo: 'Corolla',
    obtenerDetalles: function() {
      return `${this.marca} ${this.modelo}`;
    }
  };
  
  console.log(coche.obtenerDetalles()); // Resultado: "Toyota Corolla"
  

