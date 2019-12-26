// * Paquetes Requeridos
const fs = require('fs'); // * Propio de node
const colors = require('colors');




// * Promesas

let listarTabla = (base,limite = 10) => {  
    console.log('|----------------------|'.yellow);
    console.log(`|---tabla de ${base}---|`.yellow);
    console.log('|----------------------|'.yellow);
    
    
    // * Cuerpo de la promesa
     for (let counter = 1; counter <= limite; counter++) {
           console.log(`${base} * ${counter} =  ${base * counter}`);    
        }  
}



/* module.exports.crearArchivo = (base) => { */
let crearArchivo = (base,limite = 10) => {
    return new Promise( (resolve, reject) => {
        // * Validacion

        if(!Number(base)) {
            reject(`El valor ${base} No es un número`);
            return;
        }

        // * Cuerpo de la promesa
        let data = '';
        for (let counter = 1; counter <= limite; counter++) {
           data += `${base} * ${counter} =  ${base * counter} \n`;    
        }

        // * Implementando resolve y reject       
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {  // * Creacion de archivos    
            if (err) {
                 reject(err);   
            } else {
                resolve(`tabla${base}.txt`);
            }            
          });
        
    });
};


// * Exportaciones
module.exports = {
    crearArchivo,
    listarTabla
}


