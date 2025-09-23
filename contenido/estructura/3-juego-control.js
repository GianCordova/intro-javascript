const numeroSecreto = Math.floor(Math.random() * 10 + 1);

const numeroJugador = parseInt(prompt("Avidina el numero secreto entre 1 y 10"));

if (numeroJugador === numeroSecreto ) {
    console.log("Lo adivinaste")
} else if (numeroSecreto < numeroJugador){
    console.log("El numero es muy bajo, intenta de nuevo");
} else {
    console.log("El numero es muy alto, intentalo de nuevo")
}