/**
 * Logica para obtener toda la direccion o todo el lugar
 */
const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,

        headers: { 'x-rapidapi-key': '4eb98c0a17msh47dcdf089252f2cp161b00jsn4f78a9004e9a' }
    });

    const respuesta = await instance.get();

    //Si no tenemos resultados 
    if (respuesta.data.Results === 0) {
        throw new Error(`No existen resulados para ${dir}`);
    }

    const data = respuesta.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    // instance.get()
    //     .then(resp => {
    //         console.log(resp.data.Results[0]);
    //     })
    //     .catch(err => {
    //         console.log('Error:...', err);
    //     })

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}