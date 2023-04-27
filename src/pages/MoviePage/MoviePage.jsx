import { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { fetchMoviesById } from '../../services/movieAPI';
import { StyledLink, StyledSection, Subtitle } from './StyledMoviePage';

const MoviePage = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchMoviesById(id).then((res) => setMovie(res));
    }, [ id]);
    // console.log(movie.vote_average * 10); 
  return (
    <>
    <button onClick={() => navigate(-1)}>Go back</button>
      {movie && (
        <StyledSection>
          <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} width='250px'/>
          <div>
          <h1>{movie.title}</h1>
          <h3>User Score: {movie.vote_average}</h3>
          <h2>Overview: </h2>
          <p>{movie.overview}</p>
          <h2>Genres: </h2>
          <h4>{movie.genres.map(genre => genre.name).join(', ')}</h4>
          </div>
        </StyledSection>
      )}
      
      <Subtitle> Additionali information</Subtitle>
      <StyledSection>
        <StyledLink to="cast">Cast</StyledLink>
			<br />
		<StyledLink to="reviews" >Rewiews</StyledLink>
         <Outlet />
      </StyledSection>
    </>
  );
};
export default MoviePage
