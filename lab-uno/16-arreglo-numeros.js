/**
 * Giancarlo Sebastian Cordova Garcia - 2024016
 * Ej16. Crea una función que tome un arreglo de números y retorne el
 * número más grande en el arreglo.
 */

const numeros = [10, 5, 25, 8, 12];

function encontrarNumeroMasGrande(numeros) {
    //Esto retornara null si el arreglo esta vacio
    if (numeros.length === 0) {
        return null;
    }
    //Con esto se ira recorriendo el arreglo para que compare el numero actual digamos
    //con el numero mas grande encontrado hasta el momento
    let numeroMasGrande = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > numeroMasGrande) {
            numeroMasGrande = numeros[i];
        }
    }

    return numeroMasGrande;
}