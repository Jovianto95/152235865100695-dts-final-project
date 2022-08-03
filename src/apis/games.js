import axios from 'axios';

const games = axios.create({
    baseURL: "https://api.rwag.io/api",
    params:{
        api_key: '7b98e317a5314aa284a7574e87642044',
     
    }
});

export default games;