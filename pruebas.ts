import * as readline from 'readline';

ingresarDatosConsola()
function ingresarDatosConsola() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    rl.question('¿Cuál es tu nombre? ', (nombre) => {
        console.log(`Hola, ${nombre}!`);
        rl.close();
    });
}

//Instalar paquetes de node -> npm install @types/node
