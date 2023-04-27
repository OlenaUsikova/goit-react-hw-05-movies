import axios from 'axios';


const API_KEY = '8c3b14bfd964334b0e677cd4ab73e9a9';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';


export async function fetchMovies() {
  const response = await axios(`/trending/all/day`, {
    params: {
      api_key: API_KEY,
      },
  });
  console.log(response.data);
  return response.data;
}

export async function fetchMoviesBySymbol(query) {
  const response = await axios(`/search/movie`, {
    params: {
      query: query,
      api_key: API_KEY,
    },
  });
  return response.data;
}
export async function fetchMoviesById( id) {
    const response = await axios(`movie/${id}`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  }

  export async function fetchMoviesCast(id) {
    const response = await axios(`movie/${id}/credits`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  }
  export async function fetchMoviesReviews(id) {
    const response = await axios(`movie/${id}/reviews`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  }
  
