import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMoviesReviews } from 'services/movieAPI'

const Reviews = () => {
	const { id } = useParams()
	const [reviews, setReviews] = useState("");

	useEffect(() => {
        fetchMoviesReviews(id).then(res => {
			setReviews(res.reviews)
		})
	}, [id])
	return ( reviews.length !== 0 ? (
		<div>
			Reviews
			<ul>
				{reviews.map(review => (
					<li key={review.id}>
                        <h4>
                         Review author: {review.author}
                		</h4>
						<p>{review.content}</p>
					</li>
				))}
			</ul>
		</div>) : (
            <p>Sorry, we don't have any reviews for this movie</p>
        )
	)
}
export default Reviews