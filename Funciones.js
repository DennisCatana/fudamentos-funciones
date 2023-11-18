//Anónimas y Autoejecutadas 



//Argumentos y Parámetros 



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
  

