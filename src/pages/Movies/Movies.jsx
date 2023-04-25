import React, { useEffect, useState } from 'react';
import {  Link } from 'react-router-dom';
import { SearchMovie } from './SearchMovie';
import { fetchMoviesBySymbol } from '../../services/movieAPI';

export const Movies = () => {
   const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  

  const handleSearch = data => {
    setQuery(data);
    setMovies([]);
  };
  useEffect(() => {
    if (!query) {
      return;
    }
     setError('');
     fetchMoviesBySymbol(query)
      .then(res => {
        if (!res.data.hits.length) {
            setMovies([]);
          alert('Try another query!');
        } else {
            setMovies(prevMovies => [...prevMovies, ...res.data.hits]);
        }
         })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => console.log("Nothing"));
  }, [query, setError]);

  return (
    <div>
      
      <SearchMovie onSubmit={handleSearch}></SearchMovie>
      <ul>
          {movies.map(({ title, id }) => (
            <li key={id}>
              {' '}<Link to={id}>{title}</Link>
            </li>
          ))}
        </ul>
    </div>
  );
};

