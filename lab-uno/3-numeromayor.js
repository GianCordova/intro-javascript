/**
 * Giancarlo Sebastian Cordova Garcia - 2024016
 * Ej3. Crea una función que reciba dos números y retorne el número mayor.
 */

const num1 = 10;
const num2 = 20;

function calcularNumeroMayor(num1, num2) {
    //If para calcular con los signos mayor y menos cual de los dos numeros es el mayor
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        //Por si se ingresan numeros iguales
        return "Ambos números son iguales";
    }
}
