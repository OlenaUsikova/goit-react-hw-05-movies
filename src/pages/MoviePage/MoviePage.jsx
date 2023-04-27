import { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { fetchMoviesById } from '../../services/movieAPI';
import { MovieDetails } from './MovieDetails';

export const MoviePage = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchMoviesById(id).then((res) => setMovie(res));
    }, [ id]);
  return (
    <>
    <button onClick={() => navigate(-1)}>Go back</button>
      {movie && (
        <section>
          <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} width='250px'/>
          <h1>{movie.title}</h1>
          <h3>User Score: (Number({movie.vote_average}) * 10)%</h3>
          <h2>Overview: </h2>
          <h4>{movie.overview}</h4>
          <h2>Genres: </h2>
          <h4>{movie.genres.map(genre => genre.name).join(', ')}</h4>
        </section>
      )}
      <section>
      <>
            <h3> Additionali information</h3>
        <Link to="cast">Cast</Link>
			<br />
		<Link to="reviews" >Rewiews</Link>
         </>
        <Outlet />
      </section>
    </>
  );
};
