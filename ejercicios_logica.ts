
console.log(obtenerSiglo(300));


function obtenerSiglo(anio: number): number {
    return Math.ceil(anio / 100);
}