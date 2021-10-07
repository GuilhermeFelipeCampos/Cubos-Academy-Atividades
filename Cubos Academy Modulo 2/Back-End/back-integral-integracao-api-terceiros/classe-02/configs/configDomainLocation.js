const axios = require('axios');

const instAxios = axios.create({
    baseURL: 'https://ipgeolocation.abstractapi.com/v1/',
    params: {
        api_key: '0750b0675c64407d96981e21fd8dbaae',
    }
});

module.exports = {
    instAxios,
};