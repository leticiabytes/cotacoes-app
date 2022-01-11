import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.hgbrasil.com/finance?format=json-cors&key=bac1823f',
});

export default api;
