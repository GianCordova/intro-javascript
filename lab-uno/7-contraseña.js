/**
 * Giancarlo Sebastian Cordova Garcia - 2024016
 * Ej7. Crea una función que verifique si una contraseña (string) es "segura".
 * Considera que es segura si tiene más de 8 caracteres y contiene un número.
 */

const contrasena = "sdftghup8";

function verificarContrasena() {
    if (contrasena.length <= 8) {
        console.log("La contraseña no es segura");
        return;
    }

    for (let i = 0; i < contrasena.length; i++) {
        if (contrasena[i] >= '0' && contrasena[i] <= '9') {
            console.log("La contraseña es segura");
            return;
        }
    }

    console.log("La contraseña no es segura");
}
