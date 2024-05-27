enum rol { doctor, enefermero, cirujano };
interface Persona {
    name: string,
    email: string,
    role: rol
};
type Empleado = {
    name: string,
    email: string,
    role: rol
};
interface salario {
    total: number,
    sueldoDiario(): string
};
const medico = {
    name: 'example',
    email: 'example@g.com',
    role: rol.doctor,
    total: 2500,
    sueldoDiario(): string { return 'salario diario: ' + this.total }
};

const imprimirPersonal = (objeto: Persona) => {
    console.log(objeto);
};
//imprimirPersonal(medico);

const imprimirPersonalSalario = (objeto: salario) => {
    console.log(objeto.sueldoDiario())
};
//imprimirPersonalSalario(medico);

let listaObjetos: Persona[] = [];