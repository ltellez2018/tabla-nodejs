// * Requires
const  argv = require('./config/yargs').argv;

const colors = require('colors');

console.log('hello'.green); // outputs green text


// * destructuracion
const {crearArchivo, listarTabla}  = require('./multiplicar/multiplicar')


// * Argumento desde la terminal
let commando = argv._[0];


switch (commando) {
    case 'listar':
        // * Listar tablas
        listarTabla(argv.base,argv.limite);
        break;
    case 'crear':
        // * Creacion de archivos
             crearArchivo(argv.base,argv.limite)
                .then(archivo => console.log(`Archivo creado ${archivo}`))
                .catch(err => console.log(err));       
        break;
    default:
        console.log('comando no reconocido');   
        break;
}


/* 
let base =  parametro.split('=')[1]; */



