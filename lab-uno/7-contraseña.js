/**
 * Giancarlo Sebastian Cordova Garcia - 2024016
 * Ej7. Crea una función que verifique si una contraseña (string) es "segura".
 * Considera que es segura si tiene más de 8 caracteres y contiene un número.
 */

const contrasena = "sdftghup8";

function verificarContrasena() {
    //Condicion para que la contraseña sea de mas de 8 caracteres
    if (contrasena.length <= 8) {
        return "La contraseña no es segura: debe tener más de 8 caracteres.";
    }
    //Verificar la contraseña
    for (let i = 0; i < contrasena.length; i++) {
        if (!isNaN(parseInt(contrasena[i]))) {
            return "La contraseña es segura.";
        }
    }

    return "La contraseña no es segura: debe contener al menos un número.";
}