/**
 * Estructura de switch
 * 
 */

//Costos de una fruta en la tienda

let comprar = "Papaya"

switch (comprar) {
    case "Naranjas":
        console.log("Las naranjas cuestan Q16 la mano")
        break;
    case "Platanos":
        console.log("Los platanos cuestas Q18 la docena")
        break;
    case "Manzanas":
        console.log("Las manzanas cuestan Q5 cada una")
        break;
    //casos compartidos
    case "Mangos":
    case "Piñas":
        console.log("Los mangos y las piñas estan cuestan lo mismo, Q12 la libra")
        break;
    default:
        console.log(`No se encontraron con inventario para ${comprar}`) //Comillas simples con alt+96
        break;
}