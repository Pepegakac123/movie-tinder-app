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

	const handleSwipe = (id: string, direction: "left" | "right") => {
		// if (direction === "left") {
		// } else {
		// 	console.log(direction);
		// }
		console.log(direction);
		setMovies((prev) => prev.filter((movie) => movie.id !== id));
		setCurrentMovieIndex((prev) => prev - 1);
	};
	console.log(currentMovieIndex);

	return (
		<>
			{currentMovieIndex < 0 ? (
				<h1 className="text-3xl font-bold capitalize text-slate-200 text-center mt-8">
					No movies found
				</h1>
			) : (
				<>
					{movies.map((movie) => (
						<MovieCard key={movie.id} movie={movie} handleSwipe={handleSwipe} />
					))}
					<ControlPanel movie={currentMovie} handleSwipe={handleSwipe} />
				</>
			)}
		</>
	);

	//  User Flow
	// 	User click on the button (controlpanel)
	// 	Context  get actualised (triggerSwipeAnimation)
	// 	MovieCard reacts to change of the (swipeAnimation) state because of useEffect
	// 	Animation is being played
	// 	After animation the card is deleted(handleSwipe) and the (swipeanimation) state is resetting
};

export default MoviesCard;
