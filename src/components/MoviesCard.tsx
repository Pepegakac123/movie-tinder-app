import { movies as mockMovies } from "../utils";
import type { Movies } from "../types";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import ControlPanel from "./ControlPanel";
import { customMoviesApi } from "@/api/axios";
import Loader from "./Loader";

const MoviesCard = () => {
	const [movies, setMovies] = useState<Movies[]>(mockMovies);
	const [currentMovieIndex, setCurrentMovieIndex] = useState(
		mockMovies.length - 1,
	);
	const currentMovie = movies[currentMovieIndex];
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [isBeingSwiped, setIsBeingSwiped] = useState(false);

	//	simulate the data fetch from API with axios(i set the base url in the api/axios.ts)
	const fetchMovies = async () => {
		setIsLoading(true);
		try {
			// const { data: movies } = await customMoviesApi.get("/recommendations");
			// setMovies(movies);
			// setCurrentMovieIndex(movies.length - 1);
			await new Promise((resolve) => setTimeout(resolve, 500));
			setMovies(mockMovies);
			setCurrentMovieIndex(mockMovies.length - 1);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
			setIsError(true);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchMovies();
	}, []);

	// Simulating backend put call
	const handleSwipe = async (id: string, direction: "left" | "right") => {
		const decision = direction === "left" ? "reject" : "accept";
		setIsBeingSwiped(true);
		try {
			// const url = `/recommendations/${id}/${decision}`;
			setMovies((prev) => prev.filter((movie) => movie.id !== id));
			// await customMoviesApi.put(url);
			await new Promise((resolve) => setTimeout(resolve, 500));
			setCurrentMovieIndex((prev) => prev - 1);
		} catch (error) {
			console.log(error);
			setIsError(true);
		} finally {
			setIsBeingSwiped(false);
		}
	};

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
						<MovieCard key={movie.id} movie={movie} handleSwipe={handleSwipe} />
					))}
					<ControlPanel
						movie={currentMovie}
						handleSwipe={handleSwipe}
						isBeingSwiped={isBeingSwiped}
					/>
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
