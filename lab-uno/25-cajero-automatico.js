/**
 * Giancarlo Sebastian Cordova Garcia - 2024016
 * Ej25. Escribe un programa que simule un cajero automático. Pide al
 * usuario un monto a retirar y verifica si tiene saldo suficiente.
 */

const saldoInicial = 1000;

function cajeroAutomatico() {
    //Aviso que pedira el monto a retirar en la pagina
    const montoRetiro = parseFloat(prompt("Ingresa el monto a retirar:"));
    
    //Aqui se verifica si lo que se ingreso es un numero o si es positivo para evitar errores
    if (isNaN(montoRetiro) || montoRetiro <= 0) {
        alert("Por favor, ingresa un monto válido y positivo.");
        return;
    }
    //Esto verifica si el usuario tiene saldo suficiente
    if (montoRetiro > saldoInicial) {
        alert("Saldo insuficiente.");
    } else {
        const nuevoSaldo = saldoInicial - montoRetiro;
        alert(`Retiro exitoso. Tu nuevo saldo es: ${nuevoSaldo}`);
    }
}