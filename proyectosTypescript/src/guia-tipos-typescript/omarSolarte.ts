// Creación de las Interfaces

interface tipoVehiculo {
    tipo: string;
    marca: string;
    modelo: string;
    cilindraje: number;
    numPuertas: number;
    arrancarVehiculo: () => void;
    cEspeciales: caracteristicasEspeciales[];
  }

  interface caracteristicasEspeciales {
    velocidad: number;
    suspension: boolean;
    agregarSuspension: () => void;
  }

  interface testArray {
    modelos: number[];
    caracteristicasArray: Array<string[]>;
  }

// Definir un objeto miVehiculo de tipo tipoVehiculo, emplea el método arrancarVehiculo()
// para imprimir en consola: “El vehiculo arranco con un motor de 2000 cc”, el valor del
// motor deberá tomarse desde la propia variable del objeto.

 const miVehiculo: tipoVehiculo = {
    tipo: 'Sedán',
    marca: 'Toyota',
    modelo: 'Corolla',
    cilindraje: 2000,
    numPuertas: 4,
    arrancarVehiculo: function() {
      console.log(`El vehiculo arranco con un motor de ${this.cilindraje} cc`);
    },
    cEspeciales: []
  };

// Definir un objeto miSegundoVehiculo de tipo CaracteristicasEspeciales, el valor de
// suspensión será false, usa el método agregarSuspension para imprimir una condición que
// valide si el campo suspensión es true, se imprimirá en consola el mensaje: Tu vehiculo
// tiene suspensión, de lo contrario imprimirá el mensaje: Tu vehiculo no tiene suspensión.


  const miSegundoVehiculo: caracteristicasEspeciales = {
    velocidad: 150,
    suspension: false,
    agregarSuspension: function() {
      if (this.suspension) {
        console.log('Tu vehiculo tiene suspensión');
      } else {
        console.log('Tu vehiculo no tiene suspensión');
      }
    }
  };

  // Define un tercer objeto miTercerVehiculo de tipo testArray, inicializa la variable modelos con 5 valores dentro
  // del array + caracteristicas.

  const miTercerVehiculo: testArray = {
    modelos: [2010, 2015, 2018, 2020, 2022],
    caracteristicasArray: [
      ["azul", "verde"],
      ["Rin 15", "Rin 17"],
      ["2 puertas", "4 puertas"]
    ]
  };

//Impresión de resultados por consola:
// 1. Imprimir el valor de miVehiculo
console.log(miVehiculo);

console.log('---');

// 2. Invocar el método arrancarVehiculo
miVehiculo.arrancarVehiculo();

console.log('---');

// 3. Invocar el método agregarSuspension en miSegundoVehiculo
miSegundoVehiculo.agregarSuspension();

console.log('---');

// 4. Imprimir el valor del objeto miSegundoVehiculo
console.log(miSegundoVehiculo);

console.log('---');

// 5. Imprimir el valor de miTercerVehiculo
console.log(miTercerVehiculo);

console.log('---');

// 6. Imprimir el valor específico "azul" de miTercerVehiculo
console.log(miTercerVehiculo.caracteristicasArray[0][0]);

console.log('---');

// 7. Imprimir el valor específico "4 puertas" de miTercerVehiculo
console.log(miTercerVehiculo.caracteristicasArray[2][1]);

console.log('---------');


//Impresión de todos los valores de cada subarray
// Recorriendo con el index = 0
let index = 0;
miTercerVehiculo.caracteristicasArray.forEach((caracteristica) => {
  console.log(caracteristica[index]);
});

console.log('---');

// Recorriendo con el index = 1
index = 1;
miTercerVehiculo.caracteristicasArray.forEach((caracteristica) => {
  console.log(caracteristica[index]);
});
