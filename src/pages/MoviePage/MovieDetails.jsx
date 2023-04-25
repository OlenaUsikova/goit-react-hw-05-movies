import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate, Link } from 'react-router-dom';
import { fetchMoviesById } from '../../services/movieAPI';

export const MovieDetails = () => {
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
   const { id } = useParams();

  useEffect(() => {
    fetchMoviesById(id).then(setMovie(movie));
  }, [movie,id]);
  return (
    <>
    <button onClick={() => navigate(-1)}>Go back</button>
        <h2> Additionali information</h2>
        <Link to={`cast`}>Cast</Link>
			<br />
		<Link to={`rewiews`}>Rewiews</Link>
     
    </>
  );
};
