import axios from 'axios';

const KEY = '6f3a72a470b06bab99f8d69f54b4e2d3';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function fetchMovies(param) {
  const response = await axios({param}, {
    params: {
      apikey: KEY,
      },
  });
  return response.data;
}

export async function fetchMoviesBySymbol( query) {
  const response = await axios(`/search/search-movies/${query}`, {
    params: {
      apikey: KEY,
    },
  });
  return response.data;
}
export async function fetchMoviesById( id) {
    const response = await axios(`/search/search-movies/${id}`, {
      params: {
        apikey: KEY,
      },
    });
    return response.data;
  }