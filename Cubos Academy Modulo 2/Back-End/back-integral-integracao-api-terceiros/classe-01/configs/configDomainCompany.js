const axios = require('axios');

const instAxios = axios.create({
    baseURL: 'https://companyenrichment.abstractapi.com/v1/',
    params: {
        api_key: '34f38c518278482985874b95e230e1fa',
    }
});

module.exports = {
    instAxios,
};