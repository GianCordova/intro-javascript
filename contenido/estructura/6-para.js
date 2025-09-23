/**
 * For ciclo Para
 */

// For / For-of / For-in

let lista = ["eat", "sleep", "code", "repeat"];

//For
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}

//For-Off [{For Each}]
let canasta = ["manzana", "pera", "naranja", "uva"]
for (fruta of canasta) {
    console.log(fruta)
}

//For-In -> Iterar sobre las propiedades de un objeto
const listaDeCompras = {
    nombre: "manzana",
    costo: 3.4,
    cantidad : 12,
    marca: "manzanita feliz"
}
console.log("-------------------------")
for (fruta in listaDeCompras) {
    console.log(fruta)
}
console.log("-------------------------")
for (fruta in listaDeCompras) {
    console.log(`${fruta} : ${listaDeCompras[fruta]}`)
}
console.log("-------------------------")
for (fruta of listaDeCompras) {
    console.log(fruta)//Error -> Lista de compras no iterable
}
