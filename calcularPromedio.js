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
    // Validación de que sea un array y no esté vacío
    if (!Array.isArray(numeros) || numeros.length === 0) return 0; // Retorna 0 si no es array o está vacío

    // Filtrar valores no numéricos
    let numerosValidos = numeros.filter(num => typeof num === 'number' && !isNaN(num));

    if (numerosValidos.length === 0) return 0; // Retorna 0 si todos los valores eran inválidos

    // Uso de reduce para sumar los valores válidos
    let suma = numerosValidos.reduce((acc, num) => acc + num, 0);
    
    return suma / numerosValidos.length; // Calcula el promedio de los valores numéricos válidos
}

module.exports = { calcularPromedioDefecto, calcularPromedioCorregido };
