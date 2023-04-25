import { fetchMovies } from 'services/moviesAPI';
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const HomePage = () => {
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        fetchMovies("trending/get-trending").then(setMovies);
    }, []);
    return (
        <>
        <h1>Trending today</h1>
        {' '}
        <ul>
          {movies.map(({ name, id }) => (
            <li key={id}>
              <Link to={id}>{name}</Link>
            </li>
          ))}
        </ul>
        <Outlet />
      </> 
    );
  };