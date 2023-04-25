import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesById } from '../../services/movieAPI';
import { MovieDetails } from './MovieDetails';

export const MoviePage = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchMoviesById(id).then(setMovie(movie));
  }, [movie, id]);
  return (
    <>
      {movie && (
        <section>
          <img src={movie.poster_path.url} alt={movie.title} />
          <h2>{movie.title}</h2>
          <h3>`User score: ${movie.score}%`</h3>
          <h3>Overview {}</h3>
          <h3>Genres: {}</h3>
        </section>
      )}
      <section>
        <MovieDetails />
      </section>
    </>
  );
};
