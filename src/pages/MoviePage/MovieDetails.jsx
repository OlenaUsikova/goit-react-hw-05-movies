import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {  Link } from 'react-router-dom';
import { fetchMoviesById } from '../../services/movieAPI';

export const MovieDetails = () => {
 
  const [movie, setMovie] = useState(null);
   const { id } = useParams();

  useEffect(() => {
    fetchMoviesById(id).then(setMovie(movie));
  }, [movie,id]);
  return (
    <>
            <h3> Additionali information</h3>
        <Link to={`cast`}>Cast</Link>
			<br />
		<Link to={`rewiews`}>Rewiews</Link>
     
    </>
  );
};
