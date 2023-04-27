import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMoviesCast } from 'services/movieAPI'

const Cast = () => {
	const { id } = useParams()
	const [actors, setActors] = useState([]);

	useEffect(() => {
        fetchMoviesCast(id).then(res => {
			setActors(res.cast)
		})
	}, [id])
	return ( actors.length && (
		<div>
			Cast
			<ul>
				{actors.map((data) => (
					<li key={data.cast_id}>
                        <img src={`https://image.tmdb.org/t/p/w200/${data.profile_path}`} alt={data.name} width='150px'/>
                        <h4>
                         {data.name}
                		</h4>
						<p>Character: {data.character}</p>
					</li>
				))}
			</ul>
		</div>)
	)
}
export default Cast