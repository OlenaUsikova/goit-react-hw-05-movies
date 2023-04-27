import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { fetchMovies } from 'services/movieAPI';

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        fetchMovies().then((res) => setMovies(res.results));
    }, []);
      return (
        <section>
        <h1>Trending today</h1>
          <ul>
          {movies.map(({ title, id }) => (
            <li key={id}>
              <Link to={`movies/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
        <Outlet />
      </section> 
    )};

    export default HomePage;