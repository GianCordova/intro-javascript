/**
 * Giancarlo Sebastian Cordova Garcia - 2024016
 * Ej20. Crea una función que sume todos los elementos de un arreglo de
 * números.
 */

const numerosParaSumar = [1, 2, 3, 4, 5];

function sumarElementosArreglo(arreglo) {
    let sumaTotal = 0;
    
    for (let i = 0; i < arreglo.length; i++) {
        sumaTotal += arreglo[i]; 
    }
    
    return sumaTotal;
}