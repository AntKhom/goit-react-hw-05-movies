import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '53d9b9f40d490e17b438225a046516a6';

export const fetchTrendingMovies = async () => {
    const res = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    console.log(res.data);
    return res.data;
};


export const fetchMovieById = async (movieId) => {
    const res = await axios.get(`movie/${movieId}?api_key=${API_KEY}&language=en-US`);
    console.log(res.data);
    return res.data;
};

export const fetchMovieCredits = async (movieId) => {
    const res = await axios.get(`movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
    console.log(res.data);
    return res.data;
};

export const fetchMovieReviews = async (movieId) => {
    const res = await axios.get(`movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
    console.log(res.data);
    return res.data;
};

export const searchMovie = async (query) => {
    const res = await axios.get(`search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1`);
    console.log(res.data);
    return res.data;
};