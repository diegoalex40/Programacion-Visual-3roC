// Declaracion y operaciones con numeros

let numero1: number = 30;

let suma = numero1 + 10;
let suma2 = numero1 + "10";

console.log(suma);
console.log(suma2);

// Variables sin inicializar:

let variable: string = "ejemplo";
console.log("La variable es: " + variable);

// Trasnformacion de String a Number

let trasnformacion: number = parseInt("25");

var operacion = trasnformacion + 7;
console.log(operacion);

let numeroString: string = "200";
let nuevoNumero: number;
nuevoNumero = parseInt(numeroString);
console.log(nuevoNumero);

// solo funciona si y solo si dentro del string existen solo numero que nos sean el 0

let numeroPrueba: number = parseInt("ejemplo");
console.log(numeroPrueba);

// NUMEROS BINARIOS Y HEXADECIMALES
let primerHexa = 0xfff;
let primerHexa2 = 0xff;
console.log(primerHexa, primerHexa2);

let primerBinario = 0b1010;
let primerBinario2 = 0b101010;
console.log( primerBinario, primerBinario2);

