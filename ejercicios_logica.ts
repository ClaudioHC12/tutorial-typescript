
//console.log(obtenerSiglo(300));

function obtenerSiglo(anio: number): number {
    return Math.ceil(anio / 100);
}

// Procesar lista de objetos
interface Articulo {
    nombre: string,
    precio: number,
    fechaCaducidad: Date,
    porcentajeDescuento: number
}
//new Date(2024, 4, 27) // Año, Mes (0-11), Día
const listaArticulos: Articulo[] = [
    { nombre: 'iphone 15 plus', precio: 15000, fechaCaducidad: new Date(2024, 5, 27), porcentajeDescuento: 3.5 },
    { nombre: 'air pods pro', precio: 5000, fechaCaducidad: new Date(2024, 6, 27), porcentajeDescuento: 1.5 },
    { nombre: 'macbook pro M3', precio: 45000, fechaCaducidad: new Date(2024, 7, 27), porcentajeDescuento: 5.1 },
];

//Generar una lista de objetos nueva
//Determinar: diferencia de dias entre FechaCaducidad - fechaActual,
//calcular porcentaje con respecto al precio,
//calcular precio total: total = precio - decuento + iva(%1.03)   
let nuevaLista = listaArticulos.map((x) => {
    let currentDate = new Date();
    let diff = x.fechaCaducidad.getTime() - currentDate.getTime(); // Diferencia en milisegundos
    let diffDays = diff / (1000 * 60 * 60 * 24); // Convertir milisegundos a días

    let valorPorcentaje = (x.precio * x.porcentajeDescuento) / 100;

    let iva = (x.precio * 1.03) / 100;

    return{
        nombre: x.nombre, 
        precio: x.precio, 
        caducidad: x.fechaCaducidad, 
        diasRestantes: diffDays,
        descuento: valorPorcentaje,
        total: (x.precio - valorPorcentaje + iva)
    };
});
console.log(nuevaLista);


///ejercicio de logica
//obtener la suma mayor de 2 valores en un array
let arrayNumeros:number[] = [1,3,4,5,9];//resultado 5+9=14