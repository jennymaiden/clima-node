const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const yargs = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para tener el clima',
        demant: true
    }
}).argv;

// console.log(yargs.direccion);

// lugar.getLugarLatLng(yargs.direccion)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(err => {
//         console.log('Error:::', err);
//     })

// clima.getClima(3.030000, -75.169998)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(err => {
//         console.log('Error:::', err);
//     })

const getInfo = async(direccion) => {

    try {
        const resLugar = await lugar.getLugarLatLng(direccion);

        const resClima = await clima.getClima(resLugar.lat, resLugar.lng);

        return `El clima de ${direccion} es de ${resClima} C°`;

    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }

}

getInfo(yargs.direccion).then(console.log).catch(console.log);