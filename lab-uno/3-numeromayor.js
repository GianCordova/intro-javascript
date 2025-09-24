/**
 * Giancarlo Sebastian Cordova Garcia - 2024016
 * Ej3. Crea una función que reciba dos números y retorne el número mayor.
 */

const num1 = 10;
const num2 = 20;

function calcularNumeroMayor(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        return "Ambos números son iguales";
    }
}
