/**
 * Funciones
 */

//Somos dueños de una empresa y necesitamos aplicar descuentos a nuestros productos

function calcularPreciosDeDescuento(precio, descuentoEnPorcentaje) {
    const descuento = (precio * descuentoEnPorcentaje) / 100;
    const nuevoPrecio = precio - descuento;

    return nuevoPrecio;
}

const precioOriginal = 1000;
const descuento = 50;
const precioFinal = calcularPreciosDeDescuento(precioOriginal, descuento);

console.log('Precio original: Q'+precioOriginal);
console.log('Descuento: ' + descuento + '%');
console.log('Precio con descuento: Q'+precioFinal);