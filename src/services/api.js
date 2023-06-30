import axios from 'axios';

// URL Filmes em cartaz:
// https://api.themoviedb.org/3/movie/now_playing?api_key=828452c63495d41e429db2d6331f6974&language=pt-BR&page=1

export const key = '828452c63495d41e429db2d6331f6974'

const moviesApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
})

export default moviesApi;