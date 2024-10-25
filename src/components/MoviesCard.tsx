import { movies as mockMovies } from "../utils";
import type { Movies } from "../types";
import { useState } from "react";
import MovieCard from "./MovieCard";

const MoviesCard = () => {
	const [movies, setMovies] = useState<Movies[]>(mockMovies);

	const handleRemove = (id: string) => {
		setMovies((prev) => prev.filter((movie) => movie.id !== id));
	};

	return (
		<>
			{movies.map((movie) => (
				<MovieCard key={movie.id} movie={movie} handleRemove={handleRemove} />
			))}
		</>
	);
};

export default MoviesCard;
