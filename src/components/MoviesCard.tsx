import { movies as mockMovies } from "../utils";
import type { Movies } from "../types";
import { useState } from "react";
import MovieCard from "./MovieCard";
import ControlPanel from "./ControlPanel";

const MoviesCard = () => {
	const [movies, setMovies] = useState<Movies[]>(mockMovies);
	const [currentMovieIndex, setCurrentMovieIndex] = useState(
		mockMovies.length - 1,
	);
	const currentMovie = movies[currentMovieIndex];

	const handleSwipe = (id: string) => {
		setMovies((prev) => prev.filter((movie) => movie.id !== id));
		setCurrentMovieIndex((prev) => prev - 1);
	};

	return (
		<>
			{movies.map((movie) => (
				<MovieCard key={movie.id} movie={movie} handleSwipe={handleSwipe} />
			))}
			<ControlPanel movie={currentMovie} handleSwipe={handleSwipe} />
		</>
	);
	//  displayed front movie id = movies[movies.length - 1].id
};

export default MoviesCard;
