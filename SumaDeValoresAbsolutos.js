//Ingresar 3 datos y mostrar la suma de sus valores absolutos. Ej. si se lee -1, 5,-30 mostrar: 36
var num1 = parseInt(prompt("Ingrese el primer valor"));
var num2 = parseInt(prompt("Ingrese el segundo valor"));
var num3 = parseInt(prompt("Ingrese el tercer valor"));

var suma = Math.abs(num1) + Math.abs(num2) + Math.abs(num3);
console.log ("La suma de los valores absolutos es: " + suma);
