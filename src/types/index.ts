import { z } from "zod";
export type Movies = {
	id: string;
	imageURL: string;
	title: string;
	summary: string;
	rating: number;
};

// Define the schema for a single movie
export const movieSchema = z.object({
	id: z.string(),
	imageURL: z.string().url(), // Assuming the imageURL should be a valid URL
	title: z.string(),
	summary: z.string(),
	rating: z.number().min(0).max(10), // Assuming rating should be between 0 and 10
});

export type AppContextType = {
	isModalOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
	swipeAnimation: {
		movie: Movies;
		direction: "left" | "right";
	} | null;
	triggerSwipeAnimation: (movie: Movies, direction: "left" | "right") => void;
	resetSwipeAnimation: () => void;
	movies: Movies[];
	currentMovieIndex: number;
	isLoading: boolean;
	isError: boolean;
	handleSwipe: (movie: Movies, direction: "left" | "right") => Promise<void>;
	isBeingSwiped: boolean;
};
