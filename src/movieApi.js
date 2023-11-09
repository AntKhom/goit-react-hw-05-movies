import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '53d9b9f40d490e17b438225a046516a6';

export const fetchTrendingMovies = async () => {
    const res = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    console.log(res.data);
    return res.data;
};