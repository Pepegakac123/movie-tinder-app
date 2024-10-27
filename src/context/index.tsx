import { createContext, useState, useContext, useEffect } from "react";
import type { AppContextType } from "@/types";
import { movies as mockMovies } from "../utils";
import { type Movies, movieSchema } from "../types";
import { customMoviesApi } from "@/api/axios";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [swipeAnimation, setSwipeAnimation] = useState<{
		movie: Movies;
		direction: "left" | "right";
	} | null>(null); // Which card have to be animated and to which direction
	const [movies, setMovies] = useState<Movies[]>(mockMovies);
	const [currentMovieIndex, setCurrentMovieIndex] = useState(
		mockMovies.length - 1,
	);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [isBeingSwiped, setIsBeingSwiped] = useState(false);
	const moviesSchema = z.array(movieSchema);
	const { toast } = useToast();
	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const triggerSwipeAnimation = (
		//Initite the animation of the card that have to be swiped
		movie: Movies,
		direction: "left" | "right",
	) => {
		setSwipeAnimation({ movie, direction });
	};

	const resetSwipeAnimation = () => {
		setSwipeAnimation(null);
	};

	// Simulate backend put call
	const handleSwipe = async (movie: Movies, direction: "left" | "right") => {
		const decision = direction === "left" ? "reject" : "accept";
		setIsBeingSwiped(true);
		const { id, title } = movie;
		try {
			// const url = `/recommendations/${id}/${decision}`;
			setMovies((prev) => prev.filter((movie) => movie.id !== id));
			await new Promise((resolve) => setTimeout(resolve, 500));
			// await customMoviesApi.put(url);
			decision === "accept"
				? toast({
						title: `You liked the ${title}`,
						className: "bg-green-500 text-zinc-900 border-none",
					})
				: toast({
						title: `You disliked the ${title}`,
						className: "bg-red-500 text-white border-none",
					});
			setCurrentMovieIndex((prev) => prev - 1);
		} catch (error) {
			console.log(error);
			setIsError(true);
		} finally {
			setIsBeingSwiped(false);
		}
	};
	// Simulate fetchowanie data from an API with the zod check
	const fetchMovies = async () => {
		setIsLoading(true);
		try {
			// const { data: rawData } = await customMoviesApi.get("/recommendations");
			// const movies = moviesSchema.parse(movies);
			// setMovies(movies);
			// setCurrentMovieIndex(movies.length - 1);
			await new Promise((resolve) => setTimeout(resolve, 500));
			const rawMovies = mockMovies;
			const movies = moviesSchema.parse(rawMovies);
			setMovies(movies);
			setCurrentMovieIndex(movies.length - 1);
			setIsLoading(false);
		} catch (error) {
			if (error instanceof z.ZodError) {
				console.log("Validation error:", error.errors);
			} else {
				console.log(error);
			}
			setIsError(true);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchMovies();
	}, []);

	return (
		<AppContext.Provider
			value={{
				isModalOpen,
				openModal,
				closeModal,
				swipeAnimation,
				triggerSwipeAnimation,
				resetSwipeAnimation,
				movies,
				currentMovieIndex,
				isLoading,
				isError,
				handleSwipe,
				isBeingSwiped,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
