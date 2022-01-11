import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.hgbrasil.com/finance?format=json-cors&key=72ee0ee9',
});

export default api;
