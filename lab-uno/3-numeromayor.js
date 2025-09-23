/**
 * Giancarlo Sebastian Cordova Garcia - 2024016
 * Ej3. Crea una función que reciba dos números y retorne el número mayor.
 */

function calcularNumeroMayor(num1, num2) {
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  }
  
  const num1 = 10;
  const num2 = 5;

  console.log(`El numero ` + calcularNumeroMayor(num1, num2) + ` es el mayor`); 
  
