import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.hgbrasil.com/finance?format=json-cors&key=a3d1f35a',
});

export default api;
