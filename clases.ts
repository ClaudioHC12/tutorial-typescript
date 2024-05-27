
class className {
    private atributo1: string;

    public constructor(atributo1: string) {
        this.atributo1 = atributo1;
    }
}
class Vehiculo {
    public constructor(
        protected readonly marca: string,
        private readonly modelo: string,
        private color: string) { }
    public conducir() {
        console.log(`manejando ${this.marca}, ${this.modelo}, ${this.color}`);
    }
    get getMarca() {
        return this.marca;
    }
    set setColor(color: string) {
        this.color = color;
    }
    static getIdTienda() {
        return (Math.floor(Math.random() * 100) + 'MX52');
    }
}

const carro = new Vehiculo('audi', 'RS Q8', 'Azul');

let moto = {
    marca: 'audi',
    modelo: 'rs 5',
    conducir: carro.conducir
};
//moto.conducir();

// Herencia
class VehiculoAereo extends Vehiculo {
    public override conducir(): void {
        console.log(`transporte aereo: ${this.marca}`);
    }
}
let avion = new VehiculoAereo('jet', 'xt', 'blanco');
//avion.conducir();

//GET y  SET//
avion.setColor = 'negro';
//console.log(avion.getMarca);
//console.log(avion);

//Funciones estaticas
//console.log(Vehiculo.getIdTienda());


// clases y funciones Abstractas //
abstract class FiguraGeometrcia {
    constructor(
        public cantidadLados: number,
        protected nombre: string
    ) { }
    abstract calcularArea(): void;
}
class cuadrado extends FiguraGeometrcia {
    constructor(
        public cantidadLados: number,
        protected nombre: string,
        public longitudLado: number
    ) {
        super(cantidadLados, nombre);
    }
    calcularArea() {
        console.log(`${this.nombre} area : ${Math.pow(this.longitudLado, 2)}`);
    }
}

let figura = new cuadrado(4, 'cuadrado', 5);
//figura.calcularArea();