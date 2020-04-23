/**
 * Logica para utilizar el API  de OpenWeather
 * para obtener el clima del lugar segun su latitud y longitud
 */

const axios = require('axios');

const getClima = async(lat, lng) => {

    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=ee404b7781ecb1fc8ee191e591694fe5&units=metric`);

    return respuesta.data.main.temp;
}

module.exports = {
    getClima
}