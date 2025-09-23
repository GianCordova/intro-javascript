/**
 * Tipo de dato Number
 */

//1. Entero y decimal
const entero = 42
const decimal = 3.14

//2. Notacion Cientifica
const cientifica = 5e3

//3. Infinitos y NaN (Not a Number)
const infinito = Infinity
const noEsNumero = NaN


//Operaciones Aritmeticas
//1. Suma, Resta, Multiplicacion y Division
const suma = 5 + 6
const resta = 4 - 6
const multiplicacion = 4 * 8
const division = 16 / 2

//2. Modulo y exponenciacion
const modulo = 16 % 8
const exponenciacion = 2 ** 4

//Presicion -> JavaScript tiene problemas de calculo
const resultado = 0.1 + 0.2
//console.log(resultado)
//console.log(resultado.toFixed(1))
//console.log(resultado == 0.3)


//Operaciones Avanzadas
const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7)
const aleatorio = Math.random()
let numero = aleatorio * 20 + 10

//console.log(raizCuadrada)
//console.log(valorAbsoluto)
console.log(Math.trunc(numero))

//Ejemplo
const numero2 = 2
const booleano = true
console.log(numero + booleano)

