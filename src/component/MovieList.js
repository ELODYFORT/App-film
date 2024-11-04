import React, { useContext } from "react";
import MovieContext from "./component/MovieContext.js";

function MovieList() {
	const { movies } = useContext(MovieContext);

	return (
		<section>
			<h1>Movie List</h1>
			<ul>
				{movies &&
					movies.map((movie) => (
						<li key={movie.movie_id}>
							{movie.title} ({movie.release_year})
						</li>
					))}
			</ul>
		</section>
	);
}

export default MovieList;
