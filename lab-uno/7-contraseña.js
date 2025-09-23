/**
 * Giancarlo Sebastian Cordova Garcia - 2024016
 * Ej7. Crea una función que verifique si una contraseña (string) es "segura".
 * Considera que es segura si tiene más de 8 caracteres y contiene un número.
 */

function verificarContraseña(contraseña) {
    if (contraseña.length <= 8) {
        
    }

    for (let i = 0; i < contraseña.length; i++) {
        if (contraseña[i] >= '0' && contraseña[i] <= '9') {
          return console.log("La contraseña es segura"); 
        }
      }
      return console.log("La contraseña no es segura");
}

console.log(verificarContraseña("sdftghup8")); 
