const fs = require('fs');
var colors = require('colors');

let listar = (base, limite) => {
    console.log('===================================');
    console.log(`========tabla de ${base}===========`.blue);
    console.log('===================================');
    for (let index = 1; index <= limite; index++) {
        console.log(`${base} * ${index} = ${ base * index}\n`);
    }
};

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido "${base}" no es un número!`);
            return;
        }
        let data = '';

        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${ base * index}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}.txt`.red);
        });
    });
};
module.exports = {
    crearArchivo,
    listar
};