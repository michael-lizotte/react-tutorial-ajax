import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

axios.defaults.headers.common['x-auth'] = 'AUTH TOKEN FROM AXIOS.JS';

export default instance;