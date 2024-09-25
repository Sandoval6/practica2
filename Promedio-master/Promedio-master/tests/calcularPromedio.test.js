// tests/calcularPromedio.test.js

const { calcularPromedioDefecto, calcularPromedioCorregido } = require('../src/calcularPromedio');

test('Promedio de números con defecto', () => {
    expect(calcularPromedioDefecto([10, 20, 30, 40, 50])).toBe(30);
    expect(() => calcularPromedioDefecto([])).toThrow(); // Debería fallar
});

test('Promedio de números corregido', () => {
    expect(calcularPromedioCorregido([10, 20, 30, 40, 50])).toBe(30);
    expect(calcularPromedioCorregido([])).toBe(0); // Corrección: debería devolver 0
});
//correcion
const { calcularPromedioDefecto, calcularPromedioCorregido } = require('../src/calcularPromedio');

test('Promedio de números con defecto', () => {
    expect(calcularPromedioDefecto([10, 20, 30, 40, 50])).toBe(30);
    
    // Debería lanzar un error cuando el array esté vacío
    expect(() => calcularPromedioDefecto([])).toThrow('Array vacío no permitido'); // Deberías personalizar el mensaje si es necesario
});

test('Promedio de números corregido', () => {
    expect(calcularPromedioCorregido([10, 20, 30, 40, 50])).toBe(30);
    
    // En este caso, debería devolver 0 para un array vacío
    expect(calcularPromedioCorregido([])).toBe(0);
});
