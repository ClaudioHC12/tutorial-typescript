// tsc file.ts => node file.js   =   ts-node file.ts

function tiposDatos() {
    //Tipos de datos
    let var1: number = 1;
    let var2: string = 'a';
    let var3: boolean = true;

    let persona: { nombre: string, edad: number, direccion: { num: number, calle: string } } = {
        nombre: 'claudio',
        edad: 24,
        direccion: {
            num: 399,
            calle: 'nicobar'
        }
    };
    console.log(persona);
}

function arreglos() {
    //Arrays
    let arrayLetras: string[] = ['a', 'bb', 'ccc'];
    let arrayLongitud: number[] = arrayLetras.map((x) => x.length);
    let total = 0;
    arrayLongitud.forEach(x => {
        total += x;
    });
    let valorDinamico: any = 1;
    valorDinamico = '2';

    console.log(arrayLongitud);
}

function tuplasEnums() {
    //Tuplas
    let automovil: [string, number, string] = ['BMW', 2024, 'X6'];
    type vehiculo = [string, number, string];
    let moto: vehiculo = ['Pular', 2024, 'x600'];

    //Enums
    enum rol { estudiante, desarrollador, programador };
    console.log(rol['0']);

    //Literal
    let vehiculo1: 'vehiculo';
}

function ImplementacionFunciones() {
    //Funciones 
    function sumar(num1: number, num2: number): number {
        return num1 + num2;
    }
    let sumar1 = (num1: number, num2: number): number => num1 + num2;
    function imprimir(): void {
        console.log(sumar1(1, 2));
    }

    //retorno Never
    const trowError = (message: string) => {
        throw new Error(message);
    }

    //Callback, pasar funcion como parametro
    usoCallback('claudio', imprimir);
    function usoCallback(usuario: string, funcionParametro: Function) {
        console.log(usuario + ' ha ejecutado: ' + funcionParametro.name + '()');
        funcionParametro();
    }
}


