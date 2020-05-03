const { crearArchivo, listar } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
var colors = require('colors');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then((result) => console.log(`Archivo creado: ${result}`))
            .catch((err) => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}

//let base = 'a';

//console.log(process.argv);
//let argv2 = process.argv;
//console.log('Limite', argv.limite);
//console.log(argv2);
//let parametro = argv[2];
//let base = parametro.split('=')[1];
//console.log(base);

// crearArchivo(base)
//     .then((result) => console.log(`Archivo creado: ${result}`))
//     .catch((err) => console.log(err));