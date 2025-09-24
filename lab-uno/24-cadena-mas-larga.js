/**
 * Giancarlo Sebastian Cordova Garcia - 2024016
 * Ej24. Crea una función que reciba un arreglo de cadenas de texto y
 * retorne la cadena más larga.
 */

const cadenas = ["Hola Mundo", "JavaScript es dificil", "Programación"];

function encontrarCadenaMasLarga(arregloDeCadenas) {
    //Por si el arreglo esta vacio
    if (arregloDeCadenas.length === 0) {
        return "El arreglo está vacío.";
    }

    let cadenaMasLarga = arregloDeCadenas[0];
    //Aqui recorreo cada cadena calculando cada caracter, y como en un ejercicio pasado va comparando para sacar el mas grande
    for (let i = 1; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i].length > cadenaMasLarga.length) {
            cadenaMasLarga = arregloDeCadenas[i];
        }
    }

    return cadenaMasLarga;
}