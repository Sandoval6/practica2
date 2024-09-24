// src/calcularPromedio.js
// Versión con defecto
function calcularPromedioDefecto(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma / numeros.length; // Defecto: División por cero si el array está vacío
}

// Versión corregida
function calcularPromedioCorregido(numeros) {
    if (numeros.length === 0) return 0; // Manejar el caso de array vacío entonces
    let suma = 0;
    for (let j = 0; j < numeros.length; j++) {
        suma += numeros[j];
    }
    return suma / numeros.length;
}

module.exports = { calcularPromedioDefecto, calcularPromedioCorregido };
