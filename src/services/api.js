//https://api.hgbrasil.com/weather?key=d820b995&lat=-23.682&lon=-46.875

import axios from 'axios';

export const key = 'd820b995';

const api = axios.create({
    baseURL:'https://api.hgbrasil.com/'
});

export default api;
