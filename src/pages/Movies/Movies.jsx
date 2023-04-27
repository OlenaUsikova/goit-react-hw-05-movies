import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { SearchMovie } from '../../components/Search/SearchMovie';
import { fetchMoviesBySymbol } from '../../services/movieAPI';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [ setError] = useState('');
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
 
  const handleSearch = data => {
    setSearchParams({ query: data });
  };
  useEffect(() => {
    if (!query) {
      return;
    }
    setError('');
    fetchMoviesBySymbol(query)
      .then(res => {
        if (!res.results.length) {
          setMovies([]);
          alert('Try another query!');
        } else {
          setMovies(prevMovies => [...prevMovies, ...res.results]);
        }
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => console.log('Nothing'));
  }, [query, setError]);
    return (
    <div>
      <SearchMovie onSubmit={handleSearch}></SearchMovie>
      <ul>
        {movies.map(({ title, id }) => (
          <li key={id}>
            <Link to={`${id}`} state={{from: location}}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Movies;
