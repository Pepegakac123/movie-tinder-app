import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import ControlPanel from "./ControlPanel";
import { customMoviesApi } from "@/api/axios";
import Loader from "./Loader";
import { useGlobalContext } from "@/context";

const MoviesCard = () => {
	const context = useGlobalContext();
	if (!context) return null;
	const {
		movies,
		currentMovieIndex,
		isLoading,
		isError,
		handleSwipe,
		isBeingSwiped,
	} = context;
	//	simulate the data fetch from API with axios(i set the base url in the api/axios.ts)
	const currentMovie = movies[currentMovieIndex];

	// Simulating backend put call

	if (isLoading) {
		return <Loader />;
	}

	if (isError) {
		return (
			<div className="flex flex-col items-center justify-center min-h-screen">
				<h1 className="text-3xl font-bold capitalize text-slate-200 text-center mt-8">
					An error has occurred
				</h1>
			</div>
		);
	}

	return (
		<>
			{currentMovieIndex < 0 ? (
				<h1 className="text-3xl font-bold capitalize text-slate-200 text-center mt-8">
					No movies found
				</h1>
			) : (
				<>
					{movies.map((movie) => (
						<MovieCard key={movie.id} movie={movie} />
					))}
					<ControlPanel movie={currentMovie} />
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
